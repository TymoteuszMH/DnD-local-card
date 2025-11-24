<script lang="ts" setup>
    import type { ICost } from '@/types';
    import { ref } from 'vue';
    import { currencies } from '@/utils';

    const props = defineProps<{
        form: ICost;
        isEdit?: boolean;
    }>()

    const cost = ref(props.form);
</script>

<template>
    <div class="flex flex-col gap-2">
        <el-text type="primary" class="w-full text-start" tag="div">Cost</el-text>
        <div class="flex flex-row flex-nowrap gap-1">
            <el-input type="number" v-model="cost.value" placeholder="Amount" class="basis-3/5"/>
            <el-select v-model="cost.currency" placeholder="Currency" class="basis-2/5">
                <el-option v-for="currency of currencies" :label="currency" :value="currency" />
            </el-select>
        </div>
    </div>
</template>