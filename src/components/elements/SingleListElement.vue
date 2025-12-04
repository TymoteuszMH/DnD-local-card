<script setup lang="ts">
import { ArrowDown, ArrowUp, Delete } from '@element-plus/icons-vue';

defineProps<{
    moveUp?: () => void;
    moveDown?: () => void;
    deleteElement?: () => any;
}>()
</script>
<template>
    <div class="flex flex-row gap-2 w-full justify-between! items-center">
        <div class="flex flex-col items-center justify-center gap-1">
            <el-button type="primary" class="h-2! w-2! m-0! border border-white!" :icon="ArrowUp" v-if="moveUp"
                @click.stop="moveUp" />
            <el-button type="primary" class="h-2! w-2! m-0! border border-white!" :icon="ArrowDown" v-if="moveDown"
                @click.stop="moveDown" />
        </div>
        <slot></slot>
        <el-button class="w-6 h-6 border border-white!" @click.stop="deleteElement" type="danger" :icon="Delete" />
    </div>
</template>