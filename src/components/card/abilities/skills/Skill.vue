<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import type { ISkill } from '@/types';
    import { getMod } from '@/utils';
    import { computed } from 'vue';

    const props = defineProps<{
        skill: ISkill
    }>()

    const { card } = useCardStore();
    const currentValue = computed(()=>{
        const stat = card.stats.find(stat => stat.type === props.skill.type);
        if(!stat || !stat.value)
            return undefined;

        let finalSum = getMod(stat.value);

        if(props.skill.expertice && props.skill.proficiency)
            finalSum += 2*card.proficiencyValue;
        else if(props.skill.proficiency)
            finalSum += card.proficiencyValue;

        return finalSum; 
    })
</script>

<template>
    <div class="flex flex-row gap-4">
        <el-checkbox class="min-w-5 max-w-5 w-full flex justify-center max-h-6 m-0!" v-model="skill.proficiency"/>
        <el-checkbox class="min-w-5 max-w-5 w-full flex justify-center max-h-6" v-model="skill.expertice"/>
        <!-- <el-input type="number" class="max-w-[50px]" :model-value="saveThrow.proficiency ? saveThrow.value + card.proficiencyValue : saveThrow.value" @input="(value: string) => saveThrow.value = parseInt(value)"/> -->
        <el-input type="number" class="min-w-[50px] max-w-[50px] h-6" :model-value="currentValue" disabled/>
        <span class="w-full text-black text-start text-nowrap text-l h-6 select-none">{{ skill.name }} ({{ skill.type }})</span>
    </div>
</template>