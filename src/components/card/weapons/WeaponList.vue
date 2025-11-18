<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import { Plus } from '@element-plus/icons-vue';
    import Weapon from './Weapon.vue';
    const { card } = useCardStore()

    function addWeapon(){

    }
</script>

<template>
    <div class="card-panel">
        <el-button :icon="Plus" @click="addWeapon">Add</el-button>
        <div v-for="weapon in card.weapons">
            <Weapon :weapon/>
        </div>
    </div>
</template>