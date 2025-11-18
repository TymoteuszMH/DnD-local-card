<script setup lang="ts">
    import type { IWeapon } from '@/types';
    import { ref } from 'vue';

    defineProps<{
        weapon: IWeapon;
    }>()

    const openModal = ref(false)
</script>

<template>
    <div class="flex flex-row rounded-md items-center" @click="()=>openModal = true">
        <div class="flex flex-row basis-3/5">{{ weapon.name }} <span v-if="weapon.amount">({{ weapon.amount }})</span></div>
        <div class="basis-1/5">{{ weapon.proficiency ? "" : "" }}</div>
        <div class="flex flex-row basis-1/5">{{ weapon.damage.diceNumber }}{{weapon.damage.dice}}/{{ weapon.damage.type }}</div>
    </div>
    
</template>

<style lang="css" module>
</style>