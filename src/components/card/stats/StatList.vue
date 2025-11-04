<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import SingleStat from './SingleStat.vue';
    const { card } = useCardStore()

</script>

<template>
    <div class="border rounded-md p-4 flex flex-row sm:flex-col gap-2 sm:gap-6 sm:max-w-[15%] min-w-25 min-h-20">
        <div v-for="stat in card.stats">
            <SingleStat :stat/>
        </div>
    </div>
</template>