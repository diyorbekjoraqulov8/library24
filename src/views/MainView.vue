<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from "@/components/Header/NavbarComp.vue";
import MobileMenu from "../components/Header/MobileMenu.vue";
</script>

<template>
  <div class="relative">
    <nav id="navbar" 
    class="bg-white border-b border-b-gray-300">
      <Navbar/>
    </nav>
    <main>
      <RouterView />
    </main>

    <!-- Mobile menu -->
    <MobileMenu />
  </div>
</template>