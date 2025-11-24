<script lang="ts" setup>
    import { useCardStore } from '@/stores/card';
    const { card } = useCardStore()
</script>

<template>
    <div class="h-full flex flex-col justify-end">
        <el-input v-model="card.basicInfo.name" class="w-full h-12 transparent-input" placeholder="Enter name" />
    </div>
</template>