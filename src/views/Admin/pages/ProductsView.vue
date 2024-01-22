<template>
  <div>
    <!-- {{ rowsData }} -->
    <TableComp 
      :headTable="columns"
      :bodyTable="rowsData"
      :dataLength="adminStore.productLength"
      :loading="loading"
      @addProduct="addProduct()"
      @change="changePage($event)"
    >
      <template #cell(navbar)="">
        <div class="flex justify-between pr-[4px] h-max gap-4">
          <div class="flex">
            <input-ui
              :type="'text'"
              v-model:search="searchProduct"
              :placeholder="`Qidiruv...`"
              :styles="{rounded:4}"
              @enter="searchProducts(searchProduct)"
            >
              <template #cell(button)>
                <div 
                  @click="searchProducts(searchProduct)"
                  class="h-full flex items-center px-3 bg-[var(--purple)]"
                >
                  <SearchIcon class="text-white"/>
                </div>
              </template>
            </input-ui>
          </div>
          <button @click="addProduct()" class="defaultOutlineBtn flex items-center">
            Add Product
          </button>
        </div>
      </template>

      <template #cell(title)="{ value, item }">
        <button 
          class="text-blue-600 underline"
          @click="editProduct(item.id)"
        >
          {{ value }}
        </button>
        
      </template>

      <template #cell(author)="{ value }">
        <p>{{ value?.full_name }}</p>
      </template>

      <template #cell(genre)="{ value }">
        <p>{{ value }}</p>
      </template>

      <template #cell(action)="{ item }">
        <td class="flex items-center p-4 sticky top-0 right-0 bg-white border-l border-l-gray-300">
          <button @click="editProduct(item.id)" type="button" class="defaultBtn !text-xs">
            <EditIcon />
          </button>

          <button @click="deleteProduct(item.id)" type="button" class="redBtn !text-xs">
            <DeleteIcon />
          </button>
        </td>
      </template>
    </TableComp>
  </div>
</template>

<script setup>
import { ref, toRefs, onMounted, computed } from "vue";
import SearchIcon from '@/components/icons/SearchIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'

import TableComp from "@/components/TableComp.vue";
import InputUi from "@/components/UI/Forms/Input-UI.vue";
import { useAdminStore } from "@/stores/admin.js";

const props = defineProps({
  modal: Object
})
const { modal } = toRefs(props)

const adminStore = useAdminStore()

let loading = ref(false)
let searchProduct = ref('')
const columns = ref([
  {
    id: 1,
    key:'title',
    label: "Product name",
    sort: {
      category: 'title',
    }
  },
  {
    id: 2,
    key:'author',
    label: "Muallif",
    sort: {
      category: 'author',
    }
  },
  {
    id: 3,
    key:'genre',
    label: "Janr",
    sort: {
      category: 'genre',
    }
  },
  {
    id: 4,
    key:'length',
    label: "Uzunligi",
    sort: {
      category: 'length',
    }
  },
  {
    id: 5,
    key:'published_date',
    label: "Chiqarilgan Yil",
    sort: {
      category: 'published_date',
    }
  },
  {
    id: 6,
    key:'price',
    label: "Narxi",
    sort: {
      category: 'price',
    }
  }
])

const rowsData = computed(() => {
  return adminStore.productList
})

function addProduct() {
  
  modal.value.open = true
  modal.value.type = 'add-product'
  modal.value.productId = null
}

function editProduct(id) {
  modal.value.open = true
  modal.value.type = 'edit-product'
  modal.value.productId = id
}

async function deleteProduct(id) {
  await adminStore.delProduct(id)
}

onMounted(async () => {
  loading.value = true
  await adminStore.getProducts('',1)
  loading.value = false
})

async function changePage(e) {
  loading.value = true
  await adminStore.getProducts(searchProduct.value, e)
  loading.value = false
}
async function searchProducts(text) {
  if (text.trim()) {
    loading.value = true
    await adminStore.getProducts(text, 1)
    loading.value = false
  }
}
</script>