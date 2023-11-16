<template>
  <Swiper>
    <SwiperSlide 
    v-for="slide in slides" :key="slide">
      <img :src="slide.img" alt="slide">
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

defineProps(['slides'])
</script>