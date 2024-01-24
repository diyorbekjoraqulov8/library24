<template>
  <div id="tableParent" class="relative overflow-x-auto border">    
    <table 
    style="border: 1px solid red;"
    class="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead v-if="header?.length" class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 left-0 z-10">
        <tr class="select-none">
          <th scope="col" class="flex p-4 sticky top-0 left-0">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox" class="w-5 h-5 tableInput">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th v-for="list in header" :key="list?.id" scope="col" class="pr-6 pl-2 py-3">
            {{ list.label }}
          </th>

          <th class="flex px-6 py-4 h-full sticky top-0 right-0 bg-white border-l border-l-gray-300">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="list in data" :key="list?.id"
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
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from "vue";
import SpinnerLoader from "@/components/Loader/SpinnerLoader.vue";

const props = defineProps({
  header: Array,
  data: Array,
  loading: {
    type: Boolean,
    default: false
  }
})
let { header } = toRefs(props)

const data = computed(()=>{
  return props.data
})
const displayedFieldKeys = computed(() => {
  return Object.entries(header.value).map(([_key, value]) => value.key)
})
</script>

<style lang="css">
.tableInput {
  @apply text-blue-600 bg-gray-100 border-gray-400 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer
}
</style>