<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import WeaponModal from "./modals/EditWeaponModal.vue"
    import { calculateMod, statToObject } from '@/utils';
import { useCardStore } from '@/stores/card';
import { computed } from 'vue';

    const props = defineProps<{
        weapon: IWeapon;
        delete: () => void;
    }>()

    const {card} = useCardStore();
    const atkMod = computed(()=>calculateMod(props.weapon.attackModifier, card.proficiencyValue, statToObject(card.stats)))
</script>

<template>
    <WeaponModal :weapon="weapon" :delete="delete" class-name="rounded-md p-2 w-full">
        <div class="flex flex-row w-full justify-between! items-center">
            <span class="text-ellipsis w-2/5 max-w-2/5 overflow-hidden text-nowrap" :key="weapon.name">{{ weapon.name }} <span v-if="!!weapon.amount">({{ weapon.amount }})</span></span>
            <span class="w-1/5 text-center" v-if="atkMod">{{`${atkMod > 0 ? "+" : ""}${atkMod}` }}</span>
            <span class="w-2/5 text-end">{{ weapon.damage.diceNumber }}{{weapon.damage.dice}}<span v-if="weapon.damage.bonus">+{{ weapon.damage.bonus }}</span></span>
        </div>
    </WeaponModal>
</template>

<style lang="css" module>
</style>