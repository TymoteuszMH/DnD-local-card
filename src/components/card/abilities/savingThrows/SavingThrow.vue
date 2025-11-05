<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import type { ISavingThrow, statType } from '@/types';
import { getMod } from '@/utils';
import { computed } from 'vue';

    const props = defineProps<{
        saveThrow: ISavingThrow
    }>()

    const { card } = useCardStore();
    const currentValue = computed(()=>{
        const stat = card.stats.find(stat => stat.type === props.saveThrow.type);
        if(!stat || !stat.value)
            return undefined;
        return props.saveThrow.proficiency ? getMod(stat.value) + card.proficiencyValue : getMod(stat.value); 
    })
</script>

<template>
    <div class="flex flex-row gap-4">
        <el-checkbox class="max-w-5 w-full flex justify-center max-h-6" v-model="saveThrow.proficiency"/>
        <!-- <el-input type="number" class="max-w-[50px]" :model-value="saveThrow.proficiency ? saveThrow.value + card.proficiencyValue : saveThrow.value" @input="(value: string) => saveThrow.value = parseInt(value)"/> -->
        <el-input type="number" class="max-w-[50px] h-6" :model-value="currentValue" disabled/>
        <span class="w-full text-black text-center text-l h-6 cursor-pointer select-none">{{ saveThrow.type }}</span>
    </div>
</template>