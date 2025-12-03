<script lang="ts" setup>
    import type { ISpell } from '@/types';
    import { InputField, LabelField } from '@/components/elements/form';

    defineProps<{
        spell: ISpell;
        isEdit?: boolean;
    }>();
</script>

<template>
    <div class="flex flex-col gap-2">
        <LabelField>Name</LabelField>
        <InputField :input="spell.name" :set-input="(val) => spell.name = `${val}`" placeholder="Name" class="basis-4/5" :disabled="isEdit" transparent/>

        <LabelField>Description</LabelField>
        <InputField inputClass="h-40" input-style="height: 100%" type="textarea" :input="spell.description" :set-input="(val) => spell.description = `${val}`" placeholder="Description" transparent/>
    </div>
</template>