<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import Weapon from './Weapon.vue';
    import AddWeaponModal from './modals/AddWeaponModal.vue';
    import type { IWeapon } from '@/types';
    const { card } = useCardStore();

    function addWeapon(newWeapon: IWeapon){
        card.weapons.push(newWeapon)
    }
</script>
<template>
    <div class="card-panel flex flex-col gap-2">
        <div class="w-1/3">
            <AddWeaponModal :save="addWeapon"/>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-row w-full justify-between! items-center px-2">
                <span class="w-2/5">Name</span>
                <span class="w-1/5 text-center">ATK</span>
                <span class="w-2/5 text-end">DMG</span>
            </div>
            <Weapon 
                v-for="(weapon, i) in card.weapons" 
                :key="i"
                :weapon 
                :delete="()=>card.weapons = card.weapons.filter(w => w !== weapon)"    
            />
        </div>
    </div>
</template>