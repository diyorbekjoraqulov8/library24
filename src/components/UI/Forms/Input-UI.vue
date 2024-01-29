<template>
  <div class="flex w-full relative shadow-sm max-w-[260px] seven:w-[180px] lg:w-[240px]">
    <!-- {{ stylesComputed }} -->
    <input 
      @keyup.enter="$emit('enter')"
      :type="type" name="price" id="price" 
      class="
        input-ui
        text-sm 
        h-[40px]
        bg-[#F4F4FF]
      "
      :class="dynamicClasses"
      :placeholder="placeholder"
      v-model="inputComputed"
    />
    <button 
    class="input-button absolute inset-y-0 right-0 flex items-center cursor-pointer overflow-hidden">
      <slot :name="`cell(button)`"/>
    </button>
  </div>
  <span v-if="error" class="text-red-500 text-[14px] font-semibold">
    {{ error }}
  </span>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";

const props = defineProps({
  type: String,
  search: String,
  placeholder: String,
  dynamicClasses: String,
  styles: {
    type: Object,
    default: function name() {
      return {
        rounded: 4,
      }
    }
  },
  error: {
    type:Object,
    default:null
  }
})
const emit = defineEmits(['update:search']);

const inputComputed = computed({
  get: () => props.search,
  set: (val) => emit('update:search', val)
})

let stylesComputed = computed(()=>props.styles)

watch(() => stylesComputed.value, (newVal) => {
  let button = document.querySelector('.input-button')
  let inputUi = document.querySelector('.input-ui')
  inputUi.style.borderRadius = `${newVal.rounded}px`
  button.style.borderRadius = `0 ${newVal.rounded}px ${newVal.rounded}px 0`
})

onMounted(() => {
  let button = document.querySelector('.input-button')
  let inputUi = document.querySelector('.input-ui')
  // console.log(stylesComputed.value);
  setTimeout(() => {
    if (button.clientWidth) {
      inputUi.style = `padding-right: ${button.clientWidth}px;`
    }
    inputUi.style.borderRadius = `${stylesComputed.value.rounded}px`
    button.style = `border-radius: 0 ${stylesComputed.value.rounded}px ${stylesComputed.value.rounded}px 0;`
  }, 0);
})
</script>