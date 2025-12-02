<script lang="ts" setup>
    import InputField from '@/components/elements/form/InputField.vue';
import SelectField from '@/components/elements/form/SelectField.vue';
import { useCardStore } from '@/stores/card';
import { stats, parseNum } from '@/utils';

    const { card } = useCardStore()
</script>

<template>
    <div class="relative card-panel flex flex-col items-center w-full">
        <div class="flex flex-col md:flex-row md:flex-nowrap gap-2 w-full justify-between pb-3">
            <SelectField placeholder="Type" :input="card.spellInfo?.spellType" :set-input="v => card.spellInfo!.spellType = v" :values="stats"/>
            <InputField placeholder="Save DC" :input="card.spellInfo?.spellSaveDC" :set-input="v => card.spellInfo!.spellSaveDC = parseNum(v)"/>
            <InputField placeholder="ATK Mod" :input="card.spellInfo?.spellAtackModifier" :set-input="v => card.spellInfo!.spellAtackModifier = parseNum(v)"/>
        </div>
        <div class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Spell Info
        </div>
    </div>
</template>

