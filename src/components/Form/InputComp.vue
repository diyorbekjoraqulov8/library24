<template>
  <div>
    <input 
      v-if="inputType != 'textarea'"
      :id="id"
      :maxlength="max"
      :minlength="min"
      :required="required"
      :disabled="disabled || false"
      class="
      w-full
      text-gray-800
      border
      text-sm
      border-[#EFF0EB]
      rounded-lg
      p-3
      placeholder-gray-500
      focus:outline-none
      xl:p-3.5
      " 
      @focus="isFocused = true"
      @blur="isFocused = false"
      :class="
          {'border-gray-900': isFocused},
          {'border-red-500': error},
          {'bg-gray-200': disabled},
          {'bg-input-bg-color': inputComputed && !isFocused}
      "
      :type="inputType"
      v-model="inputComputed"
      autocomplete="off"
    >
    <textarea
      v-else
      :id="id"
      :required="required"
      :maxlength="max"
      :disabled="disabled || false"
      class="
          block
          w-full
          bg-white
          text-gray-800
          border
          text-sm
          border-[#EFF0EB]
          rounded-lg
          min-h-[70px]
          max-h-[170px]
          p-3
          placeholder-gray-500
          focus:outline-none
      " 
      @focus="isFocused = true"
      @blur="isFocused = false"
      :class="
          {'border-gray-900': isFocused},
          {'border-red-500': error}
      "
      :type="inputType"
      v-model="inputComputed"
      autocomplete="off"
    >
    </textarea>
    <span v-if="error" class="text-red-500 text-[14px] font-semibold">
        {{ error }}
    </span>
  </div>
</template>

<script setup>
import { ref, computed, toRefs } from "vue";
const emit = defineEmits(['update:input']);
const props = defineProps(['input', 'inputType', 'error', 'required', 'id','min'])
const { input, max, inputType, error, required, disabled, id, min } = toRefs(props)
let isFocused = ref(false)
const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
})
</script>