<template>
  <label class="flex flex-col lg:gap-1 mb-3" :for="inpName">
    <span class="xl:pb-2.5 text-form-t-color text-sm xl:text-[20px] font-semibold">{{ inpName }}</span>
    <input class="bg-input-bg-color text-form-t-color-06 xl:text-[20px] font-normal py-2 px-2.5 lg:py-2.5 lg:px-3 xl:p-4 text-sm outline-none rounded"
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