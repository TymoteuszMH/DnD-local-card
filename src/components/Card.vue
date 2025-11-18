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
      <BasicInfo />
      <div class="flex flex-col md:flex-row gap-2">
        <StatList />
        <div class="flex flex-col gap-3">
          <Inspiration />
          <Proficiency />
          <PassivePerception />
          <SavingThrows />
          <Skills />
        </div>
        <div class="flex flex-col gap-3">
          <Health />
          <WeaponList />
        </div>
        <div class="flex flex-col gap-3">
          <Health />
        </div>
      </div>
    </div>
  </Navbar>
</template>
