<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import { dices, initailWeapon, weaponDemageTypes } from '@/utils';
    import { reactive, ref } from 'vue';
    import { Plus } from '@element-plus/icons-vue';

    const props = defineProps<{
        save: (weapon: IWeapon) => void,
    }>();

    const weapon = reactive<IWeapon>({...initailWeapon})
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onSave(){
        props.save({...weapon});
        onClose();
    }
</script>

<template>
    <el-button type="primary" :icon="Plus" @click="dialogVisible = true">Add</el-button>
    <el-dialog center destroy-on-close v-model="dialogVisible" title="Weapon" width="500" ::before-close="onClose">
        <div class="flex flex-col gap-2">
            <el-input v-model.trim="weapon.name" placeholder="Name"/>
            <el-input type="number" v-model="weapon.amount" placeholder="Amount"/>
            <div class="flex flex-row gap-2">
                <div class="flex flex-row gap-2">
                    <el-input type="number" v-model="weapon.damage.diceNumber"/>
                    <span class="flex items-center">x</span>
                    <el-select v-model="weapon.damage.dice" placeholder="Dice">
                        <el-option v-for="dice in dices" :label="dice" :value="dice" />
                    </el-select>
                </div>
                <el-select v-model="weapon.damage.type" placeholder="Type">
                    <el-option v-for="type in weaponDemageTypes" :label="type" :value="type" />
                </el-select>
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="onClose">Cancel</el-button>
                <el-button type="primary" @click="onSave" :disabled="!weapon.name || !weapon.damage.diceNumber || weapon.damage.diceNumber < 0">Save</el-button>
            </div>
        </template>
    </el-dialog>
</template>