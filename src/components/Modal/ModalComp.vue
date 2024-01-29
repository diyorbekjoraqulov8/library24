<template>
  <TransitionGroup name="top">
    <div v-if="modal?.open" class="bg-[#6c6b6b28] w-[100vw] h-[100vh] fixed top-0 left-0 z-[50]">
      <div v-bind="$attrs" id="modalComp" class="w-full relative p-4 max-h-full mx-auto overflow-y-auto h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-xl dark:bg-gray-700 flex flex-col max-h-full h-max border border-gray-400">
          <!-- Modal header -->
          <div class="flex items-center justify-between px-4 py-3 md:py-3 md:px-4 border-b rounded-t dark:border-gray-600">
            <slot :name="`cell(header)`"></slot>
            <button @click="closeModal()"
            type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <CloseIcon class="w-3 h-3" />

              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 overflow-y-auto h-max">
            <slot></slot>

            <div class="flex justify-end gap-2 mt-4">
              <slot :name="`cell(footer)`"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup>
import { toRefs, onMounted } from "vue";
import CloseIcon from '@/components/icons/CloseIcon.vue'
const props = defineProps({
  modal: {
    type:Object,
    default:{}
  }
})
const { modal } = toRefs(props)

function closeModal() {
  modal.value.open = false
  modal.value.type = null
}
</script>