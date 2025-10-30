<script lang="ts" setup>
    import type { ICard } from '@/types';
    import Card from "@/components/Card.vue"
    import { createEmptyCard } from '@/utils';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = computed<string>(() => (route.params.uuid as string)); 
    const card = computed<ICard>(()=>{
        const localCard = localStorage.getItem(id.value);
        console.log(id.value)
        if(localCard)
            return JSON.parse(localCard) as ICard;
        const newCard = createEmptyCard(id.value);
        localStorage.setItem(id.value, JSON.stringify(newCard));
        return newCard;
    })
</script>

<template>
    <Card :card="card"></Card>
</template>