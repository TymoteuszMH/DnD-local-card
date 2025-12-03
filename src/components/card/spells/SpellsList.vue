<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { Search } from '@element-plus/icons-vue';
    import Spell from './Spell.vue';
    import type { ISpell, ISpellList } from '@/types';
    import InputField from '@/components/elements/form/InputField.vue';
    import { parseNum } from '@/utils';
    import AddSpell from './modals/AddSpell.vue';

    const props = defineProps<{
        spells: ISpellList;
    }>();

    const searchInput = ref("")
    const filteredCards = computed(() => props.spells.spells.filter((spell) => spell.name.includes(searchInput.value)))

    function addSpell(spell: ISpell){
        props.spells.spells.push(spell);
    }

</script>
<template>
    <div class="relative card-panel flex flex-col items-center">
        <div class="static w-full h-full pb-4">
            <AddSpell class="w-1/3 relative" :save="addSpell"/>
            <div class="flex flex-col pt-2 gap-2 h-4/5">
                <div class="flex flex-row gap-2">
                    <InputField class="w-1/2 h-6 text-center" placeholder="Slots" :input="spells.spellSlots" :set-input="v => spells.spellSlots = parseNum(v)" />
                    <span>/</span>
                    <InputField class="w-1/2 h-6 text-center" placeholder="Expiried" :input="spells.spellStolsExpiried" :set-input="v => spells.spellStolsExpiried = parseNum(v)" />
                </div>

                <el-input v-model="searchInput" placeholder="Search..." :prefix-icon="Search"/>
                <div class="flex flex-row w-full justify-between! items-center px-2">
                    <span class="w-2/5">Name</span>
                </div>
                <el-scrollbar view-class="flex flex-col gap-2 py-1" class="relative min-h-[180px] max-h-[180px] overflow-hidden">
                    <Spell 
                        v-for="(spell, i) in filteredCards" 
                        :key="i"
                        :spell 
                        :delete="()=>spells.spells = spells.spells.filter(s => s !== spell)"    
                    />
                    <span class="w-full text-center" v-if="filteredCards.length == 0">No weapons</span>
                </el-scrollbar>
            </div>
        </div>
        <div class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            {{ spells.level }}
        </div>
    </div>
</template>