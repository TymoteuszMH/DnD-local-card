<script lang="ts" setup>
  import Button from './elements/Button.vue';

  function createNewCard(){
    console.log("create works")
  }

  function importCard(){
    console.log("import works")
  }

  function openList(){
    console.log("list works")
  }
</script>

<template>
  <div class="h-screen w-full flex flex-col justify-center text-center items-center gap-4">
    <h1 class="text-white text-5xl font-bold">Welcome to DnD Local Card Creator!</h1>
    <div class="w-[40%] flex flex-col gap-4">
      <Button :func="createNewCard" text="Create new"/>
      <Button :func="importCard" text="Import"/>
      <Button :func="openList" text="Load"/>
    </div>
  </div>
</template>