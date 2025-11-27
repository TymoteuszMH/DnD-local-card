<script lang="ts" setup>
import { ref, watch } from 'vue'
import Button from './Button.vue'
import Sidebar from './Sidebar.vue'
import { useCardStore } from '@/stores/card'
import { useRoute } from 'vue-router'

const { saveCardToLocalStorage, exportCard } = useCardStore()
const route = useRoute()

const showState = ref<boolean>(false)

watch(route, () => showSidebar())

function showSidebar() {
  showState.value = !showState.value
}
</script>

<template>
  <el-container>
    <Transition name="bg">
      <div
        v-if="showState"
        class="absolute w-full h-full bg-black opacity-25 z-2"
        @click="showSidebar"
      ></div>
    </Transition>
    <el-header class="flex flex-row items-center justify-between" height="50px">
      <div>
        <Button :func="showSidebar" class="max-w-[50px]">Show</Button>
      </div>
      <div class="flex flex-row gap-2">
        <Button :func="saveCardToLocalStorage" class="max-w-[50px]">Save</Button>
        <Button :func="exportCard" class="max-w-[50px]">Export</Button>
      </div>
    </el-header>
    <el-container>
      <Transition name="sidebar">
        <el-aside
          v-if="showState"
          width="200px"
          class="absolute top-0 left-0 h-full z-3 bg-blue-500"
        >
          <Sidebar :hide="showSidebar" />
        </el-aside>
      </Transition>
      <el-container>
        <el-scrollbar height="calc(100vh - 50px)" class="w-full">
          <el-main class="w-full h-full overflow-y-scroll">
            <slot />
          </el-main>
        </el-scrollbar>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="css" scoped>
.el-header {
  background-image: linear-gradient(to right, blue, black);
}
</style>
