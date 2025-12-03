<script setup lang="ts">
    import type { ISpell } from '@/types';
    import EditSpell from './modals/EditSpell.vue';
    import CheckboxField from '@/components/elements/form/CheckboxField.vue';
    defineProps<{
        spell: ISpell;
        delete: () => void;
    }>()
</script>

<template>
    <EditSpell :spell :delete="delete" class-name="rounded-md p-2 w-full">
        <div class="flex flex-row w-full justify-between! items-center h-6">
            <span>{{ spell.name }}</span>
            <CheckboxField @click.stop :input="spell.ready" :set-input="v => spell.ready = v"/>
        </div>
    </EditSpell>
</template>

<style lang="css" module>
</style>