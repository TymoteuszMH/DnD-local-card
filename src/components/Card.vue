<script lang="ts" setup>
    import type { ICard } from '@/types';
    import Navbar from './elements/Navbar.vue';

    defineProps<{
        card: ICard;
    }>();
</script>

<template>
    <Navbar>
        <div>
            works
        </div>
    </Navbar>
</template>