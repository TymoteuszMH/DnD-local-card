<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import SpellsList from './SpellsList.vue';
    const {card} = useCardStore();
</script>
<template>
    <div class="grid md:grid-cols-3 gap-5">
        <SpellsList class="w-full" v-for="spells in card.spells" :spells/>
    </div>
</template>