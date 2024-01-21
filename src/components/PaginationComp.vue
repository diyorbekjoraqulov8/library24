<template>
  <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-max">
    <li>
      <button 
        @click="prev"
        class="pageChangeBtn ms-0 rounded-s-lg disabledClass"
        :disabled="hasFirst"
      >
        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </button>
    </li>

    <li 
      v-for="page in items"
      :key="page.label"
    >
      <span
        v-if="page.disable"
        class="pageLink pageLinkCurrent"
      >
        ...
      </span>
      <button
        v-else
        class="pageLink"
        :class="{'pageLinkCurrent':page.label !== currentPage}"
        @click="goto(page.label)"
      >
        {{ page.label }}
      </button>
    </li>
    <li>
      <button
        @click="next"
        :disabled="hasLast"
        class="pageChangeBtn rounded-e-lg disabledClass"
      >
        <!-- Next -->
        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script setup>
import { ref, toRefs, computed, watch } from "vue";

const props = defineProps({
  currentPage: {  // current page
    type: Number,
    required: true
  },
  pageLength: { // page numbers
    type: Number,
    required: true
  },
  pageLimit: {
    type: Number,
    required: true
  }
})
const { currentPage, pageLength, pageLimit } = toRefs(props)

// const pageLength1 = ref(props.pageLength)

const emit = defineEmits(['change'])

let pageCount = ref(Math.ceil(pageLength.value / pageLimit.value))

const hasFirst = computed(() => {
  return (currentPage.value == 1)
})
const hasLast = computed(() => {
  return (currentPage.value == pageCount.value)
})

let items;

watch(() => pageLength.value, (newValue) => {
  pageCount.value = Math.ceil(newValue / pageLimit.value)

  items = computed(() => {
    let valPrev = currentPage.value > 1 ? (currentPage.value - 1) : 1 
    // for easier navigation - gives one previous page
    let valNext = currentPage.value < pageCount.value ? (currentPage.value + 1) : pageCount.value 
    // one next page
    let extraPrev = valPrev === 3 ? 2 : null
    let extraNext = valNext === (pageCount.value - 2) ? (pageCount.value - 1) : null
    let dotsBefore = valPrev > 3 ? 2 : null
    let dotsAfter = valNext < (pageCount.value - 2) ? (pageCount.value - 1) : null
    let output = []

    for (let i = 1; i <= pageCount.value; i += 1) {
      if ([1, pageCount.value, currentPage.value, valPrev, valNext, extraPrev, extraNext, dotsBefore, dotsAfter].includes(i)) {
        output.push({
          label: i,
          active: currentPage.value === i,
          disable: [dotsBefore, dotsAfter].includes(i)
        })
      }
    }
    return output
  })
});

// pagination changing
function goto(page) {
  emit('change', page)
}
function prev() {
  if (!hasFirst.value) {
    emit('change', currentPage.value - 1)
  }
}
function next() {
  if (!hasLast.value) {
    emit('change', currentPage.value + 1)
  }
}
</script>

<style lang="css">
.pageLink {
  @apply flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white cursor-pointer
}
.pageLinkCurrent {
  @apply leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
}
.pageChangeBtn {
  @apply flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
}
.disabledClass {
  @apply disabled:text-gray-400 disabled:hover:text-gray-400 disabled:hover:bg-white
}
</style>