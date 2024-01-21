<template>
  <div id="tableParent" class=" relative overflow-x-auto shadow-md h-max">
    <slot :name="`cell(navbar)`"></slot>
    
    <table class="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead v-if="headTable?.length" class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 left-0 z-10">
        <tr class="select-none">
          <th scope="col" class="flex p-4 sticky top-0 left-0">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox" class="w-5 h-5 tableInput">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th v-for="list in headTable" :key="list?.id" scope="col" class="pr-6 pl-2 py-3">
            <div 
              @click="list?.sort?.category ? sortTable(list?.sort?.category) : ''"
              class="flex gap-1 cursor-pointer"
            >
              <svg 
                v-if="list?.sort"
                class="v-icon__svg h-4" 
                :class="{'fill-gray-400': list?.sort?.category !== sorted?.category}"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
              >
                <path 
                  v-if="list?.sort?.category === sorted?.category"
                  :d="!sorted?.default? 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z' : 'M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z'"
                ></path>
                <path v-else d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
              </svg>

              <span>{{ list.label }}</span>
            </div>
          </th>

          <th class="flex px-6 py-4 h-full sticky top-0 right-0 bg-white border-l border-l-gray-300">
            Action
          </th>
        </tr>
      </thead>
      <tbody v-if="!loading && bodyTableSorted?.length">
        <tr 
          v-for="list in bodyTableSorted" :key="list?.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="flex h-full p-4 sticky top-0 left-0">
              <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 tableInput">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <td 
              v-for="item in displayedFieldKeys" :key="item"
              scope="row" :class="{'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white': item?.main}"
            >
              <slot
                :name="`cell(${item})`"
                :value="list[item]"
                :item="list"
              >
                {{ list[item] }}
              </slot>
            </td>
            
            <slot :name="`cell(action)`" :item="list"></slot>
        </tr>
      </tbody>
    </table>
    <div v-if="loading || !bodyTableSorted?.length" class="flex justify-center border mx-auto h-full py-4">
      <!-- Loading -->
      <SpinnerLoader :c="`#666`"/>
    </div>
    <div v-show="bodyTableSorted?.length"
    class="flex items-center flex-column flex-wrap gap-3 overflow-x-auto md:flex-row justify-between px-4 py-2 sticky bottom-0 left-0 bg-white border-t border-t-gray-300 h-max" aria-label="Table navigation">
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400 block w-full md:inline md:w-auto">
        Showing
        <span class="font-semibold text-gray-900 dark:text-white">
          {{ showPage }}
        </span>
        of
        <span class="font-semibold text-gray-900 dark:text-white">{{ bodyTableSorted.length }}</span>
      </span>
      <PaginationComp 
        @change="changePage($event)"
        :current-page="currentPage"
        :page-length="dataLength"
        :page-limit="pageLimit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, onMounted, computed, watch } from "vue";
import PaginationComp from "@/components/PaginationComp.vue";
import SpinnerLoader from "@/components/Loader/SpinnerLoader.vue";

const props = defineProps({
  headTable: Array,
  bodyTable: Array,
  dataLength: Number,
  loading: {
    type: Boolean,
    default: false
  }
})
let { headTable, bodyTable, dataLength } = toRefs(props)

const emit = defineEmits(['change'])

let bodyTableSorted = ref([])

watch(() => bodyTable.value, (newValue) => {
  bodyTableSorted.value = newValue
});

onMounted(() => {
  // Table height
  const tableParent = document.getElementById('tableParent')
  const routerParent = document.getElementById('routerParent')?.style?.paddingTop
  const paddingTop = [...routerParent].filter(item => +item.trim()).join('')

  tableParent.style.maxHeight = `${window.innerHeight - paddingTop}px`
  window.onresize = () => {
    tableParent.style.maxHeight = `${window.innerHeight - paddingTop}px`
  }
})

let sorted = ref({
  condition: false,
  category: undefined,
  default: false
})

function sortTable(ct) {
  const list = [...bodyTable.value];
  const isSameCategory = sorted.value.category === ct;
  const isDefault = sorted.value.default;
  bodyTableSorted.value = list.sort((a, b) => {
    if (isSameCategory && isDefault) {
      // console.log('three');
      return a.id - b.id
    } else if (isSameCategory) {
      // console.log('two');
      if (typeof a[ct] === 'number' && typeof b[ct] === 'number') {
        return b[ct] - a[ct]
      } else {
        return b[ct].localeCompare(a[ct])
      }
    } else {
      // console.log('one');
      if (typeof a[ct] === 'number' && typeof b[ct] === 'number') {
        return a[ct] - b[ct]
      } else {
        return a[ct].localeCompare(b[ct])
      }
    }
  });

  sorted.value.category = isSameCategory && isDefault ? undefined : ct;
  sorted.value.default = isSameCategory && !isDefault ? true : false;

  // console.log(isSameCategory && isDefault ? 'three' : isSameCategory ? 'two' : 'one');
}

// Pagination
let currentPage = ref(1);
let pageLimit = ref(20);

function changePage(e) {
  if (currentPage.value !== e) {
    currentPage.value = e
    emit('change', currentPage.value)
  }
}

const displayedFieldKeys = computed(() => {
  return Object.entries(headTable.value).map(([_key, value]) => value.key)
})
const showPage = computed(() => {
  if (currentPage.value === 0 || pageLimit.value === 0 ) {
    return null
  }
  return `${(currentPage.value * pageLimit.value - pageLimit.value) + 1} - ${currentPage.value * pageLimit.value}`
})
</script>

<style lang="css">
.tableInput {
  @apply text-blue-600 bg-gray-100 border-gray-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer
}
</style>