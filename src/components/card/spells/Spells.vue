<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
import SpellsList from './SpellsList.vue';
    const {card} = useCardStore();
</script>
<template>
    <div class="flex flex-row flex-wrap gap-5 justify-center">
        <SpellsList class="w-1/4" v-for="spells in card.spells" :spells/>
    </div>
</template>