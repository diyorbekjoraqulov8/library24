<template>
  <div class="flex w-full relative shadow-sm max-w-[260px] seven:w-[180px] lg:w-[240px]">
    <slot :name="`cell(prepend)`"/>
    <input 
      v-bind="$attrs"
      class="
        input-ui
        text-sm
        h-[40px]
        bg-[#F4F4FF]
        rounded-[4px]
      "
    />
    <slot :name="`cell(append)`"/>
    <span v-if="error" class="text-red-500 text-[14px] font-semibold absolute top-full leading-3">
      {{ error }}
    </span>
  </div>
</template>

<script setup>

defineProps({
  error:String
})
</script>