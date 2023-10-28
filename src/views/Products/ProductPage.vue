<template>
  <div
  v-for="product in products" :key="product.id" :href="product.href"
  class="aspect-h-1 aspect-w-1 w-full h-auto overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7 p-[14px] relative">
    <img src="/heart.svg" alt="" class="absolute top-[14px] right-[14px] cursor-pointer">
    <img :src="product.imgSrc" :alt="product.imgAlt" class="object-contain h-[180px] w-full object-center mb-[14px]" />
    <div class="flex flex-col gap-[14px]">
      <h3 class="text-[16px] text-black font-manrope font-bold min-h-[48px] leading-5">{{ product.name }}</h3>
      <div>
        <star-rating 
        class="leading-5"
        v-model:rating="product.stars" 
        :read-only="true" 
        :increment="0.5" 
        active-color="#FE7300"
        :star-size="15"
        :show-rating="false"></star-rating>
      </div>
      <p class="text-lg font-semibold text-[#6251DD] leading-5">{{ product.price }} so'm</p>
      <div class="flex gap-[8px] justify-between h-[35px] text-white">
        <button class="h-full bg-[#6251DD] flex-grow rounded-[8px]">Harid qilish</button>
        <button class="w-[50px] h-full bg-[#EF6B4A] rounded-[8px] flex justify-center items-center">
          <img src="/cart.svg" alt="cart">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import StarRating from 'vue-star-rating'
const props = defineProps(['products'])
const { products } = toRefs(props)
</script>