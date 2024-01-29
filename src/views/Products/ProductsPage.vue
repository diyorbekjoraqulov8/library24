<template>
  <!-- px-4 py-16 sm:px-6 sm:py-10 -->
  <div class="bg-[#F1F4FA]">
    <div class="mx-auto max-w-[1350px] px-[15px] pt-4">
      <router-link to="/" class="w-max flex items-center mb-4 gap-2">
        <ChevronLeftIcon class="h-6 w-6" />
        <p class="leading-5 text-lg ss:text-xl font-semibold">Back home</p>
      </router-link>
      <div class="mx-auto max-w-xs ss:max-w-[1320px]">
        <div 
        v-if="!products?.length"
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
          v-for="product in products" :key="product.id"
          :product="product"
          @buy="shopProduct($event)"
          />
        </div>        
      </div>
    </div>
  </div>

  <modal-comp :modal="buyModal" class="w-[940px]">
    {{ selectedBook }}
  </modal-comp>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Product from "@/components/UI/ProductComp.vue";
import { useCounterStore } from '@/stores/counter.js';
import axios from "axios";
import SkeletonLoader from '@/components/Loader/SkeletonLoader.vue';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon.vue';
import ModalComp from "@/components/Modal/ModalComp.vue";

const mainStore = useCounterStore()
const products = ref(null)
let selectedBook = ref(null)
const buyModal = ref({
  loading:false,
  open:false,
  type:null
})

async function getProducts() {
  let res = await axios.get('https://library24.onrender.com/library/books/')
  products.value = res.data.results
}

function shopProduct(id) {
  selectedBook.value = id
  buyModal.value.open = true
  buyModal.value.type = 'buy-book'
}

onMounted(() => {
  getProducts()
})

</script>