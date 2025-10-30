<script lang="ts" setup>
    import { ref } from 'vue';
    import Button from './Button.vue';
    import Sidebar from './Sidebar.vue';

    const showState = ref<boolean>(false)

    function showSidebar(){
        showState.value = !showState.value;
    }
</script>

<template>
    <el-container>
        <Transition name="bg">
            <div v-if="showState" class="absolute w-full h-full bg-black opacity-25 z-1"></div>
        </Transition>
        <el-header>
            <Button :func="showSidebar" class="max-w-[50px]">Show</Button>
        </el-header>
        <el-container>
            <Transition name="sidebar">
                <el-aside v-if="showState" width="200px" class="absolute top-0 left-0 h-screen z-2 bg-blue-500">
                    <Sidebar :hide="showSidebar"/>
                </el-aside>
            </Transition>
            <el-container>
                <el-main class="w-full h-full">
                    <slot />
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<style lang="css" scoped>
    .el-header{
        background-image: linear-gradient(to right, blue, black);
    }
    .sidebar-enter-active,
    .sidebar-leave-active {
        transition: left 0.3s ease-in-out;
    }

    .sidebar-enter-from,
    .sidebar-leave-to {
        left: -300px;
    }
</style>