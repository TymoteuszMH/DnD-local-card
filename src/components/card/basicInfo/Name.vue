<script lang="ts" setup>
    import { useCardStore } from '@/stores/card';
    const { card } = useCardStore()
</script>

<template>
    <div class="h-full flex flex-col justify-end">
        <el-input v-model="card.basicInfo.name" class="w-full h-12" placeholder="Enter name" />
    </div>
</template>

<style lang="css" module>
    .el-input__wrapper{
        border: 0 !important;
        border-bottom: 5px black !important;
        background-color: transparent !important;
    }
</style>