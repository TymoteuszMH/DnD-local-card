<script lang="ts" setup>
    import type { IProficiency } from '@/types';
    import { InputField, LabelField } from '@/components/elements/form';

    defineProps<{
        prof: IProficiency;
        isEdit?: boolean;
    }>()
</script>

<template>
    <div class="flex flex-col gap-2">
        <LabelField>Name</LabelField>
        <InputField :input="prof.name" :set-input="(val) => prof.name = `${val}`" placeholder="Name" :disabled="isEdit" transparent/>

        <LabelField>Description</LabelField>
        <InputField type="textarea" :input="prof.description" :set-input="(val) => prof.description = `${val}`" placeholder="Description" transparent/>
    </div>
</template>