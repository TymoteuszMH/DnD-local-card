<script lang="ts" setup>
    import type { IFeat } from '@/types';
    import { ref } from 'vue';
    import { InputField, LabelField } from '@/components/elements/form';

    const props = defineProps<{
        form: IFeat;
        isEdit?: boolean;
    }>()

    const feat = ref(props.form);
</script>

<template>
    <div class="flex flex-col gap-2">
        <LabelField>Name</LabelField>
        <InputField :model="feat.name" placeholder="Name" :disabled="isEdit" transparent/>

        <LabelField>Description</LabelField>
        <InputField type="textarea" :model="feat.description" placeholder="Description" transparent/>
    </div>
</template>