<template>
  <div class="bg-white md:flex items-stretch">
    <div class="hidden md:block md:w-2/4 bg-reg-bg bg-cover bg-no-repeat"></div>
    <div class="flex flex-col md:w-2/4 justify-center items-center h-[100vh]">
      <form @submit.prevent class="flex flex-col gap-2 ss:w-72 lg:w-80">
        <div class="mb-2">
          <img class="mx-auto w-20 xl:w-24 2xl:w-auto" src="@/assets/Logo.svg" alt="">
        </div>
        <div class="my-5">
          <p class="text-[#09093799] text-base ">Welcome back!</p>
          <h2 class="text-[#090937] text-2xl">Login to your account</h2>
        </div>
        <InputComp inpName="Name" inpPholder="John Doe" inpType="text" />
        <InputComp inpName="E-mail" inpPholder="someone@example.com" inpType="email" />
        <InputComp inpName="Password" inpPholder="Password" inpType="password" />
        <ButtonComp class="bg-[#EF6B4A] border border-[#EF6B4A] hover:bg-[#df6648] text-white">Register</ButtonComp>
        <ButtonComp class="border hover:bg-slate-100" >Login</ButtonComp>
      </form>
    </div>
  </div>
</template>

<script setup>
import InputComp from '../../components/Form/InputComp.vue';
import ButtonComp from '../../components/Form/ButtonComp.vue';
</script>