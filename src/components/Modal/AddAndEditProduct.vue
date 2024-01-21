<template>
  <div class="space-y-4" action="#">
    <div v-if="modal?.loading" class="flex justify-center p-4">
      <SpinnerLoader/>
    </div>
    <form v-else @submit.prevent="submitData()">
      <div class="grid grid-cols-1 ss:grid-cols-2 seven:grid-cols-3 min-[900px]:grid-cols-4 justify-between gap-2 mb-2">
        <div class="w-full">
          <label for="name" class="addProductLabel mb-2">Kitob nomi <span class="text-red-500 text-lg leading-3">*</span></label>
          <IndexComp 
            :id="'name'"
            :rounded="'md'"
            :placeholder="'Name'"
            v-model:input="proName"
            :error="error?.type == 'proName' ? error.message : null" 
            :width="'100%'"
          />
          
        </div>
        <div class="w-full">
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max">Narxi <span class="text-red-500 text-lg leading-3">*</span></label>
          <IndexComp 
            :id="'price'"
            :inputType="'number'"
            :rounded="'md'"
            :placeholder="'Price'"
            :withButton="'summ'"
            v-model:input="proPrice"
            :error="error?.type == 'proPrice' ? error.message : null"
            :width="'100%'"
          />
        </div>
        <div class="w-full">
          <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max">Author <span class="text-red-500 text-lg leading-3">*</span></label>
          <!-- {{ authors }} -->
          <SelectComp 
            :value="proAuthor"
            :inputId="'author'"
            :placeholder="'Author'"
            :getOptionDescription="getCustomDescription"
            v-model:selectValue="proAuthor"
            :options="authors"
            :rounded="'md'"
            option-label="full_name"
            option-key="id"
            :width="'100%'"
          ></SelectComp>
        </div>
        <div class="w-full">
          <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max">Ishlab chiqarilgan yili<span class="text-red-500 text-lg leading-3">*</span></label>
          <IndexComp 
            :id="'date'"
            :rounded="'md'"
            :placeholder="'Date'"
            :inputType="'number'"
            v-model:input="proYear"
            :error="error?.type == 'proYear' ? error.message : null"
            :width="'100%'"
          />
        </div>
        <div class="w-full">
          <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max">Kitob rasmi<span class="text-red-500 text-lg leading-3">*</span></label>
          <ImageUpload 
            :id="'image'"
            v-model:productImg="proImgFIle"
          />
        </div>
        <div class="w-full">
          <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max">Janr <span class="text-red-500 text-lg leading-3">*</span></label>
          <SelectComp
            :inputId="'genre'"
            :placeholder="'Janr'"
            :getOptionDescription="getCustomDescription"
            v-model:selectValue="proGenre"
            :options="threads"
            option-label="a_title"
            option-key="id"
            name="dude"
            :width="'100%'"
          ></SelectComp>
        </div>
        <div class="w-full">
          <label for="page" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max">
          Sahifasi
          <span class="text-red-500 text-lg leading-3">*</span></label>
          <IndexComp 
            :id="'page'"
            :rounded="'md'"
            :placeholder="'Necha bet'"
            :inputType="'number'"
            v-model:input="proPages"
            :error="error?.type == 'proPages' ? error.message : null"
            :width="'100%'"
          />
        </div>
        <div class="w-full">
          <label for="discount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max">
            Chegirma
          </label>
          <IndexComp 
            :id="'discount'"
            :rounded="'md'"
            :placeholder="'Necha foiz'"
            :inputType="'number'"
            v-model:input="proDiscount"
            :error="error?.type == 'proDiscount' ? error.message : null"
            :width="'100%'"
          />
        </div>
      </div>
      <div>
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-max">
          Description
        </label>
        <IndexComp 
          :id="'description'"
          :inputType="'textarea'"
          :rounded="'md'"
          :placeholder="'Description'"
          v-model:input="proDescription"
          :error="error?.type == 'proDescription' ? error.message : null"
        />
      </div>
      <div class="flex justify-end mt-2">
        <button :disabled="isWorking" type="submit" class="defaultBtn text-center inline-flex items-center">
          <div v-if="isWorking" class="flex gap-2 items-center">
            <SpinnerLoader :b="`5px`" :c="`#fff`" :width="'20px'"/>
            <p>Waiting...</p>
          </div>
          <p v-else>Add Product</p>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch, toRefs, onMounted } from "vue";
import IndexComp from "@/components/UI/Forms/IndexComp.vue";
import ImageUpload from "@/components/UI/ImageUpload.vue";
import SelectComp from "@/components/UI/Select/selectcomp.vue";
import SpinnerLoader from "@/components/Loader/SpinnerLoader.vue";
import { useAdminStore } from "@/stores/admin.js";

