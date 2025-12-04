<script setup lang="ts">
import { useCardStore } from '@/stores/card';
import Weapon from './Weapon.vue';
import AddWeaponModal from './modals/AddWeaponModal.vue';
import type { IWeapon } from '@/types';
import { computed, ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import ListLabel from '@/components/elements/ListLabel.vue';
const { card } = useCardStore();


const searchInput = ref("")
const filteredCards = computed(() => card.weapons.filter((weapon) => weapon.name.includes(searchInput.value)))

function addWeapon(newWeapon: IWeapon) {
    card.weapons.push(newWeapon)
}

function deleteWeapon(weapon: IWeapon) {
    return ElMessageBox.confirm(
        'Are you sure you want to delete this weapon?',
        'Delete weapon',
        {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type: 'warning',
        }
    ).then(() => {
        card.weapons = card.weapons.filter(w => w !== weapon)
        ElMessage({
            type: 'success',
            message: 'Delete completed',
            placement: "bottom"
        })
        return true;
    }).catch(() => false)
}

function move(weapon: IWeapon, index: number) {
    const getIndex = card.weapons.findIndex((w) => w.name == weapon.name);
    card.weapons.splice(getIndex, 1);
    card.weapons.splice(index, 0, weapon);
}
</script>
<template>
    <div class="relative card-panel flex flex-col items-center h-full">
        <div class="static w-full h-full">
            <div class="w-1/3 relative">
                <AddWeaponModal :save="addWeapon" />
            </div>
            <div class="flex flex-col pt-2 gap-2 h-4/5">
                <el-input v-model="searchInput" placeholder="Search..." :prefix-icon="Search" />
                <ListLabel>
                    <span class="w-1/3 text-center">Name</span>
                    <span class="w-1/3 text-center">ATK</span>
                    <span class="w-1/3 text-center">DMG</span>
                </ListLabel>
                <el-scrollbar view-class="flex flex-col py-1"
                    class="relative min-h-[180px] max-h-[180px] overflow-hidden">
                    <Weapon v-for="(weapon, i) in filteredCards" :key="i" :weapon :delete="() => deleteWeapon(weapon)"
                        :move-up="i > 0 ? () => move(weapon, i - 1) : undefined"
                        :move-down="i < card.weapons.length - 1 ? () => move(weapon, i + 1) : undefined" />
                    <span class="w-full text-center" v-if="filteredCards.length == 0">No weapons</span>
                </el-scrollbar>
            </div>
        </div>
        <div
            class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            Weapons
        </div>
    </div>
</template>