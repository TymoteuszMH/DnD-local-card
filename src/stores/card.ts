import type { ICard } from '@/types'
import { createEmptyCard } from '@/utils'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type SavedCard = {
  id: string
  name: string
}

export const useCardStore = defineStore('card', () => {
  const card = ref<ICard>(createEmptyCard())

  const getCardFromStorage = (id: string) => {
    const savedCard = localStorage.getItem(id)
    if (savedCard === null) card.value = createEmptyCard(id)
    else card.value = JSON.parse(savedCard)
  }

  const saveCardToLocalStorage = () => {
    if (!card.value.id) throw new Error("Id doesn't exist!")

    localStorage.setItem(card.value.id, JSON.stringify(card.value))

    const savedCards = localStorage.getItem('savedCards')

    const list: SavedCard[] = JSON.parse(savedCards ?? '[]') as SavedCard[]
    if (!list.map((c: SavedCard) => c.id).includes(card.value.id))
      localStorage.setItem(
        'savedCards',
        JSON.stringify([...list, { id: card.value.id, name: card.value.basicInfo.name }]),
      )
    else
      localStorage.setItem(
        'savedCards',
        JSON.stringify(
          list.map((c) =>
            c.id == card.value.id ? { id: card.value.id, name: card.value.basicInfo.name } : c,
          ),
        ),
      )
  }

  return {
    card,
    getCardFromStorage,
    saveCardToLocalStorage,
  }
})
