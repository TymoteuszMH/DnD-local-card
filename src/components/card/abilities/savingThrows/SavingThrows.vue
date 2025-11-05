<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import SavingThrow from './SavingThrow.vue';
    const { card } = useCardStore();
</script>

<template>
    <div class="relative card-panel pb-5! mb-3! flex flex-col items-center">
        <div class="flex flex-row gap-4 w-full ps-3">
            <span class="max-w-5 text-black w-full text-xs flex justify-center">PROF</span>
            <span class="max-w-[50px] text-black text-xs w-full flex justify-center">VALUE</span>
            <span class="w-full flex text-black text-xs justify-center">TYPE</span>
        </div>
        <div class="w-full ps-3" v-for="saveThrow in card.savingThrows">
            <SavingThrow :saveThrow />
        </div>
        <div class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Saving Throws
        </div>
    </div>
</template>