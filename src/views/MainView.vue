<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from "@/components/Header/NavbarComp.vue";
import MobileMenu from "@/components/Header/MobileMenu.vue";
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore()
let navbarSticky = ref(false)

onMounted(() => {
  authStore.init()

  // Navbar scroll
  let navbar = document.getElementById("navbar")
  let newProductsTitle = document.getElementById("newProductsTitle")
  
  window.onscroll = () => {
    navbarSticky.value = window.scrollY > navbar.clientHeight

    // New Products page title style
    newProductsTitle.style.top = `${navbar.clientHeight}px`
  }
})

</script>

<template>
  <div class="relative">
    <nav id="navbar" 
    class="bg-white border"
    :class="{'sticky top-0 left-0 z-[11]': navbarSticky}">
      <Navbar/>
    </nav>
    <main>
      <RouterView />
    </main>

    <!-- Mobile menu -->
    <MobileMenu />
  </div>
</template>