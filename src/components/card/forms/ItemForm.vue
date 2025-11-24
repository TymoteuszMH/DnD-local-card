<script lang="ts" setup>
    import type { IItem } from '@/types';
    import { ref } from 'vue';
    import CostForm from '../forms/CostForm.vue';
import { InputField, LabelField } from '@/components/elements/form';

    const props = defineProps<{
        form: IItem;
        isEdit?: boolean;
    }>()

    const item = ref(props.form);
</script>

<template>
    <div class="flex flex-col gap-2">
        <LabelField>Name and amount</LabelField>
        <div class="flex flex-row flex-nowrap gap-1">
            <InputField :model="item.name" placeholder="Name" class="basis-4/5" :disabled="isEdit" transparent/>
            <InputField type="number" :model="item.amount" placeholder="Amount" class="basis-1/5" transparent/>
        </div>

        <CostForm :form="item.cost" :is-edit="isEdit"/>

        <LabelField>Description</LabelField>
        <InputField type="textarea" :model="item.description" placeholder="Description" transparent/>
    </div>
</template>