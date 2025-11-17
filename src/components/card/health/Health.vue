<script lang="ts" setup>
    import { useCardStore } from '@/stores/card';
import SingleEl from './SingleEl.vue';

    const { card } = useCardStore()
</script>

<template>
    <div class="card-panel flex flex-col">
        <div class="flex flex-row flex-nowrap gap-2">
            <SingleEl modal="armorClass" name="Armor Class"/>
            <SingleEl modal="initiative" name="Initiative"/>
            <SingleEl modal="speed" name="Speed"/>
        </div>
        <div class="flex flex-row flex-nowrap justify-between gap-2">
        </div>
    </div>
</template>

