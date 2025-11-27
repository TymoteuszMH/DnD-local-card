<script lang="ts" setup>
    import type { IItem } from '@/types';
    import CostForm from '../forms/CostForm.vue';
    import { InputField, LabelField } from '@/components/elements/form';
import { parseNum } from '@/utils';

    defineProps<{
        item: IItem;
        isEdit?: boolean;
    }>();
</script>

<template>
    <div class="flex flex-col gap-2">
        <LabelField>Name and amount</LabelField>
        <div class="flex flex-row flex-nowrap gap-1">
            <InputField :input="item.name" :set-input="(val) => item.name = `${val}`" placeholder="Name" class="basis-4/5" :disabled="isEdit" transparent/>
            <InputField type="number" :input="item.amount" :set-input="(val) => item.amount = parseNum(val)" placeholder="Amount" class="basis-1/5" transparent/>
        </div>

        <CostForm :form="item.cost" :is-edit="isEdit"/>

        <LabelField>Description</LabelField>
        <InputField type="textarea" :input="item.description" :set-input="(val) => item.description = `${val}`" placeholder="Description" transparent/>
    </div>
</template>