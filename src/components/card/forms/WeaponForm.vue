<script lang="ts" setup>
    import type { IWeapon } from '@/types';
    import { ref } from 'vue';
    import { dices, weaponDemageTypes, weaponTypes, stats, checkMinMaxNum, parseNum } from '@/utils';
    import ItemForm from './ItemForm.vue';
    import { CheckboxField, InputField, LabelField, SelectField } from '@/components/elements/form';

    defineProps<{
        weapon: IWeapon;
        isEdit?: boolean;
    }>()
</script>

<template>
    <div class="flex flex-col gap-2">
        <ItemForm :item="weapon" :is-edit="isEdit"/>

        <LabelField>Weapon Type</LabelField>
        <SelectField :input="weapon.type" :set-input="(val) => weapon.type = val" :values="weaponTypes" placeholder="Type" :disabled="isEdit" transparent/>

        <LabelField>Weapon DMG</LabelField>
        <div class="flex flex-row gap-2">
            <div class="flex flex-row gap-2">
                <InputField type="number" :input="weapon.damage.diceNumber" :set-input="(val) => weapon.damage.diceNumber = parseNum(val)" transparent/>
                <span class="flex items-center text-white">x</span>
                <SelectField :input="weapon.damage.dice" :set-input="(val) => weapon.damage.dice = val" :values="dices" placeholder="Dice" transparent/>
                <InputField type="number" :input="weapon.damage.bonus" :set-input="(val) => weapon.damage.bonus = parseNum(val)" placeholder="Bonus" :minMax="{min: 0}" transparent/>
            </div>
            <SelectField :input="weapon.damage.type" :set-input="(val) => weapon.damage.type = val" :values="weaponDemageTypes" placeholder="Type" transparent/>
        </div>

        <LabelField>Attack Mod</LabelField>
        <div class="flex flex-row gap-2">
            <CheckboxField :input="weapon.attackModifier.proficiency" :set-input="(val) => weapon.attackModifier.proficiency = val" label="Prof" transparent/>
            <SelectField :input="weapon.attackModifier.agility" :set-input="(val) => weapon.attackModifier.agility = val" :values="stats" placeholder="Agility" transparent/>
            <InputField type="number" :input="weapon.attackModifier.bonus" :set-input="(val) => weapon.attackModifier.bonus = parseNum(val)" placeholder="Bonus" :minMax="{min: 0}" transparent/>
        </div>
    </div>
</template>