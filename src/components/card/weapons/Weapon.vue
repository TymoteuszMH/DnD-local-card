<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import WeaponModal from "./EditWeaponModal.vue"

    defineProps<{
        weapon: IWeapon;
        delete: () => void;
    }>()
</script>

<template>
    <WeaponModal :weapon="{...weapon}" :delete="delete" class-name="flex flex-row rounded-md items-center border p-2 w-full">
        <div class="flex flex-row basis-3/5">{{ weapon.name }} <span :key="weapon.amount" v-if="!!weapon.amount">({{ weapon.amount }})</span></div>
        <div class="basis-1/5">{{ weapon.proficiency ? "" : "" }}</div>
        <div class="flex flex-row basis-1/5">{{ weapon.damage.diceNumber }}{{weapon.damage.dice}}</div>
    </WeaponModal>
</template>

<style lang="css" module>
</style>