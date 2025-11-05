<script lang="ts" setup>
    import Navbar from './elements/Navbar.vue';
    import BasicInfo from './card/basicInfo/BasicInfo.vue';
    import StatList from './card/stats/StatList.vue';    
import Inspiration from './card/abilities/Inspiration.vue';
import Proficiency from './card/abilities/Proficiency.vue';
import PassivePerception from './card/abilities/PassivePerception.vue';
import SavingThrows from './card/abilities/savingThrows/SavingThrows.vue';
import Skills from './card/abilities/skills/Skills.vue';
</script>

<template>
    <Navbar>
        <div class="flex flex-col gap-3">
            <BasicInfo />
            <div class="flex flex-col md:flex-row gap-2 basis-2/5">
                <StatList />
                <div class="flex flex-col gap-3">
                    <Inspiration/>
                    <Proficiency/>
                    <PassivePerception/>
                    <SavingThrows/>
                    <Skills/>
                </div>
            </div>
        </div>
    </Navbar>
</template>