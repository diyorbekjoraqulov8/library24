<template>
  <div class="h-[100vh]">
    <NavbarAdmin @openMenu="mobileMenu = !mobileMenu"/>

    <SidebarView 
      @currentPage="currentPage = $event"
      :mobileMenu="mobileMenu"
      :menu="store.menu"
      :currentPage="currentPage"
    />

    <div id="routerParent" class="p-4 sm:ml-64 h-full" style="padding-top: 72px;">
      <RouterView class="h-full"/>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView, useRoute } from 'vue-router';
import NavbarAdmin from "./NavbarAdmin.vue";
import SidebarView from "./SidebarView.vue";
import { useAdminStore } from "@/stores/admin.js";

const store = useAdminStore()
const route = useRoute()
let currentPage = ref(route?.name)
let mobileMenu = ref(false)

/* Methods */

</script>