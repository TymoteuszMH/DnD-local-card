<script lang="ts" setup>
    import type { IFeat } from '@/types';
    import { InputField, LabelField } from '@/components/elements/form';

    defineProps<{
        feat: IFeat;
        isEdit?: boolean;
    }>()
</script>

<template>
    <div class="flex flex-col gap-2">
        <LabelField>Name</LabelField>
        <InputField :input="feat.name" :set-input="(val) => feat.name = `${val}`" placeholder="Name" :disabled="isEdit" transparent/>

        <LabelField>Description</LabelField>
        <InputField type="textarea" :input="feat.description" :set-input="(val) => feat.description = `${val}`" placeholder="Description" transparent/>
    </div>
</template>