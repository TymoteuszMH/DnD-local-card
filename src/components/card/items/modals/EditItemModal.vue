<script setup lang="ts">
    import type { IItem } from '@/types';
    import Modal from '@/components/elements/Modal.vue';
    import { reactive, ref } from 'vue';
    import { ElMessage, ElMessageBox } from 'element-plus';
    import 'element-plus/es/components/message/style/css';
    import 'element-plus/es/components/message-box/style/css';
import ItemForm from '../../forms/ItemForm.vue';

    const props = defineProps<{
        item: IItem,
        className: string
        delete: () => void,
    }>();

    const editItem = reactive<IItem>(props.item);
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onDelete(){
        if(!props.delete)
            return;
        ElMessageBox.confirm(
            'Are you sure you want to delete this item?', 
            'Delete item', 
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
    <Modal v-if="dialogVisible" :show="dialogVisible" :hide="onClose" title="Edit Item" :onClose="onClose" :close-button="{text: 'Close', func: onClose, type: 'primary'}" :save-button="{text: 'Delete', func: onDelete, type: 'danger'}">
        <ItemForm :item="editItem" is-edit/>
    </Modal>
</template>