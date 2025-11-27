<script setup lang="ts">
    import type { IFeat, IItem } from '@/types';
    import EditFeat from './modals/EditFeat.vue';

    defineProps<{
        feat: IFeat;
        delete: () => void;
    }>()
</script>

<template>
    <EditFeat :feat :delete class-name="rounded-md p-2 w-full">
        <div class="flex flex-row w-full justify-between! items-center">
            <span class="text-ellipsis w-full max-w-full overflow-hidden text-nowrap">{{ feat.name }}</span>
        </div>
    </EditFeat>
</template>

<style lang="css" module>
</style>