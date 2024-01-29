<template>
  <div class="flex w-full h-max relative shadow-sm">
    <slot :name="`cell(prepend)`"/>
    <input 
      @input="$emit('update:value',$event.target.value)"
      :value="value"
      v-bind="$attrs"
      class="
        input-ui
        text-sm
        h-[36px]
        bg-[#F4F4FF]
        rounded-[4px]
      "
      :class="{'input-error': error}"
    />
    <slot :name="`cell(append)`"/>
    <span v-if="error" class="text-red-500 text-[12px] font-semibold absolute top-full leading-4">
      {{ error }}
    </span>
  </div>
</template>

<script setup>

defineProps({
  error:String,
  value:String
})
</script>

<style scoped>
.input-ui {
  @apply text-gray-800 border border-gray-400 focus:border-gray-900  placeholder-gray-500 focus:outline-none focus:bg-[#f4f4ff00] px-2.5;
}
.input-error {
  @apply !border-red-400
}
</style>