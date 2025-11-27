<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Button from './elements/Button.vue'
import { ref } from 'vue'
import { useCardStore } from '@/stores/card';

const router = useRouter();
const showState = ref<boolean>(false);
const {importCard} = useCardStore();

function createNewCard() {
  const id: string = crypto.randomUUID()
  router.push(`/card/${id}`)
}

function showSidebar() {
  showState.value = !showState.value
}
</script>

<template>
  <Transition name="bg">
    <div
      v-if="showState"
      class="absolute w-full h-full bg-black opacity-25 z-2"
      @click="showSidebar"
    ></div>
  </Transition>
  <Transition name="sidebar">
    <el-aside v-if="showState" width="200px" class="absolute top-0 left-0 h-full z-3 bg-blue-500">
      <Sidebar :hide="showSidebar" />
    </el-aside>
  </Transition>
  <div class="h-screen w-full flex flex-col justify-center text-center items-center gap-4">
    <h1 class="text-white text-5xl font-bold">Welcome to DnD Local Card Creator!</h1>
    <div class="w-[40%] flex flex-col gap-4">
      <Button :func="createNewCard">Create new</Button>
      <Button :func="importCard">Import</Button>
      <Button :func="showSidebar">Load</Button>
    </div>
  </div>
</template>
