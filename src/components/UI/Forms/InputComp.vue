<template>
  <div 
    class="flex w-full"
    :style="`
      max-width: ${width};
      height: ${height};
    `">
    <input 
      :id="id"
      min="0"
      :maxlength="max"
      :minlength="min"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      class="inputClass inputNumber block w-full h-full"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :class="`${roundedSize} ${font == 'sm' ? 'text-sm': font == 'base' ? 'text-base' : ''} ${error ? '!border-red-500': ''} ${disabled ? 'bg-gray-200': ''} ${!inputComputed && !isFocused ? 'bg-input-bg-color': ''}
      `"
      :type="inputType"
      v-model="inputComputed"
    >
    <span v-if="withButton"
    class="inline-flex items-center px-3 text-base text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 select-none"
    :class="`${rounded == 'md' ? 'rounded-e-[6px]': rounded == 'lg' ? 'rounded-e-[8px]' : 'rounded-e-[4px]'}`">
      sum
    </span>
  </div>
</template>

<script setup>
import { inject, toRefs, ref, computed } from 'vue'

const emit = defineEmits(['update:input']);
const props = defineProps({
  inputType: String,
  withButton: String || Boolean,
  input: [String, Number],
  error: String,
  width: {
    type: String,
    default: '300px'
  },
  height: {
    type: String,
    default: '44px'
  }
})
const { inputType, withButton, input, error, height } = toRefs(props)

const id = inject('id')
const font = inject('font')
const rounded = inject('rounded')
const min = inject('min')
const max = inject('max')
const required = inject('required')
const disabled = inject('disabled')
const placeholder = inject('placeholder')

let isFocused = ref(false)
const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
})

const roundedSize = computed(()=> {
  let arg = rounded
  if (withButton.value) {
    return arg == 'sm' ? 'rounded-[4px] rounded-e-[0px]': arg == 'lg' ? 'rounded-[8px] rounded-e-[0px]' : 'rounded-[6px] rounded-e-[0px]'
  } else {
    return arg == 'sm' ? 'rounded-[4px]': arg == 'lg' ? 'rounded-[8px]' : 'rounded-[6px]'
  }
})
</script>