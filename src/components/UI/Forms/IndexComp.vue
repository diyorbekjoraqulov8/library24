<template>
  <TextareComp v-if="inputType == 'textarea'" 
    :inputType="inputType"
    v-model:input="inputComputed"
    :error="error"
    :height="height"
  />

  <InputComp v-else 
    :inputType="inputType"
    :withButton="withButton"
    v-model:input="inputComputed"
    :error="error"
    :width="width"
    :height="height"
  />
  <span v-if="error" class="text-red-500 text-[14px] font-semibold">
    {{ error }}
  </span>
</template>

<script setup>
import { computed, toRefs, provide } from "vue";
import TextareComp from "@/components/UI/Forms/TextareComp.vue";
import InputComp from "@/components/UI/Forms/InputComp.vue";

const emit = defineEmits(['update:input']);
const props = defineProps({
  id: String,
  font: {
    type: String,
    default: 'sm'
  },
  input: [String, Number],
  min: {
    type: Number,
    default: 1
  },
  max: {
    type: Number,
    default: 100
  },
  inputType: {
    type: String,
    default: 'text'
  },
  error: String,
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },

  placeholder: String,
  rounded: String,
  withButton: String || Boolean,
  width: String,
  height: String
})
const { input, min, max, inputType, error, required, disabled, id, font, rounded, placeholder, withButton, height } = toRefs(props)

provide('id', id.value)
provide('font', font.value)
provide('rounded', rounded.value)
provide('min', min.value)
provide('max', max.value)
provide('required', required.value)
provide('disabled', disabled.value)
provide('placeholder', placeholder.value)

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
})
</script>