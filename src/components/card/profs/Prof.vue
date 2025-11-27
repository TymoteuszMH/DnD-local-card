<script setup lang="ts">
    import type { IProficiency } from '@/types';
    import EditProf from './modals/EditProf.vue';

    defineProps<{
        prof: IProficiency;
        delete: () => void;
    }>()
</script>

<template>
    <EditProf :prof :delete class-name="rounded-md p-2 w-full">
        <div class="flex flex-row w-full justify-between! items-center">
            <span class="text-ellipsis w-full max-w-full overflow-hidden text-nowrap">{{ prof.name }}</span>
        </div>
    </EditProf>
</template>

<style lang="css" module>
</style>