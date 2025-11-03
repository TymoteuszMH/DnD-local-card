import type { ICard } from "@/types";
import { createEmptyCard } from "@/utils";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardStore = defineStore('card', ()=>{
    const card = ref<ICard>(createEmptyCard());

    const getCardFromStorage = (id: string) => {
        const savedCard = localStorage.getItem(id);
        if(savedCard === null)
            card.value = createEmptyCard(id);
        else
            card.value = JSON.parse(savedCard);
    }

    const saveCardToLocalStorage = () =>{
        if(!card.value.id)
            throw new Error("Id doesn't exist!")

        localStorage.setItem(card.value.id, JSON.stringify(card.value))

        const savedCards = localStorage.getItem("savedCards");

        const list = JSON.parse(savedCards ?? "[]") as string[];
        if(!list.includes(card.value.id))
            localStorage.setItem("savedCards", JSON.stringify([...list, card.value.id]))
    }

    return { 
        card,
        getCardFromStorage, 
        saveCardToLocalStorage 
    }
})