<script setup lang="tsx">
    import { useCardStore } from '@/stores/card';
    import { checkMinMaxNum } from '@/utils';
    import { computed } from 'vue';
    const { card } = useCardStore();
    const percMod = computed<number>(()=>{
        const perception = card.skills.find((skill)=>skill.name="Perception");
        if(!perception)
            return 0;
        return perception.value;
    })
</script>

<template>
    <div class="card-panel flex flex-row justify-between items-center w-full">
        <el-input disabled class="max-w-[50px]" type="number" :model-value="10 + percMod" input-style="text-align: center"/>
        <span class="text-lg text-black">Passive Perception</span>
    </div>
</template>