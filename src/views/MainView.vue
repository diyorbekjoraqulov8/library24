<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/Header/NavbarComp.vue";
import MobileMenu from "../components/Header/MobileMenu.vue";
import Slider from '../components/Main/Slider.vue';
</script>

<template>
  <div class="relative">
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
      <Slider />
    </main>

    <!-- Mobile menu -->
    <MobileMenu />
  </div>
</template>