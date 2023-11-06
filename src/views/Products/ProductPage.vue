<template>
  <div class="mx-auto max-w-[1350px] px-[15px] pt-4">
      <router-link to="/" class="w-max flex items-center mb-4 gap-2">
        <img src="/Arrow.svg" alt="">
        <p class="leading-5 text-lg ss:text-xl font-semibold">Back home</p>
      </router-link>
      hello
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from 'vue-router';

const curRoute = useRoute();
const paramsId = curRoute?.params?.id;

onMounted(() => {
  if (paramsId) {
    console.log(true);
  } else {
    console.log(false);
  }
})

</script>