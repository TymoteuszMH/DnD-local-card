import type { ICard } from '@/types'
import { createEmptyCard } from '@/utils'
import { ElMessage } from 'element-plus'
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

  const exportCard = () => {
    const data = JSON.stringify(card.value);
    const blob = new Blob([data], {type: 'application/json'});
    URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${card.value.basicInfo.name ?? "card"}`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  const importCard = () => {
    const link = document.createElement("input");
    link.setAttribute("type", "file");
    link.setAttribute("accept", "application/json");
    link.addEventListener('change', (e: any)=>{
      const file = e.target.files[0];
      if(!file)
        return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result?.toString() ?? "");
          if(json.id){
            card.value = json;
            saveCardToLocalStorage();
            ElMessage({
              type: 'success',
              message: 'Card imported successfully',
              placement: "bottom"
            })
          }else{
            throw new Error()
          }
        } catch (e) {
            ElMessage({
              type: 'warning',
              message: 'Something went wrong. Try again.',
              placement: "bottom"
            })
          return;
        }
      };
      reader.readAsText(file);
    });
    link.click();
  }

  return {
    card,
    getCardFromStorage,
    saveCardToLocalStorage,
    exportCard,
    importCard
  }
})
