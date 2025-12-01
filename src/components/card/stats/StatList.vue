<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import SingleStat from './SingleStat.vue';
    const { card } = useCardStore()

</script>

<template>
    <div class="card-panel flex flex-row lg:flex-col py-4! justify-between items-center min-w-25 min-h-20">
        <div v-for="stat in card.stats">
            <SingleStat :stat/>
        </div>
    </div>
</template>