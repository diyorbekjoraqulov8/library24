<template>
  <div 
    class="h-[170px] min-[400px]:h-[230px] min-[600px]:h-[260px] min-[800px]:h-[320px] min-[1000px]:h-[360px] min-[1200px]:h-[400px]
    mx-auto max-w-[1350px] px-[15px]"
  >
    <SwiperComp 
    class="rounded-[8px]"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      dynamicBullets: true,
      clickable: true ,
    }"
    :navigation="true"
    :effect="'fade'"
    :slides="slides"
    :keyboard="true"
    :modules="modules"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
// Import Comp
import SwiperComp from "@/components/swiper/SwiperComp.vue";

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, EffectFade, Autoplay } from 'swiper/modules';

const modules = [Navigation, Pagination, Mousewheel, Keyboard, EffectFade, Autoplay]

const slides = ref([
  {
    img:"/nature-2.jpg"
  },
  {
    img:"/nature-3.jpg"
  },
  {
    img:"/nature-2.jpg"
  },
  {
    img:"/nature-3.jpg"
  }
])

</script>
