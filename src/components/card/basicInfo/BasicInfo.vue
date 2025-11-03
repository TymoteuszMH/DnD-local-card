<script lang="ts" setup>
    import Name from './Name.vue';
    import Info from './Info.vue';
</script>
<template>
    <div class="border rounded-md p-4 flex flex-row gap-4">
        <div class="basic-1/2 w-full">
            <Name/>
        </div>
        <div class="basic-1/2 w-full">
            <Info/>
        </div>
    </div>
</template>