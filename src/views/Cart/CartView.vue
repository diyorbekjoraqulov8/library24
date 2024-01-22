<template>
  <div class="lib__container">
    <div v-if="cart.length">
      Cart Page
    </div>
    <div v-else class="flex flex-col gap-4 items-center pt-[30px] md:pt-[50px]">
      <CartIcon class="w-12 h-12 md:w-14 md:h-14" />

      <p class="text-xl">Basket is empty</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter.js";
import CartIcon from '@/components/icons/CartIcon.vue'

const mainStore = useCounterStore()

const cart = computed(() => {
  return mainStore.cart
})

</script>