<script lang="ts" setup>
    import { useCardStore } from '@/stores/card';
    import Navbar from './elements/Navbar.vue';
    import BasicInfo from './card/basicInfo/BasicInfo.vue';
    const { card } = useCardStore()

    
</script>

<template>
    <Navbar>
        <BasicInfo />
    </Navbar>
</template>