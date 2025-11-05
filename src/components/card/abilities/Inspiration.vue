<script setup lang="tsx">
    import { useCardStore } from '@/stores/card';
    const { card } = useCardStore();
</script>

<template>
    <div class="border border-(--el-color-primary) bg-(--el-color-primary) rounded-md p-2 flex flex-row justify-between items-center gap-4 w-full">
        <el-checkbox class="max-w-[50px] w-full flex justify-center" v-model="card.inspiration"/>
        <span class="text-lg text-black cursor-pointer select-none" @click="card.inspiration = !card.inspiration">Inspiration</span>
    </div>
</template>