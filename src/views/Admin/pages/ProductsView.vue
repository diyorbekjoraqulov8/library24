<template>
  <div>
    <TableComp 
      :headerList="headerList"
      :bodyList="bodyList"
      :sorted="sorted"
      @sortTable="sortTable($event)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TableComp from "@/components/TableComp.vue";
import { useAdminStore } from "@/stores/admin.js";

const store = useAdminStore()

const headerList = ref([
  {
    id: 1,
    text: "Product name",
    sort: {
      category: 'name',
    }
  },
  {
    id: 2,
    text: "Color",
    sort: {
      category: 'color',
    }
  },
  {
    id: 3,
    text: "Category",
    category: 'category',
    sort: {
      category: 'category',
    }
  },
  {
    id: 4,
    text: "Accessories"
  },
  {
    id: 5,
    text: "Available"
  },
  {
    id: 6,
    text: "Price"
  },
  {
    id: 7,
    text: "Weight"
  }
])

let bodyList = ref(store.productList)
let sorted = ref({
  condition: false,
  category: undefined,
  default: false
})

function sortTable(ct) {
  const list = [...store.productList];
  const isSameCategory = sorted.value.category === ct;
  const isDefault = sorted.value.default;

  bodyList.value = list.sort((a, b) => {
    if (isSameCategory && isDefault) {
      return a.id - b.id
    } else if (isSameCategory) {
      return b[ct].localeCompare(a[ct])
    } else {
      return a[ct].localeCompare(b[ct])
    }
  });

  sorted.value.category = isDefault ? undefined : ct;
  sorted.value.default = isSameCategory && !isDefault ? true : false;

  // console.log(isSameCategory && isDefault ? 'three' : isSameCategory ? 'two' : 'one');
}

</script>