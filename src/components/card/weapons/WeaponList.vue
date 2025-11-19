<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import Weapon from './Weapon.vue';
    import AddWeaponModal from './AddWeaponModal.vue';
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
            <Weapon 
                v-for="weapon in card.weapons" 
                :key="card.weapons.length" 
                :weapon 
                :delete="()=>card.weapons = card.weapons.filter(w => w !== weapon)"    
            />
        </div>
    </div>
</template>