<template>
  <!-- px-4 py-16 sm:px-6 sm:py-10 -->
  <div class="bg-[#F1F4FA]">
    <div class="mx-auto max-w-[1350px] px-[15px] pt-4">
      <router-link to="/" class="w-max flex items-center mb-4 gap-2">
        <img src="/Arrow.svg" alt="">
        <p class="leading-5 text-lg ss:text-xl font-semibold">Back home</p>
      </router-link>
      <div class="mx-auto max-w-xs ss:max-w-[1320px]">
        <div 
        v-if="!mainStore.products?.length"
        class="grid gap-x-[5px] gap-y-10 grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-y-[12px]">
          <div
          v-for="index in 10" :key="index">
            <div class="w-full flex flex-col justify-center p-[14px] border">
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
          </div>
        </div>
        <div 
        v-else
        class="grid gap-x-[5px] gap-y-10 grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-y-[12px]">
          <Product 
          v-for="product in mainStore.products" :key="product.id"
          :product="product"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Product from "@/components/UI/ProductComp.vue";
import { useCounterStore } from '@/stores/counter.js';
import SkeletonLoader from '@/components/Loader/SkeletonLoader.vue';

const mainStore = useCounterStore()

onMounted(() => {
  mainStore.getProducts()
})

</script>