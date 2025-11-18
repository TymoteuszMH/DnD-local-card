<script lang="ts" setup>
    import { useCardStore } from '@/stores/card';
    import SingleEl from './SingleEl.vue';
    import { checkMinMaxNum } from '@/utils';
    const { card } = useCardStore()
</script>

<template>
    <div class="card-panel">
        <div class="flex flex-col justify-center gap-5 mb-3!">
            <div class="flex flex-row justify-between flex-nowrap gap-2">
                <SingleEl modal="armorClass" name="Armor Class"/>
                <SingleEl modal="initiative" name="Initiative"/>
                <SingleEl modal="speed" name="Speed"/>
            </div>
            <div class="relative flex flex-col rounded-md items-center h-14 md:h-20 overflow-visible min-h-[50px]">
                <el-input type="number" class="h-full text-2xl md:text-4xl! text-center overflow-hidden" input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit" :model-value="card.healthInfo.healthPoints" @input="(value: string) => card.healthInfo.healthPoints = checkMinMaxNum(card.healthInfo.healthPoints, value, 0)"/>
                <div class="absolute text-xs md:text-base bg-black text-white -bottom-[15%] z-1 rounded-lg border w-full h-6 flex items-center justify-center ">HP</div>
            </div>
            <div class="relative flex flex-col rounded-md items-center h-14 md:h-20 overflow-visible min-h-[50px]">
                <el-input type="number" class="h-full text-2xl md:text-4xl! text-center overflow-hidden" input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit" :model-value="card.healthInfo.temporatyHealthPoints" @input="(value: string) => card.healthInfo.temporatyHealthPoints = checkMinMaxNum(card.healthInfo.temporatyHealthPoints, value, 0)"/>
                <div class="absolute text-xs md:text-base bg-black text-white -bottom-[15%] z-1 rounded-lg border w-full h-6 flex items-center justify-center ">Temp. HP</div>
            </div>
            <div class="flex flex-row justify-evenly flex-nowrap gap-2">
                <SingleEl modal="deathSavesSuccesses" name="DS Success"/>
                <SingleEl modal="deathSavesFailures" name="DS Fails"/>
            </div>
        </div>
    </div>
</template>

