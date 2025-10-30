<script lang="ts" setup>
    defineProps<{
        classes?: string;
        func: ()=>any;
    }>();
</script>

<template>
    <el-button type="primary" :class="`w-full h-12 m-0! ${classes}`" @click="func">
        <slot />
    </el-button>
</template>