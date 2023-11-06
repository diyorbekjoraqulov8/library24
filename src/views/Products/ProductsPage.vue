<template>
  <!-- px-4 py-16 sm:px-6 sm:py-10 -->
  <div class="bg-[#F1F4FA]">
    <div class="mx-auto max-w-[1350px] px-[15px] pt-4">
      <router-link to="/" class="w-max flex items-center mb-4 gap-2">
        <img src="/Arrow.svg" alt="">
        <p class="leading-5 text-lg ss:text-xl font-semibold">Back home</p>
      </router-link>
      <div class="mx-auto max-w-xs ss:max-w-[1320px]">
        <div class="grid gap-x-[5px] gap-y-10 grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-y-[12px]">
          <Product :products="mainStore.products"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Product from "./ProductPage.vue";
import { useCounterStore } from '../../stores/counter.js';

const mainStore = useCounterStore()

mainStore.getProducts()

</script>