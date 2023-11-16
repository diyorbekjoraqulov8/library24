<template>
  <div class="mx-auto max-w-[1350px] px-[15px] py-4">
    <h2 class="mb-4 font-manrope leading-6 text-xl font-bold"># Best Seller</h2>
    <div
    v-if="!mainStore.products?.length"
    class="grid gap-x-[5px] gap-y-10 grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-y-[12px]">
      <div v-for="index in 5" :key="index">
        <div class="w-full flex flex-col justify-center p-[14px] border border-[#e5e7eb] bg-white rounded-[6px]">
          <div class="w-full h-[180px] mx-auto">
            <LoaderComp />
          </div>
          <div class="w-full flex flex-col gap-[14px] mt-[14px]">
            <div class="w-5/6 h-[30px]">
              <LoaderComp />
            </div>
            <div class="w-3/5 h-[24px]">
              <LoaderComp />
            </div>
            <div class="w-3/4 h-[20px]">
              <LoaderComp />
            </div>
            <div class="w-full h-[32px] flex gap-[10px]">
              <div class="flex-grow h-full">
                <LoaderComp class="rounded-md"/>
              </div>
              <div class="w-1/5 h-full">
                <LoaderComp class="rounded-md"/>
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
</template>

<script setup>
import { onMounted } from "vue";
import Product from "@/components/UI/ProductComp.vue";
import { useCounterStore } from '@/stores/counter.js';
import LoaderComp from '@/components/LoaderComp.vue';

const mainStore = useCounterStore()

</script>