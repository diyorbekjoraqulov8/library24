<template>
  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar"
  :class="{'translate-x-0': mobileMenu}">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
          <li
            v-for="item in menu" :key="item.id"
          >
            <router-link 
            @click="$emit('currentPage', item?.name)"
            v-if="!item.lists" 
            :to="item.path"
            class="pageBtn"
            :class="{'bg-gray-200': item.name === currentPage}">
              <component :is="item.icon" class="opacity-60"></component>
              <span class="ms-3">{{ item.text }}</span>
            </router-link>

            <!-- <div v-else>
              <button 
              @click="changeOpenBar(item.name, $event)"
              type="button" class="pageBtn w-full text-base transition duration-75" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <DarkCartIcon class="opacity-60" />
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  {{ item.text }}
                </span>
                <ChevronDownIcon class="w-3 h-3"/>

              </button>

              <ul
              id="dropdown-example" class="py-2 space-y-2" 
              :class="{'hidden':openBar !== item.name}">
                <li
                  v-for="list in item.lists" :key="list.id"
                >
                  <router-link 
                    :to="list.path"
                    @click="$emit('currentPage', list?.name)"
                    class="!pl-11 pageBtn w-full transition duration-75 "
                    :class="{'bg-gray-200': list?.name === currentPage}">
                      {{ list.text }}
                    </router-link>
                </li>
              </ul>
            </div> -->
            
          </li>
        </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref, toRefs } from "vue";
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue'
import PieIcon from '@/components/icons/PieIcon.vue'
import DarkCartIcon from '@/components/icons/DarkCartIcon.vue'


const props = defineProps({
  mobileMenu: Boolean,
  menu: Object,
  currentPage: String
})
const { mobileMenu, menu } = toRefs(props)

let openBar = ref('')

/* Methods */

function changeOpenBar(name) {
  if (openBar.value == name) {
    openBar.value = ''
  } else {
    openBar.value = name
  }
}
</script>

<style lang="css">
.pageBtn {
  @apply flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ;
}
</style>