<script setup lang="ts">
    import type { IItem } from '@/types';
    import EditItemModal from './modals/EditItemModal.vue';

    defineProps<{
        item: IItem;
        delete: () => void;
    }>()
</script>

<template>
    <EditItemModal :item="item" :delete="delete" class-name="rounded-md p-2 w-full">
        <div class="flex flex-row w-full justify-between! items-center">
            <span class="text-ellipsis w-full max-w-full overflow-hidden text-nowrap">{{ item.name }} <span v-if="!!item.amount">({{ item.amount }})</span></span>
        </div>
    </EditItemModal>
</template>

<style lang="css" module>
</style>