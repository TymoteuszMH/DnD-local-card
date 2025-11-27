<script setup lang="ts">
    import type { IFeat } from '@/types';
    import { initialFeat } from '@/utils';
    import { ref } from 'vue';
    import { Plus } from '@element-plus/icons-vue';
    import Modal from '@/components/elements/Modal.vue';
    import FeatForm from '../../forms/FeatForm.vue';

    const props = defineProps<{
        save: (feat: IFeat) => void,
    }>();

    const feat = ref<IFeat>(initialFeat())
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onSave(){
        props.save(feat.value);
        feat.value = initialFeat();
        onClose();
    }
</script>

<template>
    <el-button class="border! border-white!" type="primary" :icon="Plus" @click="dialogVisible = true">Add</el-button>
    <Modal :show="dialogVisible" :hide="onClose" title="Add Feat" :onClose="onClose" :save-button="{text: 'Save', func: onSave, disabled: !feat.name}">
        <FeatForm :form="feat"/>
    </Modal>
</template>