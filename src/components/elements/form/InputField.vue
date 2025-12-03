<script setup lang="ts">
    import { checkMinMaxNum } from '@/utils';

    defineProps<{
        input: any;
        setInput: (value: string|number|undefined) => void;
        minMax?: {min: number, max?: number};
        disabled?: boolean;
        type?: string;
        placeholder?: string;
        inputClass?: string;
        inputStyle?: string;
        transparent?: boolean;
    }>();    
</script>
<template>
    <el-input :type :model-value="input" @input="(value: any) => setInput(minMax ? checkMinMaxNum(input, value, 0) : value)" :placeholder :class="`${inputClass ?? ''} ${transparent ? 'transparent-input' : ''}`" :input-style :disabled/>
</template>