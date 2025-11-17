<script lang="ts" setup>
import { computed } from 'vue'
import Button from './Button.vue'
import { useRouter } from 'vue-router'

defineProps<{
  hide: () => void
}>()

const router = useRouter()
const list = computed<{ id: string; name: string }[]>(() => {
  const saved: string | null = localStorage.getItem('savedCards')
  return JSON.parse(saved ?? '[]')
})

function goToCard(id: string) {
  if (router.hasRoute('card')) {
    router.replace({
      name: 'card',
      params: {
        uuid: id,
      },
    })
  } else {
    router.push(`/card/${id}`)
  }
}
</script>

<template class="flex flex-col h-full!">
  <div class="flex justify-end">
    <Button
      type="danger"
      classes="rounded-full! w-5! h-5! m-2! p-0! flex! items-center!"
      :func="hide"
      ><el-icon><CloseBold /></el-icon
    ></Button>
  </div>
  <div class="flex flex-col gap-2 px-2">
    <div v-for="(card, index) in list" class="border rounded-md overflow-hidden">
      <div
        class="h-full w-full p-2 select-none cursor-pointer flex justify-center"
        @click="goToCard(card.id)"
      >
        {{ card.name !== '' ? card.name : `Card #${index}` }}
      </div>
    </div>
  </div>
</template>
