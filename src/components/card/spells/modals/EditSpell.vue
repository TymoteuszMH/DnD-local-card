<script setup lang="ts">
import type { ISpell } from '@/types';
import Modal from '@/components/elements/Modal.vue';
import { reactive, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import SpellForm from '../../forms/SpellForm.vue';

const props = defineProps<{
    spell: ISpell,
    className: string
    onDelete: () => Promise<boolean>,
}>();

const editSpell = reactive<ISpell>(props.spell);
const dialogVisible = ref(false)

function onClose() {
    dialogVisible.value = false;
}

function onDelete() {
    props.onDelete().then(() => onClose())
}
</script>

<template>
    <div :class="`text-white cursor-pointer transition-colors! duration-100 ease-in-out hover:bg-[rgba(255,255,255,0.4)] ${className}`"
        @click="dialogVisible = true">
        <slot class="w-full! h-full"></slot>
    </div>
    <Modal :show="dialogVisible" :hide="onClose" title="Edit Spell" :onClose="onClose"
        :close-button="{ text: 'Close', func: onClose, type: 'primary' }"
        :save-button="{ text: 'Delete', func: onDelete, type: 'danger' }">
        <SpellForm :spell="editSpell" is-edit />
    </Modal>
</template>