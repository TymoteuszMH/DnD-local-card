<script setup lang="ts">
    defineProps<{
        input: any;
        setInput: (val: any) => void;
        values: any[];
        inputClass?: string;
        placeholder?: string;
        disabled?: boolean;
        transparent?: boolean;
    }>();
</script>
<template>
    <el-select :model-value="input" @change="setInput" :placeholder :disabled :class="`${inputClass ?? ''} ${transparent ? 'transparent-input' : ''}`" :popper-class="transparent ? 'bg-gray-900! text-white! transparent-input' : ''">
        <el-option v-for="value in values" :label="value" :value="value" />
    </el-select>
</template>