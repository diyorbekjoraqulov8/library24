<template>
  <div class="bg-white md:flex">
    <div class="hidden md:block md:w-2/4 bg-[url('/reg-bg.jpg')] bg-cover bg-no-repeat"></div>
    <div class="flex flex-col md:w-2/4 justify-center items-center h-[100vh]">
      <form @submit.prevent class="flex flex-col gap-2 ss:w-72 lg:w-80 xl:w-96 font-manrope">
        <div class="mb-2 xl:mb-5">
          <img class="mx-auto w-20 xl:w-auto" src="/logo.svg" alt="">
        </div>
        <div class="my-5 xl:my-16">
          <p class="text-form-t-color-06 xl:pb-2 text-base xl:text-[24px]">Welcome back!</p>
          <h2 class="text-form-t-color text-2xl xl:text-[32px] font-bold">Login to your account</h2>
        </div>
        <div class="flex flex-col xl:gap-9">
          <InputComp inpName="Name" inpPholder="John Doe" inpType="text" />
          <InputComp inpName="E-mail" inpPholder="someone@example.com" inpType="email" />
          <InputComp inpName="Password" inpPholder="Password" inpType="password" />
          <div class="flex flex-col gap-2 xl:gap-2.5">
            <ButtonComp class="bg-btn-orange border border-btn-orange hover:bg-btn-orange-hover text-white">Register</ButtonComp>
            <ButtonComp class="border hover:bg-slate-100" >Login</ButtonComp>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import InputComp from '@/components/Form/InputComp.vue';
import ButtonComp from '@/components/Form/ButtonComp.vue';
</script>