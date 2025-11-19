<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import { dices, weaponDemageTypes } from '@/utils';
    import { reactive, ref } from 'vue';
    import { ElMessageBox } from 'element-plus';

    const props = defineProps<{
        weapon: IWeapon,
        className: string
        delete: () => void,
    }>();

    const addEditWeapon = reactive<IWeapon>({...props.weapon});
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onSave(){
        onClose();
    }

    function onDelete(){
        if(!props.delete)
            return;
        ElMessageBox.confirm("Are you sure you want to delete this weapon?").then(()=>{
            props.delete();
            onClose();
        })
    }
</script>

<template>
    <el-button type="primary" @click="dialogVisible = true" :class="className"><slot></slot></el-button>
    <el-dialog center destroy-on-close v-model="dialogVisible" title="Weapon" width="500" :key="addEditWeapon" ::before-close="onClose">
        <div class="flex flex-col gap-2">
            <el-input v-model.trim="addEditWeapon.name" placeholder="Name" :disabled="!!weapon"/>
            <el-input type="number" v-model="addEditWeapon.amount" placeholder="Amount"/>
            <div class="flex flex-row gap-2">
                <div class="flex flex-row gap-2">
                    <el-input type="number" v-model="addEditWeapon.damage.diceNumber"/>
                    <span class="flex items-center">x</span>
                    <el-select v-model="addEditWeapon.damage.dice" placeholder="Dice">
                        <el-option v-for="dice in dices" :label="dice" :value="dice" />
                    </el-select>
                </div>
                <el-select v-model="addEditWeapon.damage.type" placeholder="Type">
                    <el-option v-for="type in weaponDemageTypes" :label="type" :value="type" />
                </el-select>
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="onClose">Close</el-button>
                <el-button type="danger" @click="onDelete()">Delete</el-button>
            </div>
        </template>
    </el-dialog>
</template>