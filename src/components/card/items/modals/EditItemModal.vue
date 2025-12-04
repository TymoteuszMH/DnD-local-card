<script setup lang="ts">
import type { IItem } from '@/types';
import Modal from '@/components/elements/Modal.vue';
import { reactive, ref } from 'vue';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import ItemForm from '../../forms/ItemForm.vue';

const props = defineProps<{
    item: IItem,
    className: string
    onDelete: () => Promise<boolean>,
}>();

const editItem = reactive<IItem>(props.item);
const dialogVisible = ref(false)

function onClose() {
    dialogVisible.value = false;
}

async function onDelete() {
    const del = await props.onDelete();
    if (del) {
        onClose();
    }
}
</script>

<template>
    <div :class="`text-white cursor-pointer transition-colors! duration-100 ease-in-out hover:bg-[rgba(255,255,255,0.4)] ${className}`"
        @click="dialogVisible = true">
        <slot class="w-full! h-full"></slot>
    </div>
    <Modal v-if="dialogVisible" :show="dialogVisible" :hide="onClose" title="Edit Item" :onClose="onClose"
        :close-button="{ text: 'Close', func: onClose, type: 'primary' }"
        :save-button="{ text: 'Delete', func: onDelete, type: 'danger' }">
        <ItemForm :item="editItem" is-edit />
    </Modal>
</template>