<script lang="ts" setup>
    import Button from './Button.vue';

    defineProps<{
        hide:()=>void
    }>()
</script>

<template class="flex flex-col h-full!">
    <Button :func="hide">X</Button>
    <div>

    </div>
</template>