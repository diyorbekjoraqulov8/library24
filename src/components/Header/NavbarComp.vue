<template>
  <nav class="container mx-auto py-8 flex items-center justify-between">
    <div class="w-16">
      <router-link to="/">
        <img class="w-full" src="/logo.svg" alt="Logo">
      </router-link>
    </div>
    <form @submit.prevent class="w-3/5">
      <div class="relative bg-violet-50 rounded">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <img src="/search.svg">
        </div>
        <input type="search"
          class="block w-full pl-12 pr-6 py-2.5 outline-none text-lg text-gray-900 rounded bg-transparent border border-transparent focus:border-blue-200"
          placeholder="Search">
      </div>
    </form>
    <div class="flex items-center justify-between w-44">
      <div class="flex items-center justify-center w-12 h-12 cursor-pointer bg-violet-50 rounded">
        <img class="opacity-70" src="/avatar-out.svg" alt="">
      </div>
      <div class="flex items-center justify-center w-12 h-12 cursor-pointer bg-violet-50 rounded">
        <img class="opacity-70" src="/heart.svg" alt="">
      </div>
      <div class="flex items-center justify-center w-12 h-12 cursor-pointer bg-violet-50 rounded">
        <img class="opacity-70" src="/avatar-out.svg" alt="">
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>