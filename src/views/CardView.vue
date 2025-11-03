<script lang="ts" setup>
    import type { ICard } from '@/types';
    import Card from "@/components/Card.vue"
    import { createEmptyCard } from '@/utils';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
import { useCardStore } from '@/stores/card';

    const route = useRoute();
    const {card, getCardFromStorage} = useCardStore()

    const id = computed<string>(() => (route.params.uuid as string)); 
    getCardFromStorage(id.value);
</script>

<template>
    <Card/>
</template>