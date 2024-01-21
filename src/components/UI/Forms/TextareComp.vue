<template>
  <textarea
    :id="id"
    :required="required"
    :minlength="min"
    :maxlength="max"
    :disabled="disabled || false"
    class="
      block
      inputClass
    "
    :placeholder="placeholder"
    @focus="isFocused = true"
    @blur="isFocused = false"
    :class="`
      ${rounded == 'md' ? 'rounded-[6px]': rounded == 'lg' ? 'rounded-[8px]' : 'rounded-[4px]'}
      ${font == 'sm' ? 'text-sm': font == 'base' ? 'text-base' : ''}
      ${error ? '!border-red-500': ''}
      ${!inputComputed && !isFocused ? 'bg-input-bg-color': ''}
    `"
    :type="inputType"
    v-model="inputComputed"
    autocomplete="off"
  >
  </textarea>
</template>

<script setup>
import { inject, toRefs, ref, computed } from 'vue'

const emit = defineEmits(['update:input']);
const props = defineProps({
  inputType: String,
  withButton: Boolean,
  input: [String, Number],
  error: String
})

const id = inject('id')
const font = inject('font')
const rounded = inject('rounded')
const min = inject('min')
const max = inject('max')
const required = inject('required')
const disabled = inject('disabled')
const placeholder = inject('placeholder')

const { input } = toRefs(props)
let isFocused = ref(false)
const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
})
</script>