<script lang="ts" setup>
    import type { IItem } from '@/types';
    import { ref } from 'vue';
    import CostForm from '../forms/CostForm.vue';

    const props = defineProps<{
        form: IItem;
        isEdit?: boolean;
    }>()

    const item = ref(props.form);
</script>

<template>
    <div class="flex flex-col gap-2">
        <el-text type="primary" class="w-full text-start" tag="div">Name and amount</el-text>
        <div class="flex flex-row flex-nowrap gap-1">
            <el-input v-model.trim="item.name" placeholder="Name" class="basis-4/5" :disabled="isEdit"/>
            <el-input type="number" v-model="item.amount" placeholder="Amount" class="basis-1/5"/>
        </div>

        <CostForm :form="item.cost" :is-edit="isEdit"/>

        <el-text type="primary" class="w-full text-start" tag="div">Description</el-text>
        <el-input type="textarea" v-model="item.description" placeholder="Description" />
    </div>
</template>