<!-- <template>
  <nav class="mx-auto max-w-[1350px] px-[15px] pt-4 py-8 flex items-center justify-between">
    <div class="w-16">
      <router-link to="/">
        <img class="w-full" src="/logo.svg" alt="Logo">
      </router-link>
    </div>
    <form @submit.prevent class="w-3/5">
      <div class="relative bg-violet-50 rounded">
        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <img src="/search.svg">
        </div>
        <input type="search"
          class="block w-full pl-14 pr-6 py-2.5 outline-none text-lg text-gray-900 rounded bg-transparent border border-transparent focus:border-blue-200"
          placeholder="Search">
      </div>
    </form>
    <div class="flex items-center justify-between w-44">
      <Menu as="div" class="relative">
        <MenuButton class="relative flex items-center justify-center p-3 cursor-pointer bg-violet-50 active:bg-violet-100 rounded">
          <img class="h-6 w-6 opacity-70" src="/person.svg" alt="">
        </MenuButton>
        
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-black/5 focus:outline-none">
            <MenuItem v-slot="{ active }">
              <router-link to="/login" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign in</router-link>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
      
      <button class="flex items-center justify-center p-3 cursor-pointer bg-violet-50 active:bg-violet-100 rounded">
        <img class="h-6 w-6 opacity-70" src="/heart.svg" alt="">
      </button>
      <button class="flex items-center justify-center p-3 cursor-pointer bg-violet-50 active:bg-violet-100 rounded">
        <img class="h-6 w-6 opacity-70" src="/cart.svg" alt="">
      </button>

      
    </div>
  </nav>
</template>

<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
  
</script> -->


<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="flex items-center justify-between
    seven:hidden px-4 py-3 ss:py-5 ss:px-6 border-b border-b-gray-300">
      <a href="">
        <img src="/phone.svg" class="h-6" alt="">
      </a>

      <router-link to="/">
        <img src="/logo.svg" class="h-9" alt="">
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
            <Bars3Icon v-if="!open" class="block h-7 w-7" aria-hidden="true" />
            <XMarkIcon v-else class="block h-7 w-7" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden seven:flex flex-1 items-center justify-center seven:items-stretch seven:justify-start">
          <router-link to="/" class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="/logo.svg" alt="Your Company" />
          </router-link>
          <div class="sm:ml-6">
            <div class="flex space-x-4">
              <div v-for="item in navigation" :key="item.name" :class="[item.current ? 'bg-[#F4F4FF] text-[#333]' : 'text-[#333] hover:bg-[#F4F4FF]', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                <router-link v-if="item?.path" :to="item.path">{{ item.name }}</router-link>
                <a v-else :href="item.href">{{ item.name }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="min-[900px]:absolute inset-y-0 right-0 flex items-center gap-6 pr-2 max-[600px]:gap-1 sm:pr-0">
          <div class="relative shadow-sm max-w-[260px] seven:w-[180px] lg:w-[240px]">
            <input type="text" name="price" id="price" 
            class="
            rounded-[4px] 
            border-0 
            py-1.5 
            pl-3 
            pr-8 
            text-black 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-500 
            focus:ring-inset 
            focus:outline-none
            text-sm 
            leading-6 
            h-[40px]
            seven:h-[44px]
            bg-[#F4F4FF]
            focus:ring-gray-600
            focus:bg-[#f4f4ff00]
            w-full" 
            placeholder="Search..." />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              <img src="/search.svg" class="h-2/5" alt="">
            </div>
          </div>

          <button type="button" class="hidden min-[900px]:block relative rounded-[4px] bg-[#F4F4FF] p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white">
            <span class="sr-only">View notifications</span>
            <img src="/cart.svg" class="w-6 h-6" alt="">
          </button>

          <button type="button" class="hidden min-[900px]:block relative rounded-[4px] bg-[#F4F4FF] p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white">
            <span class="sr-only">View notifications</span>
            <img src="/heart.svg" class="w-6 h-6" alt="">
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative hidden min-[900px]:block">
            <div>
              <MenuButton class="relative flex rounded-[4px] bg-[#F4F4FF] text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:ring-offset-white p-2.5">
                <span class="sr-only">Open user menu</span>
                <!-- <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> -->

                <img src="/person.svg" class="h-6" alt="">
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
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
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Products', path: '/products', current: true },
  { name: 'Contacts', href: '#contact', current: false },
  { name: 'About', path: '/about', current: false },
  { name: 'Calendar', path: '#', current: false },
]
</script>