<template>
  <div class="mx-auto max-w-[1350px] px-[15px] py-4 mb-[600px]">
    <h2 
      class="staticProductsTitle flex items-center mb-4 font-manrope leading-6 text-xl font-bold w-max bg-white p-2 pr-4 cursor-pointer sticky left-0 z-10"
    ># Best Seller <ChevronRightIcon class="h-5" /> </h2>

    <div v-if="!mainStore.newProducts?.items?.length">
      <Swiper 
        :navigation="true"
        :keyboard="true"
        :modules="modules"
        :breakpoints="swiperOption.breakpoints"
      >
        <SwiperSlide v-for="index in 5" :key="index">
          <div class="w-full flex flex-col justify-center p-[14px] border border-[#e5e7eb] bg-white rounded-[6px]">
            <div class="w-full h-[180px] mx-auto">
              <SkeletonLoader />
            </div>
            <div class="w-full flex flex-col gap-[14px] mt-[14px]">
              <div class="w-5/6 h-[30px]">
                <SkeletonLoader />
              </div>
              <div class="w-3/5 h-[24px]">
                <SkeletonLoader />
              </div>
              <div class="w-3/4 h-[20px]">
                <SkeletonLoader />
              </div>
              <div class="w-full h-[32px] flex gap-[10px]">
                <div class="flex-grow h-full">
                  <SkeletonLoader class="rounded-md"/>
                </div>
                <div class="w-1/5 h-full">
                  <SkeletonLoader class="rounded-md"/>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div v-else>
      <Swiper 
        :navigation="true"
        :keyboard="true"
        :modules="modules"
        :breakpoints="swiperOption.breakpoints"
      >
        <SwiperSlide v-for="product in mainStore.newProducts?.items" :key="product.id">
          <Product :product="product"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Product from "@/components/UI/ProductComp.vue";
import { useCounterStore } from '@/stores/counter.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SkeletonLoader from '../Loader/SkeletonLoader.vue';

import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";


const mainStore = useCounterStore()

// import required modules
import { Navigation, Mousewheel, Keyboard, EffectFade, Autoplay } from 'swiper/modules';

const modules = [Navigation, Mousewheel, Keyboard, EffectFade, Autoplay]

const swiperOption = {
  breakpoints:{
    0:{
      slidesPerView: 1,
      spaceBetween: 5
    },
    480:{
      slidesPerView: 2,
      spaceBetween: 5
    },
    640:{
      slidesPerView: 3,
      spaceBetween: 5
    },
    1024:{
      slidesPerView: 4,
      spaceBetween: 5
    },
    1280:{
      slidesPerView: 5,
      spaceBetween: 5
    },
  }
}

onMounted(() => {
  mainStore.getNewProducts()
})
</script>