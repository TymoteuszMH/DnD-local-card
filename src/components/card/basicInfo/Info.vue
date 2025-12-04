<script lang="ts" setup>
import { useCardStore } from '@/stores/card';
import ClassesModal from './ClassesModal.vue';

const { card } = useCardStore()
</script>

<template>
    <div class="card-panel flex flex-col h-full">
        <div class="flex flex-row flex-nowrap gap-2">
            <el-input v-model="card.basicInfo.name" class="basis-1/2" placeholder="Name" />
            <ClassesModal />
        </div>
        <div class="flex flex-row flex-nowrap justify-between gap-2">
            <el-input v-model="card.basicInfo.race" class="basis-1/2" placeholder="Race" />
            <el-input v-model="card.basicInfo.background" class="basis-1/2" placeholder="Background" />
        </div>
    </div>
</template>
