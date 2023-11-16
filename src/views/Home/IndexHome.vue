<template>
  <div class="pt-5 min-[900px]:pt-7">
    <!-- Intro -->
    <IntroComp />

    <div class="bg-[#F1F4FA] mt-4 min-[900px]:mt-6">
      <!-- New Products -->
      <NewProductsComp />
      <!-- Best Seller -->
      <BestSellerComp />
    </div>
  </div>
</template>

<script setup>
import IntroComp from "../../components/Header/IntroComp.vue";
import BestSellerComp from "../../components/Main/BestSellerComp.vue";
import NewProductsComp from "../../components/Main/NewProductsComp.vue";
// import { useAuthStore } from "@/stores/auth.js";

// const authStore = useAuthStore()

</script>