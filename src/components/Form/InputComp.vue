<template>
  <label class="flex flex-col lg:gap-1 mb-3" :for="inpName">
    <span class="text-sm text-form-t-color">{{ inpName }}</span>
    <input class="py-2 px-2.5 lg:py-2.5 lg:px-3 2xl:p-4 text-sm outline-none rounded bg-input-bg text-form-t-color-06"
          :id="inpName" 
          :type="inpType" 
          :placeholder="inpPholder" />
  </label>
</template>

<script>
export default {
  props: {
    inpName: {
      type: String,
      required: true,
    },
    inpPholder: {
      type: String,
      required: true,
    },
    inpType: {
      type: String,
      required: true,
    },
  }
}
</script>