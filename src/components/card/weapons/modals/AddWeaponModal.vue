<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import { dices, initailWeapon, weaponDemageTypes } from '@/utils';
    import { reactive, ref } from 'vue';
    import { Plus } from '@element-plus/icons-vue';
import WeaponForm from '../WeaponForm.vue';

    const props = defineProps<{
        save: (weapon: IWeapon) => void,
    }>();

    const weapon = ref<IWeapon>(initailWeapon())
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onSave(){
        props.save(weapon.value);
        weapon.value = initailWeapon();
        onClose();
    }
</script>

<template>
    <el-button class="border! border-white!" type="primary" :icon="Plus" @click="dialogVisible = true">Add</el-button>
    <el-dialog center destroy-on-close v-model="dialogVisible" title="Weapon" width="500" custom-class="border border-white bg-black!" ::before-close="onClose">
        <WeaponForm :form="weapon"/>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="onClose">Cancel</el-button>
                <el-button type="primary" @click="onSave" :disabled="!weapon.name || !weapon.damage.diceNumber || weapon.damage.diceNumber < 0">Save</el-button>
            </div>
        </template>
    </el-dialog>
</template>