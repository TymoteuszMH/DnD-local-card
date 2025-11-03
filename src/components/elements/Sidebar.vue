<script lang="ts" setup>
    import { computed } from 'vue';
import Button from './Button.vue';

    defineProps<{
        hide:()=>void
    }>()

    const list = computed<string[]>(()=>{
        const saved: string|null = localStorage.getItem("savedCards")
        return JSON.parse(saved ?? "[]")
    });
</script>

<template class="flex flex-col h-full!">
    <div class="flex justify-end">
        <Button type="danger" classes="rounded-full! w-5! h-5! m-2! p-0! flex! items-center!" :func="hide"><el-icon><CloseBold /></el-icon></Button>
    </div>
    <div class="flex flex-col gap-2 px-2">
        <div v-for="id in list" class="border rounded-md p-2">
            {{ id }}
        </div>
    </div>
</template>