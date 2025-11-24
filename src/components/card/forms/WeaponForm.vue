<script lang="ts" setup>
    import type { IWeapon } from '@/types';
    import { ref } from 'vue';
    import { dices, weaponDemageTypes, weaponTypes, stats, checkMinMaxNum } from '@/utils';
    import ItemForm from './ItemForm.vue';
    import { CheckboxField, InputField, LabelField, SelectField } from '@/components/elements/form';

    const props = defineProps<{
        form: IWeapon;
        isEdit?: boolean;
    }>()

    const weapon = ref(props.form);
</script>

<template>
    <div class="flex flex-col gap-2">
        <ItemForm :form="weapon" :is-edit="isEdit"/>

        <LabelField>Weapon Type</LabelField>
        <SelectField :model="weapon.type" :values="weaponTypes" placeholder="Type" :disabled="isEdit" transparent/>

        <LabelField>Weapon DMG</LabelField>
        <div class="flex flex-row gap-2">
            <div class="flex flex-row gap-2">
                <InputField type="number" :model="weapon.damage.diceNumber" transparent/>
                <span class="flex items-center text-white">x</span>
                <SelectField :model="weapon.damage.dice" :values="dices" placeholder="Dice" transparent/>
                <InputField type="number" :model="weapon.damage.bonus" placeholder="Bonus" :minMax="{min: 0}" transparent/>
            </div>
            <SelectField :model="weapon.damage.type" :values="weaponDemageTypes" placeholder="Type" transparent/>
        </div>

        <LabelField>Attack Mod</LabelField>
        <div class="flex flex-row gap-2">
            <CheckboxField :model="weapon.attackModifier.proficiency" label="Prof" transparent/>
            <SelectField :model="weapon.attackModifier.agility" :values="stats" placeholder="Agility" transparent/>
            <InputField type="number" :model="weapon.attackModifier.bonus" placeholder="Bonus" :minMax="{min: 0}" transparent/>
        </div>
    </div>
</template>