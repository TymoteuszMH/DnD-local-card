<script lang="ts" setup>
    import Card from "@/components/Card.vue"
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useCardStore } from '@/stores/card';

    const route = useRoute();
    const {getCardFromStorage} = useCardStore()

    const id = computed<string>(() => (route.params.uuid as string)); 
    getCardFromStorage(id.value);
</script>

<template>
    <Card/>
</template>