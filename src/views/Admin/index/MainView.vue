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
    <TransitionGroup name="top">
      <div v-if="store?.modal?.open" class="bg-[#6c6b6b28] w-[100vw] h-[100vh] fixed top-0 left-0 z-[50]">
          <ModalComp
            v-if="store?.modal?.open"
            :width="'1100px'"
            :modal="store?.modal"
          >
            <AddAndEditProduct :modal="store?.modal"/>
          </ModalComp>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView, useRoute } from 'vue-router';
import NavbarAdmin from "./NavbarAdmin.vue";
import SidebarView from "./SidebarView.vue";
import { useAdminStore } from "@/stores/admin.js";
import { useCounterStore } from "@/stores/counter.js";
import ModalComp from "@/components/Modal/ModalComp.vue";
import AddAndEditProduct from "@/components/Modal/AddAndEditProduct.vue";

const adminStore = useAdminStore()
const store = useCounterStore()
const route = useRoute()
let currentPage = ref(route?.name)
let mobileMenu = ref(false)

// adminStore.getAuthors()

/* Methods */

</script>