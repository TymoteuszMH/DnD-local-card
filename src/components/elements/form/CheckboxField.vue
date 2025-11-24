<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps<{
        model: any;
        label: string;
        inputClass?: string;
        placeholder?: string;
        disabled?: boolean;
        transparent?: boolean;
    }>();
    const input = ref(props.model);

</script>
<template>
    <el-checkbox v-model="input" :class="`${inputClass} ${transparent ? 'transparent-input' : ''}`" :label :disabled/>
</template>