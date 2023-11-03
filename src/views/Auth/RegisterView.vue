<template>
  <div class="bg-white md:flex">
    <div class="hidden md:block md:w-2/4 bg-[url('/reg-bg.jpg')] bg-cover bg-no-repeat"></div>
    <div class="flex flex-col md:w-2/4 justify-center items-center h-[100vh] overflow-auto py-4">
      <form @submit.prevent="submit" class="flex flex-col gap-2 w-full ss:w-96 font-manrope h-full px-6">
        <div class="mb-2 xl:mb-3">
          <img class="mx-auto w-20 xl:w-auto" src="/logo.svg" alt="">
        </div>
        <div class="my-5 xl:my-7">
          <h2 class="text-form-t-color text-2xl font-bold">Register new account</h2>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-1.5 mb-3">
            <label 
            class="
              text-sm
              xl:text-lg
              font-semibold
            "
            >Name</label>
            <InputComp 
            id="name"
            min='4'
            :required="true"
            v-model:input="userName"
            :error="error && error.type == 'userName' ? error.message : ''"
            inputType="text"/>
          </div>

          <div class="flex flex-col gap-1.5 mb-3">
            <label 
            class="
              text-sm
              xl:text-lg
              font-semibold
            "
            >E-mail</label>
            <InputComp 
            id="email"
            :required="true"
            v-model:input="userEmail"
            :error="error && error.type == 'userEmail' ? error.message : ''"
            inputType="email"/>
          </div>

          <div class="flex flex-col gap-1.5">
            <label 
            class="
              text-sm
              xl:text-lg
              font-semibold
            "
            >Password</label>
            <InputComp 
            id="password"
            min="6"
            :required="true"
            v-model:input="userPassword"
            :error="error && error.type == 'userPassword' ? error.message : ''"
            inputType="password"/>
          </div>
          
          <div class="flex flex-col gap-2 xl:gap-2.5 mt-4">
            <ButtonComp 
              @click="submit"
              class="bg-btn-orange border border-btn-orange hover:bg-btn-orange-hover text-white">Register</ButtonComp>
            <router-link to="/login">
              <ButtonComp class="border hover:bg-slate-100">Login</ButtonComp>
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
import InputComp from '@/components/Form/InputComp.vue';
import ButtonComp from '@/components/Form/ButtonComp.vue';
import { validateEmail } from '@/directives/auth.js';

let userName = ref('')
let userEmail = ref('')
let userPassword = ref('')

let isWorking = ref(false)
let error = ref(null)

const router = useRouter()

const submit = async () => {
    isWorking.value = true
    error.value = null

    console.log();
    if (!(userName.value?.length >= 4)) {
      error.value = {
        type: 'userName',
        message: 'Name minimum charakter 4'
      }
    } else if (!validateEmail(userEmail.value)) {
      error.value = {
        type: 'userEmail',
        message: 'An user email is required'
      }
    } else if (!(userPassword.value?.length >= 6)) {
      error.value = {
        type: 'userPassword',
        message: 'A user password is required'
      }
    } 

    if (error.value) {
      isWorking.value = false
      return
    }

    isWorking.value = false

    return router.push({
      name: 'home',
    })
}
</script>