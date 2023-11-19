<template>
  <div id="tableParent" class="relative overflow-x-auto shadow-md sm:rounded-lg h-full">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead v-if="headerList?.length" class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
        <tr>
          <th scope="col" class="flex p-4 sticky top-0 left-0 bg-white ">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th v-for="list in headerList" :key="list?.id" scope="col" class="w-max px-2 py-3">
            <div 
              @click="$emit('sortTable',list?.sort?.category)"
              class="flex gap-1 cursor-pointer"
            >
              <svg 
                v-if="list?.sort"
                class="v-icon__svg h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
              >
                <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
                <!-- <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path> -->
              </svg>

              <span>{{ list.text }}</span>
            </div>
          </th>

          <th class="flex px-6 py-4 h-full sticky top-0 right-0 bg-white border-l border-l-gray-300">
            Action
          </th>
        </tr>
      </thead>
      <tbody v-if="bodyList?.length">
        <tr 
          v-for="list in bodyList" :key="list?.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="flex h-full p-4 sticky top-0 left-0 bg-white">
              <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <td 
              v-for="item in list" :key="item"
              scope="row" :class="{'px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white': item?.main}"
            >
              <span v-if="item !== 'id'">
                {{ item }}
              </span>
            </td>
            
            <td class="flex items-center p-4 sticky top-0 right-0 bg-white border-l border-l-gray-300">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Edit
              </button>

              <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
              <!-- <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a> -->
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { toRefs, onMounted } from "vue";

const props = defineProps({
  headerList: Array,
  bodyList: Array
})
const { headerList, bodyList } = toRefs(props)

onMounted(() => {
  // Table height
  const tableParent = document.getElementById('tableParent')
  const routerParent = document.getElementById('routerParent')?.style?.paddingTop
  const paddingTop = [...routerParent].filter(item => +item.trim()).join('')

  tableParent.style.height = `${window.innerHeight - paddingTop}px`
  window.onresize = () => {
    tableParent.style.height = `${window.innerHeight - paddingTop}px`
  }
})

function flagObject(data) {
  // return data.
  data.value.forEach(obj => {
    Object.defineProperty(obj, "id", {
      enumerable: false
    });
  });
}
flagObject(bodyList)

</script>