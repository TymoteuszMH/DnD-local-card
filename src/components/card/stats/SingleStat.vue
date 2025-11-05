<script setup lang="ts">
    import type { IStat } from '@/types';
    import { checkMinMaxNum, getMod } from '@/utils';

    defineProps<{
        stat: IStat;
    }>()
</script>

<template>
    <div class="relative flex flex-col rounded-md items-center h-14 md:h-20 overflow-visible max-w-[100px] min-h-[50px]">
        <div class="absolute text-xs md:text-base bg-black text-white -top-[15%] z-1 rounded-lg border w-full md:w-12 h-6 flex items-center justify-center ">{{ stat.type }}</div>
        <el-input type="number" class="h-full text-2xl md:text-4xl! text-center overflow-hidden" input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit" :model-value="stat.value" @input="(value: string) => stat.value = checkMinMaxNum(stat.value, value, 0, 30)"/>
        <div class="absolute text-xs md:text-base bg-black text-white -bottom-[15%] z-1 rounded-lg border w-full md:w-12 h-6 flex items-center justify-center">{{ stat.value && stat.value !== 0 ? getMod(stat.value) : " " }}</div>
    </div>
</template>

<style lang="css" module>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
</style>