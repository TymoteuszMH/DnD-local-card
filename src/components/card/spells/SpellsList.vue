<script setup lang="ts">
import { computed, ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import Spell from './Spell.vue';
import type { ISpell, ISpellList } from '@/types';
import InputField from '@/components/elements/form/InputField.vue';
import { parseNum } from '@/utils';
import AddSpell from './modals/AddSpell.vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import ListLabel from '@/components/elements/ListLabel.vue';

const props = defineProps<{
    spells: ISpellList;
}>();

const searchInput = ref("")
const filteredCards = computed(() => props.spells.spells.filter((spell) => spell.name.includes(searchInput.value)))

function addSpell(spell: ISpell) {
    props.spells.spells.push(spell);
}

function move(spell: ISpell, index: number) {
    const getIndex = props.spells.spells.findIndex((s) => s.name == spell.name);
    props.spells.spells.splice(getIndex, 1);
    props.spells.spells.splice(index, 0, spell);
}

function onDelete(spell: ISpell) {
    return ElMessageBox.confirm(
        'Are you sure you want to delete this spell?',
        'Delete spell',
        {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type: 'warning',
        }
    ).then(() => {
        props.spells.spells = props.spells.spells.filter(s => s !== spell)
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
        <div class="static w-full h-full pb-4">
            <AddSpell class="w-1/3 relative" :save="addSpell" />
            <div class="flex flex-col pt-2 gap-2 h-4/5">
                <div class="flex flex-row gap-2">
                    <InputField class="w-1/2 h-6 text-center" placeholder="Slots" :input="spells.spellSlots"
                        :set-input="v => spells.spellSlots = parseNum(v)" />
                    <span>/</span>
                    <InputField class="w-1/2 h-6 text-center" placeholder="Expiried" :input="spells.spellStolsExpiried"
                        :set-input="v => spells.spellStolsExpiried = parseNum(v)" />
                </div>

                <el-input v-model="searchInput" placeholder="Search..." :prefix-icon="Search" />
                <ListLabel>
                    <span>Name</span>
                    <span>Ready</span>
                </ListLabel>
                <el-scrollbar view-class="flex flex-col gap-2 py-1"
                    class="relative min-h-[180px] max-h-[180px] overflow-hidden">
                    <Spell v-for="(spell, i) in filteredCards" :key="i" :spell :onDelete="() => onDelete(spell)"
                        :move-up="i > 0 ? () => move(spell, i - 1) : undefined"
                        :move-down="i < spells.spells.length - 1 ? () => move(spell, i + 1) : undefined" />
                    <span class="w-full text-center" v-if="filteredCards.length == 0">No weapons</span>
                </el-scrollbar>
            </div>
        </div>
        <div
            class="absolute flex items-center justify-center text-xs bg-black text-white -bottom-3 z-1 rounded-lg border w-4/5 h-6">
            {{ spells.level }}
        </div>
    </div>
</template>