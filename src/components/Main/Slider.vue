<template>
  <div  class="mx-auto max-w-[1350px] px-[15px] sm:px-6 lg:px-8">
    <swiper-container
      :loop="true"
      :autoplay="{
        delay: 6000,
      }"
      :effect="'fade'"
      :pagination="{
         clickable: true,
      }"
      swiper-pagination-bullet-active="w-8"
    >
      <swiper-slide v-for="item of slideText">
        <div class="w-full flex items-center overflow-hidden h-auto relative rounded-lg bg-cover bg-no-repeat">
          <img class="w-full object-cover h-full" :src="item.pic" alt="Books...">
          <h1
            class="absolute sm:left-10 md:left-14 w-[124px] sm:w-[140px] md:w-[232px] lg:w-[278px] xl:w-[434px] 2xl:w-[464px] text-base sm:text-lg md:text-3xl lg:text-4xl xl:text-[56px] 2xl:text-6xl font-semibold leading-normal sm:leading-[1.5rem] md:leading-[2.5rem] lg:leading-[3.5rem] xl:leading-[4.5rem] 2xl:leading-[6rem]">
            <span class="text-orange-300 font-extrabold">{{ item.text }}</span>
            {{ item.text2 }}
          </h1>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
  const slideText = [
    { pic: "Banner.jpg", text: "25% discount", text2: "all Paulo Coelho books!" },
    { pic: "Banner-3.jpg", text: "ARM", text2: "all Paulo Coelho books!" },
    { pic: "Banner-2.jpg", text: "25% discount", text2: "all Paulo Coelho books!" },
  ]
</script>

<style>
swiper-container::part(pagination) {
  position: static;
  margin-top: 10px;
}
swiper-container::part(bullet-active) {
  background-color: #EF6B4A;
}
</style>