<script setup lang="ts">
    import type { ICost } from '@/types';
    import { checkMinMaxNum } from '@/utils';

    defineProps<{
        money: ICost;
    }>();
</script>
<template>
    <div class="flex flex-row border border-black rounded-md overflow-hidden">
        <span class="flex border-r p-1 min-w-1/2 justify-center items-center text-black uppercase">{{ money.currency }}</span>
        <el-input input-style="text-align:center" type="number" :model-value="money.value" @input="(value: any) => money.value = checkMinMaxNum(money.value, value, 0) ?? 0" />
    </div>
</template>

<style lang="css" scoped>
    .el-input :deep(.el-input__wrapper){
        padding: 0;
        border-radius: 0;
    }
</style>