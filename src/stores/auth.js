import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { localStorageVerify, localStorageRemove } from "@/directives/verifyToken.js";
// const worker = new Worker(new URL('@/workers/worker.js', import.meta.url));

export const useAuthStore = defineStore('auth', () => {
  // https://library24.hvsniddin.repl.co/user/login/
  // Variables
  let user = ref(null);

  // Methods

  async function init() {
    // localStorageVerify
    let token = await localStorageVerify('userAccessToken')
    if (token) {
      // get request user/me api
      showMe(token)
    } else {
      // user not excist
    }
  }

  async function login(userData) {
    try {
      let res = await axios({
        method: 'post',
        url: `https://library24.hvsniddin.repl.co/user/login/`,
        data: userData
      });
      console.log(res);

      localStorage.setItem('userAccessToken', res?.data?.access)
      localStorage.setItem('userRefreshToken', res?.data?.refresh)
    } catch (error) {
      throw new Error(error)
    }
  }
  
  // Api Requests
  async function signup(userData) {
    try {
      let res = await axios({
        method: 'post',
        url: `https://library24.hvsniddin.repl.co/user/signup/`,
        data: userData
      });
      
      localStorage.setItem('userAccessToken', res?.data?.access)
      localStorage.setItem('userRefreshToken', res?.data?.refresh)
    } catch (error) {
      throw new Error(error)
    }
  }

  async function showMe(token) {
    const headers = {
      Authorization: `Bearer ${token}`
    }
    try {
      let res = await axios({
        method: 'get',
        url: `https://library24.hvsniddin.repl.co/user/me/`,
        headers
      });

      user.value = res.data
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    localStorageRemove('userAccessToken')
    localStorageRemove('userRefreshToken')

    user.value = null
  }

  return { signup, showMe, login, init, logout, user }
})
