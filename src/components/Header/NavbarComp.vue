<template>
  <nav class="container mx-auto py-8 flex items-center justify-between">
    <div class="w-16">
      <router-link to="/">
        <img class="w-full" src="/logo.svg" alt="Logo">
      </router-link>
    </div>
    <form @submit.prevent class="w-3/5">
      <div class="relative bg-violet-50 rounded">
        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <img src="/search.svg">
        </div>
        <input type="search"
          class="block w-full pl-14 pr-6 py-2.5 outline-none text-lg text-gray-900 rounded bg-transparent border border-transparent focus:border-blue-200"
          placeholder="Search">
      </div>
    </form>
    <div class="flex items-center justify-between w-44">
      <div @click="userToggle = !userToggle" class="relative flex items-center justify-center p-3 cursor-pointer bg-violet-50 active:bg-violet-100 rounded">
        <img class="opacity-70" src="/avatar-out.svg" alt="">
        <router-link to="/login">
          <span v-if="userToggle" class="w-20 text-sm text-center absolute top-14 right-6 bg-slate-50 hover:bg-slate-100 active:bg-violet-100 py-2 px-5 rounded">Log in</span>
        </router-link>
      </div>
      <div class="flex items-center justify-center p-3 cursor-pointer bg-violet-50 active:bg-violet-100 rounded">
        <img class="opacity-70" src="/heart.svg" alt="">
      </div>
      <div class="flex items-center justify-center p-3 cursor-pointer bg-violet-50 active:bg-violet-100 rounded">
        <img class="opacity-70" src="/cart.svg" alt="">
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from "vue";
  let userToggle = ref(false);
  
</script>