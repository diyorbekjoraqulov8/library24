<template>
  <div>
    <div class="flex items-center justify-center w-full">
      <label :for="id" class="relative flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden"
      :class="`
        ${rounded == 'md' ? 'rounded-[6px]': rounded == 'lg' ? 'rounded-[8px]' : 'rounded-[4px]'}
      `"
      :style="`
        max-width: ${width};
        height: ${height};
      `">
        <img id="previewImg" src="#" alt="Kitob rasmi" class="absolute top-0 left-0 w-full h-full object-cover">
        <div class="flex flex-col items-center justify-center pt-5 pb-6 z-10">
            <svg class="w-6 h-6 mb-2 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="text-xs text-black dark:text-gray-400">SVG, PNG, JPG</p>
        </div>
        <input :id="id" type="file"  @change="handleFiles" value="" class="hidden" />
      </label>
    </div>
  </div>
</template>

<script setup>
import { onMounted, toRefs } from "vue";
const emit = defineEmits(['update:productImg'])
const props = defineProps({
  productImg: Object,
  id: String,
  rounded: String,
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'auto'
  }
})
const { id, productImg } = toRefs(props)

let previewImg;

function handleFiles(event) {
  if (event.target.files[0]) {
    previewImg = document.getElementById('previewImg')
    previewImg.src = URL.createObjectURL(event.target.files[0])
    emit('update:productImg', event.target.files[0])
  }
}

// Mounted
onMounted(() => {
  if (productImg.value) {
    previewImg = document.getElementById('previewImg')
    previewImg.src = productImg.value
  }
})
</script>