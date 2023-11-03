<template>
  <nav class="container mx-auto px-9 flex items-center justify-between">
    <div class="w-16">
      <img class="w-full" src="/logo.svg" alt="Logo">
    </div>
    <form @submit.prevent class="">
      <div class="relative bg-violet-50 rounded">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_1_203)">
              <path d="M18.6667 18.6667L14.6791 14.672M16.8889 9.33333C16.8889 11.3372 16.0929 13.259 14.6759 14.6759C13.259 16.0929 11.3372 16.8889 9.33333 16.8889C7.32947 16.8889 5.40768 16.0929 3.99074 14.6759C2.5738 13.259 1.77777 11.3372 1.77777 9.33333C1.77777 7.32947 2.5738 5.40768 3.99074 3.99074C5.40768 2.5738 7.32947 1.77777 9.33333 1.77777C11.3372 1.77777 13.259 2.5738 14.6759 3.99074C16.0929 5.40768 16.8889 7.32947 16.8889 9.33333V9.33333Z" stroke="#090937" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1_203">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <input type="search"
          class="block w-full pl-12 pr-6 py-2.5 outline-none text-lg text-gray-900 rounded bg-transparent border border-transparent focus:border-blue-300"
          placeholder="Search">
      </div>
    </form>
    <div class="flex items-center justify-between bg-slate-400 w-44">
      <div class="flex items-center justify-center w-12 h-12 cursor-pointer bg-violet-50 rounded">
        <img class="opacity-70 w-6 h-6" src="/avatar-out.svg" alt="">
      </div>
      <div class="flex items-center justify-center w-12 h-12 cursor-pointer bg-violet-50 rounded">
        <img class="opacity-70 w-6 h-6" src="/heart.png" alt="">
      </div>
      <div class="flex items-center justify-center w-12 h-12 cursor-pointer bg-violet-50 rounded">
        <img class="opacity-70 w-6 h-6" src="/cart.svg" alt="">
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>