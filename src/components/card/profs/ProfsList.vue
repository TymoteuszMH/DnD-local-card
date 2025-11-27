<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import type { IProficiency } from '@/types';
    import { computed, ref } from 'vue';
    import { Search } from '@element-plus/icons-vue';
    import AddProf from './modals/AddProf.vue';
    import Prof from './Prof.vue';
    
    const { card } = useCardStore();

    function addProf(newProf: IProficiency){
        card.proficiencies.push(newProf)
    }

    const searchInput = ref("")
    const filteredCards = computed(() => card.proficiencies.filter((prof) => prof.name.includes(searchInput.value)))
</script>
<template>
    <div class="relative card-panel pb-5! flex flex-col items-center">
        <div class="flex flex-col gap-2 w-full h-full">
            <div class="w-1/3">
                <AddProf :save="addProf"/>
            </div>
            <div class="flex flex-col gap-2">
                <el-input v-model="searchInput" placeholder="Search..." :prefix-icon="Search"/>

                <div class="flex flex-row w-full justify-between! items-center px-2">
                    <span class="w-full">Name</span>
                </div>
                <el-scrollbar view-class="flex flex-col gap-2" class="max-h-[180px] overflow-hidden">
                    <Prof 
                        v-for="(prof, i) in filteredCards" 
                        :key="i"
                        :prof 
                        :delete="()=>card.proficiencies = card.proficiencies.filter(p => p !== prof)"    
                    />
                    <span class="w-full text-center" v-if="filteredCards.length == 0">No proficiencies</span>
                </el-scrollbar>
            </div>

        </div>
        <div class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Proficiencies
        </div>
    </div>
</template>