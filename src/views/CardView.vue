<script lang="ts" setup>
  import Card from '@/components/Card.vue'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const id = computed<string>(() => route.params.uuid as string)
</script>

<template>
  <Card :uuid="id" />
</template>
