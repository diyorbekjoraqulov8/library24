<template>
  <Disclosure as="nav" v-slot="{ open }">
    <!-- navbar top -->
    <div class="flex items-center justify-between 
    seven:hidden px-4 py-3 ss:py-5 ss:px-6 border-b border-b-gray-300">
      <a href="">
        <PhoneIcon class="h-6 opacity-70" />
      </a>

      <router-link to="/">
        <img src="/logo.svg" class="h-9" />
      </router-link>

      <div>
        lang
      </div>
    </div>
    
    <div class="mx-auto max-w-[1350px] px-[15px] sm:px-6 lg:px-8">
      <div class="relative flex h-max py-3 seven:py-5 items-center justify-between">
        <div class="inset-y-0 left-0 flex items-center seven:hidden">
          <!-- Mobile menu button -->
          
          <DisclosureButton class="text-black relative inline-flex items-center justify-center rounded-md p-2 hover:bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>

            <BarsIcon v-if="!open" class="block h-7 w-7" aria-hidden="true" />
            <CloseIcon v-else class="block h-7 w-7" aria-hidden="true" />

          </DisclosureButton>
        </div>
        <div class="hidden seven:flex flex-1 items-center justify-center seven:items-stretch seven:justify-start">
          <router-link to="/" class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="/logo.svg" alt="Your Company" />
          </router-link>
          <div class="sm:ml-6">
            <div class="flex space-x-4">
              <router-link 
                v-for="item in navigation" :key="item.name" 
                :class="[item.current ? 'bg-[#F4F4FF] text-[#333]' : 'text-[#333] hover:bg-[#F4F4FF]', 'rounded-md px-3 py-2 text-sm font-medium']" 
                :aria-current="item.current ? 'page' : undefined"
                :to="item.path"
              >
                <p>{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </div>
        <div class="min-[900px]:absolute inset-y-0 right-0 flex items-center gap-6 pr-2 max-[600px]:gap-1 sm:pr-0">
          <base-input 
            v-model:value="search"
            @enter="searchProduct(search)"
            class="rounded-r-none" 
            placeholder="Mahsulotni qidirish..."
          >
            <template #cell(append)>
              <button 
              @click="searchProduct(search)"
              class="px-2 bg-[var(--purple)] rounded-r-[4px]">
                <SearchIcon class="h-2/5 text-white" />
              </button>
            </template>
          </base-input>

          <router-link
          to="/cart"
          class="navbarPage">
            <CartIcon class="w-6 h-6 opacity-70" />
            <p>Savatcha</p>
          </router-link>

          <router-link
          to="/like"
          class="navbarPage">
            <HeartIcon class="h-6 w-6" />
            <p>Savatcha</p>
          </router-link>

          <div 
            @click="authModal.open = true"
            class="navbarPage cursor-pointer">
            <PersonIcon class="h-6 w-6" 
          />
            <p>Kirish</p>
          </div>
          <!-- Profile dropdown -->
          <!-- <Menu as="div" class="relative hidden min-[900px]:block">
            <div>
              <MenuButton 
              v-if="store?.user?.id"
              class="relative flex rounded-[4px] bg-[#F4F4FF] text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:ring-offset-white p-2.5 select-none">
                <span class="sr-only">Open user menu</span>
                <PersonIcon class="h-6 w-6" />
              </MenuButton>

              <router-link 
              v-else
              to="/login"
              class="relative flex rounded-[4px] bg-[#F4F4FF] text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:ring-offset-white p-2.5 select-none">
                <SignInIcon class="h-6 w-6 opacity-70" />
              </router-link>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <router-link to="/profil" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                    Your Profile
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button 
                  @click="logout()"
                  class="block w-full text-left"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu> -->
        </div>
      </div>
    </div>

    <DisclosurePanel class="seven:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-[#F4F4FF] text-[#333]' : 'text-[#333] hover:bg-[#F4F4FF]', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
          <router-link v-if="item.path" :to="item.path">{{ item.name }}</router-link>
          <a v-else :href="item.href">{{ item.name }}</a>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <modal-comp :modal="authModal" class="max-w-[400px]">
    <template #cell(header)>
      Login
    </template>
    <form>
      <div class="flex flex-col gap-2">
        <BaseInput class="w-full h-[40px]" placeholder="Email kiriting"/>
        <BaseInput class="w-full h-[40px]" placeholder="Parol kiriting"/>
      </div>
    </form>
    <template #cell(footer)>
      <common-btn type="alternative">
        Bekor qilish
      </common-btn>
      <common-btn>
        Saqlash
      </common-btn>
    </template>
  </modal-comp>
</template>

<script setup>
import { ref, computed } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import BarsIcon from "@/components/icons/BarsIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import CartIcon from "@/components/icons/CartIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import PersonIcon from "@/components/icons/PersonIcon.vue";
import SignInIcon from "@/components/icons/SignInIcon.vue";
import BaseInput from "../../components/BaseComponents/BaseInput.vue";
import ModalComp from "@/components/Modal/ModalComp.vue";
import CommonBtn from "../../components/buttons/CommonBtn.vue";


import { useAuthStore } from "@/stores/auth.js";
import { useRouter, useRoute } from 'vue-router';

const authModal = ref({
  loading:false,
  open:false,
  type:null
})

import InputUi from "@/components/UI/Forms/Input-UI.vue";

const store = useAuthStore()
const router = useRouter()
const route = useRoute()

const search = ref('')

async function logout() {
  await store.logout()

  router.push('/')
}

const navigation = computed(() => [
  { name: 'Products', path: '/products', current: route.name === 'products' },
  { name: 'Contacts', path: '#contact', current: false },
  { name: 'About', path: '/about', current: route.name === 'about' },
  { name: 'Calendar', path: '/', current: route.name === 'calendar' },
])

function searchProduct(text) {
  console.log(text);
}
</script>

<style lang="css">
.navbarPage {
  @apply text-xs flex flex-col items-center
}
</style>