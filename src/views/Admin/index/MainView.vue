<template>
  <div class="h-[100vh]">
    <NavbarAdmin @openMenu="mobileMenu = !mobileMenu"/>

    <SidebarView 
      @currentPage="currentPage = $event"
      :mobileMenu="mobileMenu"
      :menu="adminStore.menu"
      :currentPage="currentPage"
    />

    <div id="routerParent" class="p-4 sm:ml-64 h-full" style="padding-top: 72px;">
      <RouterView class="h-full" :modal="store?.modal"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView, useRoute } from 'vue-router';
import NavbarAdmin from "./NavbarAdmin.vue";
import SidebarView from "./SidebarView.vue";
import { useAdminStore } from "@/stores/admin.js";
import { useCounterStore } from "@/stores/counter.js";

const adminStore = useAdminStore()
const store = useCounterStore()
const route = useRoute()
let currentPage = ref(route?.name)
let mobileMenu = ref(false)

const modal = ref({
  open:false,
  type:null
})

// adminStore.getAuthors()

/* Methods */

</script>