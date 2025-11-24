<script setup lang="ts">
    import type { IItem } from '@/types';
    import { initialItem } from '@/utils';
    import { ref } from 'vue';
    import { Plus } from '@element-plus/icons-vue';
    import Modal from '@/components/elements/Modal.vue';
    import ItemForm from '../../forms/ItemForm.vue';

    const props = defineProps<{
        save: (item: IItem) => void,
    }>();

    const item = ref<IItem>(initialItem())
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onSave(){
        props.save(item.value);
        item.value = initialItem();
        onClose();
    }
</script>

<template>
    <el-button class="border! border-white!" type="primary" :icon="Plus" @click="dialogVisible = true">Add</el-button>
    <Modal :show="dialogVisible" :hide="onClose" title="Add Item" :onClose="onClose" :save-button="{text: 'Save', func: onSave, disabled: !item.name}">
        <ItemForm :form="item"/>
    </Modal>
</template>