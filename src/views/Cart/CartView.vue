<template>
  <div class="lib__container">
    <div v-if="cart.length">
      Cart Page
    </div>
    <div v-else class="flex flex-col gap-4 items-center pt-[30px] md:pt-[50px]">
      <img src="/cart.svg" class="w-12 h-12 md:w-14 md:h-14" alt="Empty Cart">
      <p class="text-xl">Basket is empty</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter.js";

const mainStore = useCounterStore()

const cart = computed(() => {
  return mainStore.cart
})

</script>