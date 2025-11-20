<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import WeaponForm from '../WeaponForm.vue';
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
    <div :class="`border! border-white! text-white cursor-pointer transition-colors! duration-100 ease-in-out hover:bg-[rgba(255,255,255,0.4)] ${className}`" @click="dialogVisible = true"><slot class="w-full! h-full"></slot></div>
    <el-dialog center destroy-on-close v-model="dialogVisible" title="Weapon" width="500" ::before-close="onClose">
        <WeaponForm :form="editWeapon"/>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="onClose">Close</el-button>
                <el-button type="danger" @click="onDelete()">Delete</el-button>
            </div>
        </template>
    </el-dialog>
</template>