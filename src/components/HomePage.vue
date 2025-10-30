<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import Button from './elements/Button.vue';

  const router = useRouter();

  function createNewCard(){
    const id:string = crypto.randomUUID();
    router.push(`/card/${id}`)
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
      <Button :func="createNewCard">Create new</Button>
      <Button :func="importCard">Import</Button>
      <Button :func="openList">Load</Button>
    </div>
  </div>
</template>