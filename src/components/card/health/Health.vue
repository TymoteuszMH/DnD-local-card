<script lang="ts" setup>
import { useCardStore } from '@/stores/card';
import SingleEl from './SingleEl.vue';
import { checkMinMaxNum } from '@/utils';
import LabelField from '@/components/elements/form/LabelField.vue';
const { card } = useCardStore()
</script>

<template>
    <div class="card-panel h-full">
        <div class="flex flex-col justify-center gap-5 mb-3!">
            <div class="flex flex-row justify-between flex-nowrap gap-2">
                <SingleEl modal="armorClass" name="AC" />
                <SingleEl modal="initiative" name="Initiative" />
                <SingleEl modal="speed" name="Speed" />
            </div>
            <div class="relative flex flex-col rounded-md items-center h-16 md:h-22 overflow-visible min-h-[50px]">
                <div class="absolute z-1 flex flex-row gap-2 justify-center h-4 md:h-auto">
                    <LabelField class="text-end! w-min!">Max:</LabelField>
                    <el-input type="number"
                        input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit;"
                        :model-value="card.healthInfo.maxHealthPoints"
                        @input="(value: string) => card.healthInfo.maxHealthPoints = checkMinMaxNum(card.healthInfo.healthPoints, value, 0)" />
                </div>
                <el-input type="number" class="h-full text-2xl md:text-4xl! text-center overflow-hidden"
                    input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit"
                    :model-value="card.healthInfo.healthPoints"
                    @input="(value: string) => card.healthInfo.healthPoints = checkMinMaxNum(card.healthInfo.healthPoints, value, 0)" />
                <div
                    class="absolute text-xs md:text-base bg-black text-white -bottom-[15%] z-1 rounded-lg border w-full h-6 flex items-center justify-center ">
                    HP</div>
            </div>
            <div class="relative flex flex-col rounded-md items-center h-16 md:h-20 overflow-visible min-h-[50px]">
                <el-input type="number" class="h-full text-2xl md:text-4xl! text-center overflow-hidden"
                    input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit"
                    :model-value="card.healthInfo.temporatyHealthPoints"
                    @input="(value: string) => card.healthInfo.temporatyHealthPoints = checkMinMaxNum(card.healthInfo.temporatyHealthPoints, value, 0)" />
                <div
                    class="absolute text-xs md:text-base bg-black text-white -bottom-[15%] z-1 rounded-lg border w-full h-6 flex items-center justify-center ">
                    Temp. HP</div>
            </div>
            <div class="flex flex-row justify-evenly flex-nowrap gap-2">
                <SingleEl class="max-w-1/2!" modal="deathSavesSuccesses" name="DS Success" />
                <SingleEl class="max-w-1/2!" modal="deathSavesFailures" name="DS Fails" />
            </div>
            <div class="relative flex flex-col rounded-md items-center h-16 md:h-22 overflow-visible min-h-[50px]">
                <div class="absolute z-1 flex flex-row gap-2 justify-center h-4 md:h-auto">
                    <LabelField class="text-end! w-min!">Max:</LabelField>
                    <el-input
                        input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit;"
                        :model-value="card.healthInfo.maxHitDices"
                        @input="(value: string) => card.healthInfo.maxHitDices = value" />
                </div>
                <el-input class="h-full text-2xl md:text-4xl! text-center overflow-hidden"
                    input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit"
                    :model-value="card.healthInfo.hitDices"
                    @input="(value: string) => card.healthInfo.hitDices = value" />
                <div
                    class="absolute text-xs md:text-base bg-black text-white -bottom-[15%] z-1 rounded-lg border w-full h-6 flex items-center justify-center ">
                    Hit Dices</div>
            </div>
        </div>
    </div>
</template>
