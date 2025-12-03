<script setup lang="ts">
    import type { IItem } from '@/types';
    import EditItemModal from './modals/EditItemModal.vue';
    import { ArrowDown, ArrowUp, Delete } from '@element-plus/icons-vue';

    defineProps<{
        item: IItem;
        onDelete: () => Promise<boolean>;
        moveUp?: () => void;
        moveDown?: () => void;
    }>()
</script>

<template>
    <EditItemModal :item="item" :onDelete="onDelete" class-name="rounded-md p-2 w-full">
        <div class="flex flex-row gap-2 w-full justify-between! items-center">
            <div class="flex flex-col items-center justify-center">
                <el-button type="primary" class="h-2! w-2! m-0!" :icon="ArrowUp" v-if="moveUp" @click.stop="moveUp" />
                <el-button type="primary" class="h-2! w-2! m-0!" :icon="ArrowDown" v-if="moveDown" @click.stop="moveDown" />
            </div>
            <span class="text-ellipsis w-full max-w-full overflow-hidden text-nowrap">{{ item.name }} <span v-if="!!item.amount">({{ item.amount }})</span></span>
            <el-button @click.stop="() => onDelete()" type="danger" :icon="Delete"></el-button>
        </div>
    </EditItemModal>
</template>

<style lang="css" module>
</style>