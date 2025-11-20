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

  const props = defineProps<{ uuid: string }>()
  const { getCardFromStorage } = useCardStore()
  watch(props, ({ uuid }) => getCardFromStorage(uuid))
  getCardFromStorage(props.uuid)
</script>

<template>
  <Navbar>
    <div class="flex flex-col gap-3" :key="uuid">
      <BasicInfo/>
      <div class="flex flex-col w-full lg:flex-row gap-2">
        <div class="flex flex-col w-full md:flex-row gap-2 lg:basis-2/3">
          <StatList class="md:basis-1/6 lg:basis-1/9 w-full"/>
          <div class="flex flex-col sm:flex-row gap-2 md:basis-5/6 lg:basis-8/9">
            <div class="flex flex-col gap-3 w-full sm:basis-1/2">
              <Inspiration />
              <Proficiency />
              <PassivePerception />
              <SavingThrows />
              <Skills />
            </div>
            <div class="flex flex-col gap-3 sm:basis-1/2">
              <Health />
              <WeaponList />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 lg:basis-1/3">
        </div>
      </div>
    </div>
  </Navbar>
</template>
