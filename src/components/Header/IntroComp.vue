<template>
  <div 
    class="h-[170px] min-[400px]:h-[230px] min-[600px]:h-[260px] min-[800px]:h-[320px] min-[1000px]:h-[360px] min-[1200px]:h-[400px]
    mx-auto max-w-[1350px] px-[15px]"
  >
    <Swiper 
    class="rounded-[8px] select-none"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      dynamicBullets: true,
      clickable: true,
    }"
    :navigation="true"
    :effect="'fade'"
    :slides="slides"
    :keyboard="true"
    :modules="modules"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.img">
        <img :src="slide.img" alt="Intro img" class="block w-full h-full object-cover">
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

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
