<template>
  <div 
  class="
  flex min-[900px]:hidden items-center justify-between gap-4
  fixed bottom-0
  bg-white w-full px-[15px] py-1 ss:py-1.5">
    <router-link 
    v-for="item in mobileItems" :key="item.path"
    :to="item.path"
    class="flex relative rounded-[4px] bg-[#F4F4FF] p-3 ss:p-3.5 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white">
      <img :src="item.img" class="w-5 h-5 ss:w-6 ss:h-6" alt="">
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mobileItems = ref([
  {
    path: '/',
    img: '/home.svg'
  },
  {
    path: '/like',
    img: '/heart.svg'
  },
  {
    path: '/cart',
    img: '/cart.svg'
  },
  {
    path: '/profil',
    img: '/person.svg'
  },
  {
    path: '/logout',
    img: '/logout.svg'
  }
])
</script>