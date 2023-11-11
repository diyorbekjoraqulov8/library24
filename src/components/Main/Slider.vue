<template>
  <div class="mx-auto max-w-[1350px] px-[15px]">
    <swiper 
      :spaceBetween="30"
      :effect="'fade'"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in slideText">
        <div :class="`bg-[url('${item.url}')]`, 'w-full h-auto py-12 px-6 md:py-20 md:px-12 lg:py-24 lg:px-16 xl:py-[86px] rounded-lg bg-cover bg-no-repeat'" class="">
          <!-- <img :src="item.url" alt=""> -->
          <h1 class="w-[124px] sm:w-[140px] md:w-[232px] lg:w-[278px] xl:w-[434px] 2xl:w-[464px] text-base sm:text-lg md:text-3xl lg:text-4xl xl:text-[56px] 2xl:text-6xl font-semibold leading-normal sm:leading-[1.5rem] md:leading-[2.5rem] lg:leading-[3.5rem] xl:leading-[4.5rem] 2xl:leading-[6rem]">
            <span class="text-orange-300 font-extrabold">{{ item.text }}</span>
            {{ item.text2 }}
          </h1>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';



export default {
  data() {
    return {
       slideText: [
            {url: "/Banner.jpg", text: "25% discount", text2: "all Paulo Coelho books!"},
            {url: "https://swiperjs.com/demos/images/nature-3.jpg", text: "25% discount", text2: "all Paulo Coelho books!"},
            {url: "https://swiperjs.com/demos/images/nature-1.jpg", text: "25% discount", text2: "all Paulo Coelho books!"},
          ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination, Autoplay],
    };
  },
};
</script>

<style>
.swiper-pagination {
  position: static;
  margin-top: 10px;
}
.swiper-pagination-bullet {
  background-color: #EF6B4A;
}
</style>