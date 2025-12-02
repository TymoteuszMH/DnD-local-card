<script lang="ts" setup>
  import Navbar from './elements/Navbar.vue'
  import BasicInfo from './card/basicInfo/BasicInfo.vue'
  import StatList from './card/stats/StatList.vue'
  import Inspiration from './card/abilities/Inspiration.vue'
  import Proficiency from './card/abilities/Proficiency.vue'
  import PassivePerception from './card/abilities/PassivePerception.vue'
  import SavingThrows from './card/abilities/savingThrows/SavingThrows.vue'
  import Skills from './card/abilities/skills/Skills.vue'
  import { useCardStore } from '@/stores/card'
  import { watch } from 'vue'
  import Health from './card/health/Health.vue'
  import WeaponList from './card/weapons/WeaponList.vue'
  import ItemsList from './card/items/ItemsList.vue'
  import FeatsList from './card/feats/FeatsList.vue'
  import ProfsList from './card/profs/ProfsList.vue'
import SpellInfo from './card/spells/SpellInfo.vue'
import Spells from './card/spells/Spells.vue'

  const props = defineProps<{ uuid: string }>()
  const { getCardFromStorage } = useCardStore()
  watch(props, ({ uuid }) => getCardFromStorage(uuid))
  getCardFromStorage(props.uuid)
</script>

<template>
  <Navbar>
    <div class="flex w-full justify-center">
      <div class="flex flex-col gap-5 w-full md:max-w-[1500px]" :key="uuid">
        <BasicInfo/>
        <div class="flex flex-col lg:flex-row gap-5 w-full">
          <StatList class="w-full lg:w-1/9"/>
          <div class="flex flex-col lg:flex-row gap-5 w-full lg:w-8/9">
            <div class="flex flex-col md:flex-row gap-5 w-full lg:w-2/3">
              <div class="flex flex-col gap-5 w-full md:w-1/2">
                <Inspiration />
                <Proficiency />
                <PassivePerception />
                <SavingThrows />
                <Skills class="h-full"/>
              </div>
              <div class="flex flex-col gap-5 w-full md:w-1/2">
                  <Health class="h-auto md:h-3/7"/>
                  <WeaponList class="h-auto md:h-2/7"/>
                  <ItemsList class="h-auto md:h-2/7"/>
              </div>
            </div>
            <div class="flex flex-col gap-5 md:gap-2 lg:gap-5 md:flex-row lg:flex-col w-full md:h-full lg:w-1/3">
                <FeatsList class="w-full md:w-1/2 lg:w-full lg:h-1/2"/>
                <ProfsList class="w-full md:w-1/2 lg:w-full lg:h-1/2"/>
            </div>
          </div>
        </div>
        <SpellInfo/>
        <Spells />
      </div>
    </div>

  </Navbar>
</template>
