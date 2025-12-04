<script setup lang="ts">
import type { ISpell } from '@/types';
import EditSpell from './modals/EditSpell.vue';
import CheckboxField from '@/components/elements/form/CheckboxField.vue';
import { ArrowDown, ArrowUp, Delete } from '@element-plus/icons-vue';
import SingleListElement from '@/components/elements/SingleListElement.vue';
defineProps<{
    spell: ISpell;
    onDelete: () => Promise<boolean>;
    moveUp?: () => void;
    moveDown?: () => void;
}>()
</script>

<template>
    <EditSpell :spell :onDelete class-name="rounded-md p-2 w-full">
        <SingleListElement :moveUp :moveDown :delete-element="onDelete">
            <div class="flex flex-row gap-2 items-center justify-between w-full border border-white rounded-md px-2">
                <span>{{ spell.name }}</span>
                <CheckboxField @click.stop :input="spell.ready" :set-input="v => spell.ready = v" />
            </div>
        </SingleListElement>
    </EditSpell>
</template>

<style lang="css" module></style>