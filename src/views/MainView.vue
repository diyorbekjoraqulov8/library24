<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/Header/NavbarComp.vue";
import MobileMenu from "../components/Header/MobileMenu.vue";
</script>

<template>
  <div class="relative">
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
    </main>

    <!-- Mobile menu -->
    <MobileMenu />
  </div>
</template>