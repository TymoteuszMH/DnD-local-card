<script setup lang="ts">
    import { ref } from 'vue';
    import { Delete, Plus } from '@element-plus/icons-vue';
    import Modal from '@/components/elements/Modal.vue';
    import { useCardStore } from '@/stores/card';
    import InputField from '@/components/elements/form/InputField.vue';
    import LabelField from '@/components/elements/form/LabelField.vue';
    import { initialClass, parseNum } from '@/utils';
    import type { IClass } from '@/types';

    const {card} = useCardStore();
    const dialogVisible = ref(false);

    function addClass(){
        card.basicInfo.classes.push(initialClass());
    }

    function removeClass(cClass: IClass){
        card.basicInfo.classes = card.basicInfo.classes.filter((c) => c !== cClass)
    }

    function onClose(){
        dialogVisible.value = false;
    }
</script>

<template>
    <el-button class="basis-1/2" @click="dialogVisible = true">Classes</el-button>
    <Modal :show="dialogVisible" :hide="onClose" title="Classes" :onClose="onClose" :save-button="{text: 'Close', func: onClose}">
        <div class="w-full h-full">
            <div class="w-1/3">
                <el-button class="border! border-white!" type="primary" :icon="Plus" @click="addClass">Add</el-button>
            </div>
            <div class="flex flex-col gap-2 pt-2 h-full">
                <div class="flex flex-row gap-2 justify-between! items-center">
                    <LabelField class="w-2/3!">Name</LabelField>
                    <LabelField class="w-1/3!">LVL</LabelField>
                </div>
                <el-scrollbar height="180px" view-class="flex flex-col gap-2">
                    <div class="flex flex-row gap-2 w-full" v-for="cClass in card.basicInfo.classes">
                        <InputField class="w-2/3!" :input="cClass.class" :set-input="(v) => cClass.class = `${v}`"/>
                        <InputField class="w-1/6!" :input="cClass.level" :set-input="(v) => cClass.level = parseNum(v)"/>
                        <el-button class="w-1/6" type="danger" :icon="Delete" @click="removeClass(cClass)"></el-button>
                    </div>
                    <span class="w-full text-center" v-if="card.basicInfo.classes.length == 0">No classes</span>
                </el-scrollbar>
            </div>
        </div>
    </Modal>
</template>