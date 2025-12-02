<script setup lang="ts">
    import type { ISpell } from '@/types';
    import Modal from '@/components/elements/Modal.vue';
    import { ref } from 'vue';
    import 'element-plus/es/components/message/style/css';
    import 'element-plus/es/components/message-box/style/css';
    import SpellForm from '../../forms/SpellForm.vue';
    import { initialSpell } from '@/utils';
import { Plus } from '@element-plus/icons-vue';

    const props = defineProps<{
        save: (spell: ISpell) => void,
    }>();

    const spell = ref<ISpell>(initialSpell())
    const dialogVisible = ref(false)

    function onClose(){
        dialogVisible.value = false;
    }

    function onSave(){
        props.save(spell.value);
        spell.value = initialSpell();
        onClose();
    }
</script>

<template>
    <el-button class="border! border-white!" type="primary" :icon="Plus" @click="dialogVisible = true">Add</el-button>
    <Modal :show="dialogVisible" :hide="onClose" title="Add Spell" :onClose="onClose" :save-button="{text: 'Save', func: onSave, disabled: !spell.name}">
        <SpellForm :spell/>
    </Modal>
</template>