<script lang="ts" setup>
    import Navbar from './elements/Navbar.vue';
    import BasicInfo from './card/basicInfo/BasicInfo.vue';
    import StatList from './card/stats/StatList.vue';    
</script>

<template>
    <Navbar>
        <div class="flex flex-col gap-2">
            <BasicInfo />
            <div class="flex flex-row gap-2">
                <StatList />

            </div>
        </div>
    </Navbar>
</template>