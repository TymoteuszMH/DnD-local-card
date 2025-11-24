<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import Weapon from './Weapon.vue';
    import AddWeaponModal from './modals/AddWeaponModal.vue';
    import type { IWeapon } from '@/types';
import { computed, ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
    const { card } = useCardStore();

    function addWeapon(newWeapon: IWeapon){
        card.weapons.push(newWeapon)
    }

    const searchInput = ref("")
    const filteredCards = computed(() => card.weapons.filter((weapon) => weapon.name.includes(searchInput.value)))
</script>
<template>
    <div class="relative card-panel pb-5! flex flex-col items-center">
        <div class="w-full h-full">
            <div class="w-1/3">
                <AddWeaponModal :save="addWeapon"/>
            </div>
            <div class="flex flex-col gap-2 pt-2 h-full">
                <el-input v-model="searchInput" placeholder="Search..." :prefix-icon="Search"/>
                <div class="flex flex-row w-full justify-between! items-center px-2">
                    <span class="w-2/5">Name</span>
                    <span class="w-1/5 text-center">ATK</span>
                    <span class="w-2/5 text-end">DMG</span>
                </div>
                <el-scrollbar view-class="flex flex-col gap-2" class="max-h-[180px] overflow-hidden">
                    <Weapon 
                        v-for="(weapon, i) in filteredCards" 
                        :key="i"
                        :weapon 
                        :delete="()=>card.weapons = card.weapons.filter(w => w !== weapon)"    
                    />
                    <span class="w-full text-center" v-if="filteredCards.length == 0">No weapons</span>
                </el-scrollbar>
            </div>
        </div>
        <div class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Weapons
        </div>
    </div>
</template>