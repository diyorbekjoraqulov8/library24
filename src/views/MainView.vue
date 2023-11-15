<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from "@/components/Header/NavbarComp.vue";
import MobileMenu from "@/components/Header/MobileMenu.vue";
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore()

onMounted(() => {
  authStore.init()
})

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