<script setup lang="ts">
import type { IWeapon } from '@/types';
import { dices, initailWeapon, weaponDemageTypes } from '@/utils';
    const props = defineProps<{
        weapon?: IWeapon;
        show: boolean;
        save:() => void;
    }>();

    const addEditWeapon: IWeapon = props.weapon ?? initailWeapon;
</script>

<template>
    <el-dialog v-model="show" title="Weapon" width="500" ::before-close="save">
        <div class="flex flex-col">
            <el-input v-model="addEditWeapon.name" placeholder="Name" :disabled="!!weapon"/>
            <el-input type="number" v-model="addEditWeapon.amount" placeholder="Amount"/>
            <div class="flex flex-row gap-2">
                <div class="flex flex-row">
                    <el-input type="number" v-model="addEditWeapon.damage.diceNumber"/>
                    <span>x</span>
                    <el-select v-model="addEditWeapon.damage.dice" placeholder="Dice">
                        <el-option v-for="dice in dices" :label="dice" :value="dice" />
                    </el-select>
                </div>
                <el-select v-model="addEditWeapon.damage.type" placeholder="Type">
                    <el-option v-for="type in weaponDemageTypes" :label="type" :value="type" />
                </el-select>
            </div>

        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="show = false">Cancel</el-button>
                <el-button type="primary" @click="show = false">Save</el-button>
            </div>
        </template>
    </el-dialog>
</template>