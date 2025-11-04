<script lang="ts" setup>
    import { useCardStore } from '@/stores/card';

    const { card } = useCardStore()
</script>

<template>
    <div class="border border-(--el-color-primary) rounded-md flex flex-col h-full gap-2 p-2 bg-(--el-color-primary)">
        <div class="flex flex-row flex-nowrap gap-2">
            <el-input v-model="card.basicInfo.class" class="basis-2/5" placeholder="Class"/>
            <el-input v-model="card.basicInfo.level" class="basis-1/5" placeholder="LVL" input-style="text-align: center" />
            <el-input v-model="card.basicInfo.race" class="basis-2/5" placeholder="Race"/>
        </div>
        <div class="flex flex-row flex-nowrap justify-between gap-2">
            <el-input v-model="card.basicInfo.subclass" class="basis-1/2" placeholder="Subclass"/>
            <el-input v-model="card.basicInfo.background" class="basis-1/2" placeholder="Background"/>
        </div>
    </div>
</template>

