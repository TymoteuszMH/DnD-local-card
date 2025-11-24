<script setup lang="ts">
import { ref } from 'vue';

    const props = defineProps<{
        model: any;
        values: any[];
        inputClass?: string;
        placeholder?: string;
        disabled?: boolean;
        transparent?: boolean;
    }>();
    const input = ref(props.model);

</script>
<template>
    <el-select v-model="input" :placeholder :disabled :class="`${inputClass ?? ''} ${transparent ? 'transparent-input' : ''}`" :popper-class="transparent ? 'bg-gray-900! text-white! transparent-input' : ''">
        <el-option v-for="value in values" :label="value" :value="value" />
    </el-select>
</template>