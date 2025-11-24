<script setup lang="ts">
    import { ref } from 'vue';
    import { checkMinMaxNum } from '@/utils';

    const props = defineProps<{
        model: any;
        minMax?: {min: number, max?: number};
        disabled?: boolean;
        type?: string;
        placeholder?: string;
        inputClass?: string;
        transparent?: boolean;
    }>();
    
    const input = ref(props.model);
</script>
<template>
    <el-input :type :model-value="input" @input="(value: any) => input = minMax ? checkMinMaxNum(input, value, 0) : value" :placeholder :class="`${inputClass ?? ''} ${transparent ? 'transparent-input' : ''}`" :disabled/>
</template>