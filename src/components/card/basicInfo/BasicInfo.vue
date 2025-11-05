<script lang="ts" setup>
    import Name from './Name.vue';
    import Info from './Info.vue';
</script>
<template>
    <div class="flex flex-col md:flex-row gap-4">
        <div class="w-full">
            <Name/>
        </div>
        <div class="w-full">
            <Info/>
        </div>
    </div>
</template>