<script setup lang="tsx">
    import { useCardStore } from '@/stores/card';
    import { checkMinMaxNum } from '@/utils';
    const { card } = useCardStore();
</script>

<template>
    <div class="card-panel flex flex-row justify-between items-center w-full">
        <el-input class="max-w-[50px]" type="number" v-model="card.proficiencyValue" input-style="text-align: center" @input="(value: string) => card.proficiencyValue = checkMinMaxNum(card.proficiencyValue, value, undefined, 10)"/>
        <span class="text-lg text-black">Proficiency</span>
    </div>
</template>