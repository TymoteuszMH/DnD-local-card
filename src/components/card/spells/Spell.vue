<script setup lang="ts">
    import type { ISpell, IWeapon } from '@/types';
    import { calculateMod, statToObject } from '@/utils';
    import { useCardStore } from '@/stores/card';
    import { computed } from 'vue';
    import EditSpell from './modals/EditSpell.vue';
import CheckboxField from '@/components/elements/form/CheckboxField.vue';

    const props = defineProps<{
        spell: ISpell;
        delete: () => void;
    }>()
</script>

<template>
    <EditSpell :spell :delete="delete" class-name="rounded-md p-2 w-full">
        <div class="flex flex-row w-full justify-between! items-center h-6">
            <CheckboxField :input="spell.ready" :set-input="v => spell.ready = v"/>
            <span>{{ spell.name }}</span>
        </div>
    </EditSpell>
</template>

<style lang="css" module>
</style>