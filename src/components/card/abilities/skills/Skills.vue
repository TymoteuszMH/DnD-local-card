<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
import Skill from './Skill.vue';
    const { card } = useCardStore();
</script>

<template>
    <div class="relative card-panel pb-5! flex flex-col items-center">
        <div class="flex flex-row gap-4 w-full ps-3">
            <span class="max-w-5 text-black w-full text-xs flex justify-center">PROF</span>
            <span class="max-w-5 text-black w-full text-xs flex justify-center">EXP</span>
            <span class="max-w-[50px] text-black text-xs w-full flex justify-center">VALUE</span>
            <span class="w-full flex text-black text-xs justify-start">NAME</span>
        </div>
        <div class="w-full ps-3 flex flex-col h-full justify-between gap-1">
            <div  v-for="skill in card.skills">
                <Skill :skill />
            </div>
        </div>
        <div class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Skills
        </div>
    </div>
</template>