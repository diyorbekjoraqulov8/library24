<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from "@/components/Header/NavbarComp.vue";
import MobileMenu from "@/components/Header/MobileMenu.vue";
import { useAuthStore } from "@/stores/auth.js";
import { useCounterStore } from "@/stores/counter.js";

const authStore = useAuthStore()
const store = useCounterStore()
let navbarSticky = ref(false)

onMounted(() => {
  authStore.init()

  // Navbar scrol
  let navbar = document.getElementById("navbar")
  store.navbar.height = navbar.clientHeight
  
  window.onscroll = () => {
    console.log(store.navbar.height);
    navbarSticky.value = window.scrollY > store.navbar.height
  }

  window.onresize = () => {
    store.navbar.height = navbar.clientHeight
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