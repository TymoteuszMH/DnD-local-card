<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import { initailWeapon } from '@/utils';
    import { ref } from 'vue';
    import { Plus } from '@element-plus/icons-vue';
    import WeaponForm from '../../forms/WeaponForm.vue';
    import Modal from '@/components/elements/Modal.vue';

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
    <Modal :show="dialogVisible" :hide="onClose" title="Add Weapon" :onClose="onClose" :save-button="{text: 'Save', func: onSave, disabled: !weapon.name || !weapon.damage.diceNumber || weapon.damage.diceNumber < 0}">
        <WeaponForm :weapon/>
    </Modal>
</template>