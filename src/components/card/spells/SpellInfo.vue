<script lang="ts" setup>
    import InputField from '@/components/elements/form/InputField.vue';
    import SelectField from '@/components/elements/form/SelectField.vue';
    import { useCardStore } from '@/stores/card';
    import { stats, parseNum, getMod } from '@/utils';
    import { computed } from 'vue';

    const { card } = useCardStore();

    const currentSaveDC = computed<number>(()=>{
        let value = 8;
        if(card.proficiencyValue)
            value += card.proficiencyValue;
        if(card.spellInfo.spellType)
            value += getMod(card.stats.find(el => el.type === card.spellInfo.spellType)?.value ?? 0);
        card.spellInfo.spellSaveDC = value;
        return value;
    })
</script>

<template>
    <div class="relative card-panel flex flex-col items-center w-full">
        <div class="flex flex-col md:flex-row md:flex-nowrap gap-2 w-full justify-between pb-3">
            <SelectField placeholder="Type" :input="card.spellInfo?.spellType" :set-input="v => card.spellInfo.spellType = v" :values="stats"/>
            <el-input :model-value="currentSaveDC" type="hidden"/>
            <InputField placeholder="Save DC" :input="currentSaveDC" :set-input="v => card.spellInfo.spellSaveDC = parseNum(v)" disabled/>
            <InputField placeholder="ATK Mod" :input="card.spellInfo?.spellAtackModifier" :set-input="v => card.spellInfo.spellAtackModifier = parseNum(v)"/>
        </div>
        <div class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Spell Info
        </div>
    </div>
</template>

