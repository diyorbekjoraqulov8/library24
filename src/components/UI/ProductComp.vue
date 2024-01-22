<template>
  <div
  class="aspect-h-1 aspect-w-1 w-full h-auto overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7 p-[14px] relative">
  {{ product.created_date }}
  {{ product.created_date > '2022' }}
    <div class="mb-[14px] h-[180px]">
      <SkeletonLoader v-if="!product?.cover_url"/>
      <img v-else :src="product?.cover_url" alt="" class="object-contain h-[180px] w-full object-center mb-[14px]" />
    </div>
    <div class="flex flex-col gap-[14px]">
      <h3 class="w-max swiper-no-swiping text-[16px] text-black font-manrope font-bold min-h-[48px] leading-5">{{ product?.title }}</h3>
      <div v-if="product.rating">
        <star-rating 
        class="leading-5"
        v-model:rating="rating" 
        :read-only="true" 
        :increment="0.5" 
        active-color="#FE7300"
        :star-size="15"
        :show-rating="false"></star-rating>
      </div>
      <p class="swiper-no-swiping text-lg font-semibold text-[#6251DD] leading-5">{{ product?.price }} so'm</p>
      <div class="flex gap-[8px] justify-between h-[35px] text-white">
        <button class="select-none h-full bg-[#6251DD] flex-grow rounded-[8px]">Harid qilish</button>
        <button class="select-none w-[50px] h-full bg-[#EF6B4A] rounded-[8px] flex justify-center items-center">
          <CartIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref } from "vue";
import StarRating from 'vue-star-rating'
import CartIcon from '@/components/icons/CartIcon.vue'

import SkeletonLoader from "../Loader/SkeletonLoader.vue";
const props = defineProps(['product'])
const { product } = toRefs(props)

const rating = ref(3)
</script>