const props = defineProps({
  modal: Object
})
const { modal } = toRefs(props)

/* Common variables */
const adminStore = useAdminStore()
let product = ref(null)

/* Simple variables */
// Product details
let proName = ref('')
let proPrice = ref(0)
let proAuthor = ref('')
let proYear = ref(0)
let proImgFIle = ref(null)
let proGenre = ref('')
let proPages = ref(0)
let proDiscount = ref(0)
let proDescription = ref('')

let isWorking = ref(false)
let error = ref(null)

const threads = ref([
  { id: 1, a_title: "Tarixiy" },
  { id: 2, a_title: "Kamedya" },
  { id: 3, a_title: "Eos rerum veniam quia mollitia" },
  { id: 4, a_title: "Robs Thread" },
  { id: 5, a_title: "test" },
  { id: 6, a_title: "goose" },
  { id: 7, a_title: "loose goose" }
])

// Find Authors
const authors = computed(() => adminStore.authors)


// Mounted
onMounted(async () => {
  modal.value.loading = true
  await adminStore.getAuthors()

  if (modal.value.type === 'edit-product') {
    product.value = await adminStore.getProduct(modal.value.productId)
    console.log("product: ", product.value?.id);
    // console.log(adminStore.authors.value.filter(author => author.id === product.value?.author));
    // console.log("authors", authors.value);
    if (product.value?.id) {
      proName.value = product.value?.title
      proPrice.value = product.value?.price
      proAuthor.value = product.value?.author
      proYear.value = product.value?.published_date
      proImgFIle.value = product.value?.cover_url
      proGenre.value = product.value?.genre
      proPages.value = product.value?.length
      proDiscount.value = product.value?.discount
      proDescription.value = product.value?.description
    }
  }
  modal.value.loading = false
})

// Watch
watch(()=> proAuthor.value, async (newVal) => {
  await adminStore.getAuthors(newVal)
})

async function submitData() {
  error.value = null

  if (checkInputType(proName.value)) {
    error.value = {
      type: 'proName',
      message: 'Book name is required'
    }
  } else if (checkInputType(proPrice.value)) {
    error.value = {
      type: 'proPrice',
      message: 'Book price is required'
    }
  } else if (checkInputType(proAuthor.value)) {
    error.value = {
      type: 'proAuthor',
      message: 'Book author is required'
    }
  } else if (checkInputType(proYear.value)) {
    error.value = {
      type: 'proYear',
      message: 'Book year is required'
    }
  } else if (checkInputType(proImgFIle.value)) {
    error.value = {
      type: 'proImgFIle',
      message: 'Book image is required'
    }
  } else if (checkInputType(proGenre.value)) {
    error.value = {
      type: 'proGenre',
      message: 'Book genre is required'
    }
  } else if (checkInputType(proPages.value)) {
    error.value = {
      type: 'proPages',
      message: 'Book page is required'
    }
  } else if (checkInputType(proDescription.value)) {
    error.value = {
      type: 'proDescription',
      message: 'Book description is required'
    }
  }

  if (error.value) {
    isWorking.value = false
    return
  }
  isWorking.value = true

  if (!proAuthor.value.id) {
    let res = await adminStore.addAuthor(proAuthor.value)
    proAuthor.value = res
  }

  const data = new FormData();
  data.append('author', proAuthor.value.id);
  data.append('title', proName.value);
  data.append('description', proDescription.value);
  data.append('genre', proGenre.value.id);
  data.append('length', proPages.value);
  data.append('published_date', proYear.value);
  data.append('price', proPrice.value);
  if (proDiscount.value) {
    data.append('discount', proDiscount.value);
  }
  data.append('cover', proImgFIle.value);

  if (modal.value?.type === 'add-product') {
    await addProduct(data)
  } else if (modal.value?.type === 'edit-product') {
    await editProduct(data)
  }
}

async function editProduct(data) {
  try {
    await adminStore.editProduct(data, modal.value?.productId)

    isWorking.value = false
    
    closeModal()
  } catch (err) {
    console.error(err)
  }
}
const addProduct = async (data) => {  
  try {
    await adminStore.addProduct(data)

    isWorking.value = false

    closeModal()
  } catch (err) {
    console.error(err)
  }
}

function closeModal() {
  modal.value.open = false
  modal.value.type = null
}

function checkInputType(arg) {
  return typeof arg === String ? !arg.trim() : !arg
}

function getCustomDescription(opt) {
  return opt;
}
</script>

<style lang="css">

</style>