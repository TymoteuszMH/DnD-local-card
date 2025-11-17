<script setup lang="ts">
    import { useCardStore } from '@/stores/card';

    const { card } = useCardStore()

    defineProps<{
        name: string;
        modal: keyof typeof card.healthInfo;
    }>()
</script>

<template>
    <div class="relative flex flex-col rounded-md items-center h-14 md:h-20 overflow-visible max-w-[100px] min-h-[50px]">
        <el-input type="number" class="h-full text-2xl md:text-4xl! text-center overflow-hidden" input-style="border-radius: inherit; height: 100%; width: 100%; text-align: center; font-size: inherit" v-model="card.healthInfo[modal]"/>
        <div class="absolute text-xs md:text-base bg-black text-white -bottom-[15%] z-1 rounded-lg border w-full h-6 flex items-center justify-center ">{{ name }}</div>
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