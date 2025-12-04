<script setup lang="ts">
import { useCardStore } from '@/stores/card';
import type { IFeat } from '@/types';
import { computed, ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import AddFeat from './modals/AddFeat.vue';
import Feat from './Feat.vue';

const { card } = useCardStore();

function addFeat(newFeat: IFeat) {
    card.feats.push(newFeat)
}

const searchInput = ref("")
const filteredCards = computed(() => card.feats.filter((feat) => feat.name.includes(searchInput.value)))
</script>
<template>
    <div class="relative card-panel pb-5! flex flex-col items-center w-full h-full">
        <div class="flex flex-col gap-2 w-full h-full">
            <div class="w-1/3">
                <AddFeat :save="addFeat" />
            </div>
            <div class="flex flex-col gap-2">
                <el-input v-model="searchInput" placeholder="Search..." :prefix-icon="Search" />

                <div class="flex flex-row w-full justify-between! items-center px-2">
                    <span class="w-full">Name</span>
                </div>
                <el-scrollbar view-class="flex flex-col gap-2" class="max-h-[180px] lg:max-h-[440px] overflow-hidden">
                    <Feat v-for="(feat, i) in filteredCards" :key="i" :feat
                        :delete="() => card.feats = card.feats.filter(f => f !== feat)" />
                    <span class="w-full text-center" v-if="filteredCards.length == 0">No feats</span>
                </el-scrollbar>
            </div>

        </div>
        <div
            class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Feats
        </div>
    </div>
</template>