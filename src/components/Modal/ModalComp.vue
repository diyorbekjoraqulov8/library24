<template>
  <div id="modalComp" class="w-full relative p-4 max-h-full mx-auto overflow-y-auto h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow-xl dark:bg-gray-700 flex flex-col max-h-full h-max border border-gray-400">
      <!-- Modal header -->
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <!-- <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Sign in to our platform
        </h3> -->
        <slot :name="`cell(header)`"></slot>
        <button @click="closeModal()"
        type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <!-- <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg> -->

          <CloseIcon class="w-3 h-3" />

          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4 md:p-5 overflow-y-auto h-max">
        <slot></slot>

        <slot :name="`cell(footer)`"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, onMounted } from "vue";
import CloseIcon from '@/components/icons/CloseIcon.vue'
const props = defineProps({
  width: {
    type: String,
    default: '500px'
  },
  modal: Object
})
const { width, modal } = toRefs(props)

onMounted(() => {
  const modalComp = document.getElementById('modalComp')
  modalComp.style.maxWidth = width.value
})

function closeModal() {
  modal.value.open = false
  modal.value.type = null
}
</script>