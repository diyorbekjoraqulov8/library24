<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/Header/NavbarComp.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
</template>