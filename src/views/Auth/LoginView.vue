<template>
  <div class="bg-white md:flex">
    <div class="hidden md:block md:w-2/4 bg-[url('/reg-bg.jpg')] bg-cover bg-no-repeat"></div>
    <div class="flex flex-col md:w-2/4 justify-center items-center h-[100vh] overflow-auto py-4">
      <form @submit.prevent="submit" class="flex flex-col gap-2 w-full ss:w-96 font-manrope h-full px-6">
        <div class="mb-2 xl:mb-3">
          <img class="mx-auto w-20 xl:w-auto" src="/logo.svg" alt="">
        </div>
        <div class="my-5 xl:my-7">
          <h2 class="text-form-t-color text-2xl font-bold">Login to your account</h2>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-1.5 mb-3">
            <label 
            for="email"
            class="
              text-sm
              xl:text-lg
              font-semibold
            ">E-mail</label>
            <IndexComp 
              :id="'email'" 
              :required="true" 
              v-model:input="userEmail"
              :error="error && error.type == 'userEmail' ? error.message : null" 
              inputType="email"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label 
            class="
              text-sm
              xl:text-lg
              font-semibold
            "
            >Password</label>
            <IndexComp 
              id="password" 
              :min="6"
              :required="true" 
              v-model:input="userPassword"
              :error="error && error.type == 'userPassword' ? error.message : null" inputType="password" 
            />
          </div>

          <div class="flex flex-col gap-2 xl:gap-2.5 mt-20">
            <button 
              type="submit"
              class="bg-btn-orange border border-btn-orange hover:bg-btn-orange-hover text-white">Login</button>
            <router-link to="/register">
              <button class="border hover:bg-slate-100">Register</button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { useAuthStore } from "@/stores/auth.js";
import IndexComp from '../../components/UI/Forms/IndexComp.vue';
import { validateEmail } from '@/directives/auth.js';
import { localStorageVerify } from "@/directives/verifyToken.js";

/* Common Variables */
const authStore = useAuthStore()
const router = useRouter()

/* Simple Variables */

let userEmail = ref('')
let userPassword = ref('')

let isWorking = ref(false)
let error = ref(null)

/* Verify user exist */
if (localStorageVerify('userAccessToken')) {
  router.push({
    name: 'home',
  })
}

const submit = async () => {
  isWorking.value = true
  error.value = null
  
  try {
    if (!validateEmail(userEmail.value)) {
      error.value = {
        type: 'userEmail',
        message: 'user email is required'
      }
    } else if (!userPassword.value) {
      error.value = {
        type: 'userPassword',
        message: 'user password is required'
      }
    }

    if (error.value) {
      isWorking.value = false
      return
    }

    isWorking.value = false

    let userData = ref({
      email: userEmail,
      password: userPassword
    })
    
    await authStore.login(userData.value)
    
    return router.push({
      name: 'home',
    })
  } catch (err) {
    console.error(err)
  }
}
</script>