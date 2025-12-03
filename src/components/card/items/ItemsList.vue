<script setup lang="ts">
    import { useCardStore } from '@/stores/card';
    import type { IItem } from '@/types';
    import AddItemModal from './modals/AddItemModal.vue';
    import Item from './Item.vue';
    import { computed, ref } from 'vue';
    import { Search } from '@element-plus/icons-vue';
    import Money from './Money.vue';
    import { ElMessage, ElMessageBox } from 'element-plus';
    
    const { card } = useCardStore();

    const searchInput = ref("")
    const filteredCards = computed(() => card.items.filter((item) => item.name.includes(searchInput.value)))

    function addItem(newItem: IItem){
        card.items.push(newItem)
    }

    function move(item: IItem, index: number){
        const tempArr = card.items;
        const getIndex = tempArr.findIndex((itm) => itm.name == item.name);
        tempArr.splice(getIndex, 1);
        tempArr.splice(index, 0, item);
    }

    function onDelete(item: IItem){
        return ElMessageBox.confirm(
            'Are you sure you want to delete this item?', 
            'Delete item', 
            {
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                type: 'warning',
            }
        ).then(() => {
            card.items = card.items.filter(itm => itm !== item)
            ElMessage({
                type: 'success',
                message: 'Delete completed',
                placement: "bottom"
            })
            return true;
        }).catch(() => false)
    }
</script>
<template>
    <div class="relative card-panel flex flex-col items-center">
        <div class="static flex flex-row gap-2 h-full w-full pb-4">
            <div class="flex justify-between flex-col w-1/5 gap-2">
                <Money v-for="(money, i) in card.money" :key="i" :money/>
            </div>
            <div class="flex flex-col gap-2 w-4/5">
                <div class="relative w-1/3">
                    <AddItemModal :save="addItem"/>
                </div>
                <div class="flex flex-col md:flex-row gap-2 md:h-17/20">
                    <div class="flex flex-col gap-2 h-full w-full">
                        <el-input v-model="searchInput" placeholder="Search..." :prefix-icon="Search"/>

                        <div class="flex flex-row w-full justify-between! items-center px-2">
                            <span class="w-full">Name</span>
                        </div>
                        <el-scrollbar view-class="flex flex-col gap-2 py-1" class="relative min-h-[180px] max-h-[180px] overflow-hidden">
                            <div v-for="(item, i) in filteredCards">
                                <Item 
                                    :key="i"
                                    :item 
                                    :onDelete="() => onDelete(item)"
                                    :move-up="i > 0 ? () => move(item, i-1) : undefined"
                                    :move-down="i < card.items.length - 1 ? () => move(item, i+1) : undefined"
                                />
                            </div>

                            <span class="w-full text-center" v-if="filteredCards.length == 0">No items</span>
                        </el-scrollbar>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Items
        </div>
    </div>
</template>