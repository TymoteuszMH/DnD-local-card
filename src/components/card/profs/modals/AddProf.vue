<script setup lang="ts">
    import type { IProficiency } from '@/types';
    import { initialProf } from '@/utils';
    import { ref } from 'vue';
    import { Plus } from '@element-plus/icons-vue';
    import Modal from '@/components/elements/Modal.vue';
    import ProfForm from '../../forms/ProfForm.vue';

    const props = defineProps<{
        save: (prof: IProficiency) => void,
    }>();

    const prof = ref<IProficiency>(initialProf())
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onSave(){
        props.save(prof.value);
        prof.value = initialProf();
        onClose();
    }
</script>

<template>
    <el-button class="border! border-white!" type="primary" :icon="Plus" @click="dialogVisible = true">Add</el-button>
    <Modal :show="dialogVisible" :hide="onClose" title="Add Proficency" :onClose="onClose" :save-button="{text: 'Save', func: onSave, disabled: !prof.name}">
        <ProfForm :prof/>
    </Modal>
</template>