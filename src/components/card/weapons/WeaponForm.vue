<script lang="ts" setup>
    import type { IWeapon } from '@/types';
    import { ref } from 'vue';
    import { dices, weaponDemageTypes, weaponTypes, stats, checkMinMaxNum } from '@/utils';

    const props = defineProps<{
        form: IWeapon;
        isEdit?: boolean;
    }>()

    const weapon = ref(props.form);
</script>

<template>
    <div class="flex flex-col gap-2">
        <el-text type="primary" class="w-full text-start" tag="div">Name and amount</el-text>
        <div class="flex flex-row flex-nowrap gap-1">
            <el-input v-model.trim="weapon.name" placeholder="Name" class="basis-4/5" :disabled="isEdit"/>
            <el-input type="number" v-model="weapon.amount" placeholder="Amount" class="basis-1/5"/>
        </div>

        <el-text type="primary" class="w-full text-start" tag="div">Weapon Type</el-text>
        <el-select v-model="weapon.type" placeholder="Type" :disabled="isEdit">
            <el-option v-for="type in weaponTypes" :label="type" :value="type" />
        </el-select>

        <el-text type="primary" class="w-full text-start" tag="div">Weapon DMG</el-text>
        <div class="flex flex-row gap-2">
            <div class="flex flex-row gap-2">
                <el-input type="number" v-model="weapon.damage.diceNumber"/>
                <span class="flex items-center">x</span>
                <el-select v-model="weapon.damage.dice" placeholder="Dice">
                    <el-option v-for="dice in dices" :label="dice" :value="dice" />
                </el-select>
                <el-input type="number" placeholder="Bonus" :model-value="weapon.damage.bonus" @input="(value: string) => weapon.damage.bonus = checkMinMaxNum(weapon.damage.bonus, value, 0)"/>
            </div>
            <el-select v-model="weapon.damage.type" placeholder="Type">
                <el-option v-for="type in weaponDemageTypes" :label="type" :value="type" />
            </el-select>
        </div>

        <el-text type="primary" class="w-full text-start" tag="div">Attack Mod</el-text>
        <div class="flex flex-row gap-2">
            <el-checkbox v-model="weapon.attackModifier.proficiency" label="Prof"/>
            <el-select v-model="weapon.attackModifier.agility" placeholder="Agility">
                <el-option v-for="stat in stats" :label="stat" :value="stat" />
            </el-select>
            <el-input type="number" placeholder="Bonus" :model-value="weapon.attackModifier.bonus" @input="(value: string) => weapon.damage.bonus = checkMinMaxNum(weapon.damage.bonus, value, 0)"/>
        </div>

        <el-text type="primary" class="w-full text-start" tag="div">Description</el-text>
        <el-input type="textarea" v-model="weapon.description" placeholder="Description" />
    </div>
</template>