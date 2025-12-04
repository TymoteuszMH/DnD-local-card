<script setup lang="ts">
import type { IWeapon } from '@/types';
import { calculateMod, statToObject } from '@/utils';
import { useCardStore } from '@/stores/card';
import { computed } from 'vue';
import EditWeaponModal from './modals/EditWeaponModal.vue';
import SingleListElement from '@/components/elements/SingleListElement.vue';

const props = defineProps<{
    weapon: IWeapon;
    delete: () => Promise<boolean>;
    moveUp?: () => void;
    moveDown?: () => void;
}>()

const { card } = useCardStore();
const atkMod = computed(() => calculateMod(props.weapon.attackModifier, card.proficiencyValue ?? 0, statToObject(card.stats)))
</script>

<template>
    <EditWeaponModal :weapon="weapon" :delete="delete" class-name="rounded-md p-2 w-full">
        <SingleListElement :moveUp :moveDown :delete-element="delete">
            <span
                class="text-ellipsis p-0.75 text-center w-1/3 overflow-hidden text-nowrap border border-white rounded-md"
                :key="weapon.name">
                {{ weapon.name }} <span v-if="!!weapon.amount">({{ weapon.amount }})</span>
            </span>
            <span v-if="atkMod" class="border border-white rounded-md p-0.75 text-center w-1/3">
                {{ `${atkMod > 0 ? "+" : ""}${atkMod}` }}
            </span>
            <span class="border border-white rounded-md p-0.75 text-center w-1/3">
                {{ weapon.damage.diceNumber }}{{ weapon.damage.dice }}<span v-if="weapon.damage.bonus">+{{
                    weapon.damage.bonus }}</span>
            </span>
        </SingleListElement>
    </EditWeaponModal>
</template>

<style lang="css" module></style>