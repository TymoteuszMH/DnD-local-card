<script setup lang="ts">
    import type { IStat } from '@/types';
    import { checkMinMaxNum } from '@/utils';

    defineProps<{
        stat: IStat;
    }>()
</script>

<template>
    <div class="relative flex flex-col rounded-md items-center h-14 sm:h-20 overflow-hidden sm:overflow-visible">
        <el-input type="number" class="h-full text-2xl sm:text-4xl! text-center overflow-hidden" input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit" :model-value="stat.value" @input="(value: string) => stat.value = checkMinMaxNum(stat.value, value, 0, 30)"/>
        <span class="sm:absolute text-xs sm:text-base bg-white text-black -bottom-[15%] z-1 sm:rounded-lg border w-full sm:w-12 h-6 text-center">{{ stat.value && stat.value !== 0 ? Math.floor(stat.value / 2 - 5) : " " }}</span>
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