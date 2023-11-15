import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { localStorageVerify } from "@/directives/verifyToken.js";
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
    } else {
      // user not excist
      console.log(user.value);
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
      console.log(res);
    } catch (error) {
      throw new Error(error)
    }
  }

  async function showMe() {
    try {
      let res = await axios({
        method: 'get',
        url: `https://library24.hvsniddin.repl.co/user/me/`
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return { signup, showMe, login, init }
})
