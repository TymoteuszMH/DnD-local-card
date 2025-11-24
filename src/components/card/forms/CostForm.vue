<script lang="ts" setup>
    import type { ICost } from '@/types';
    import { ref } from 'vue';
    import { currencies } from '@/utils';
    import { InputField, LabelField, SelectField } from '@/components/elements/form';


    const props = defineProps<{
        form: ICost;
        isEdit?: boolean;
    }>()

    const cost = ref(props.form);
</script>

<template>
    <div class="flex flex-col gap-2">
        <LabelField>Cost</LabelField>
        <div class="flex flex-row flex-nowrap gap-1">
            <InputField type="number" :model="cost.value" placeholder="Amount" input-class="basis-3/5" transparent/>
            <SelectField :model="cost.currency" :values="currencies" placeholder="Currency" class="basis-2/5" transparent/>
        </div>
    </div>
</template>