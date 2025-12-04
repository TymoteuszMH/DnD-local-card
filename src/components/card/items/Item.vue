<script setup lang="ts">
import type { IItem } from '@/types';
import EditItemModal from './modals/EditItemModal.vue';
import SingleListElement from '@/components/elements/SingleListElement.vue';

defineProps<{
    item: IItem;
    onDelete: () => Promise<boolean>;
    moveUp?: () => void;
    moveDown?: () => void;
}>()
</script>

<template>
    <EditItemModal :item="item" :onDelete="onDelete" class-name="rounded-md p-2 w-full">
        <SingleListElement :moveUp :moveDown :delete-element="onDelete">
            <span
                class="p-0.75 border border-white rounded-md text-ellipsis w-full max-w-full overflow-hidden text-nowrap">
                {{ item.name }} <span v-if="!!item.amount">({{ item.amount }})</span>
            </span>
        </SingleListElement>
    </EditItemModal>
</template>

<style lang="css" module></style>