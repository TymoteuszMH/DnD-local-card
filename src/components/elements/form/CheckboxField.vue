<script setup lang="ts">
    defineProps<{
        input: any;
        setInput: (val: boolean) => void;
        label: string;
        inputClass?: string;
        placeholder?: string;
        disabled?: boolean;
        transparent?: boolean;
    }>();
</script>
<template>
    <el-checkbox :model-value="input" @change="setInput" :class="`${inputClass} ${transparent ? 'transparent-input' : ''}`" :label :disabled/>
</template>