<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import Modal from '@/components/elements/Modal.vue';
    import WeaponForm from '../../forms/WeaponForm.vue';
    import { reactive, ref } from 'vue';
    import { ElMessage, ElMessageBox } from 'element-plus';
    import 'element-plus/es/components/message/style/css';
    import 'element-plus/es/components/message-box/style/css';

    const props = defineProps<{
        weapon: IWeapon,
        className: string
        delete: () => void,
    }>();

    const editWeapon = reactive<IWeapon>(props.weapon);
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onDelete(){
        if(!props.delete)
            return;
        ElMessageBox.confirm(
            'Are you sure you want to delete this weapon?', 
            'Delete weapon', 
            {
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                type: 'warning',
            }
        ).then(() => {
            props.delete();
            onClose();
            ElMessage({
                type: 'success',
                message: 'Delete completed',
                placement: "bottom"
            })
        })
    }
</script>

<template>
    <div :class="`text-white cursor-pointer transition-colors! duration-100 ease-in-out hover:bg-[rgba(255,255,255,0.4)] ${className}`" @click="dialogVisible = true"><slot class="w-full! h-full"></slot></div>
    <Modal :show="dialogVisible" :hide="onClose" title="Edit Weapon" :onClose="onClose" :close-button="{text: 'Close', func: onClose, type: 'primary'}" :save-button="{text: 'Delete', func: onDelete, type: 'danger'}">
        <WeaponForm :weapon="editWeapon"/>
    </Modal>
</template>