<script lang="ts" setup>
import { ref } from 'vue'
import Button from './Button.vue'
import { useRouter } from 'vue-router'
import { Delete } from '@element-plus/icons-vue';

defineProps<{
  hide: () => void
}>()

const router = useRouter()
const list = ref<{ id: string; name: string }[]>(JSON.parse(localStorage.getItem('savedCards') ?? '[]'))

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

function createNewCard() {
  const id: string = crypto.randomUUID()
  router.push(`/card/${id}`)
}

function deleteCard(event: Event, id: string){
  event.stopPropagation();
  localStorage.removeItem(id);
  localStorage.setItem('savedCards', JSON.stringify(list.value.filter((card) => card.id !== id)))
  list.value = list.value.filter((card) => card.id !== id)
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
    <div v-for="(card, i) in list" class="border rounded-md overflow-hidden p-2 select-none cursor-pointer flex flex-row flex-nowrap items-center justify-between" @click="goToCard(card.id)">
      <span>{{ card.name !== '' ? card.name : `Card #${i + 1}` }}</span>
      <el-button type="danger" :icon="Delete" @click="(event: Event) => deleteCard(event, card.id)"></el-button>
    </div>
    <div v-if="list.length == 0" class="text-center text-2xl">
      No cards
    </div>
    <Button :func="createNewCard">Create new</Button>
  </div>
</template>
