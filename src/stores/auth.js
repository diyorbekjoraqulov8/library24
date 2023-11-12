import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
// const worker = new Worker(new URL('@/workers/worker.js', import.meta.url));

export const useAuthStore = defineStore('counter', () => {
  // Variables

  // Methods
  
  // Api Requests
  async function signup(userData) {
    try {
      let res = await axios({
        method: 'post',
        url: `https://library24.hvsniddin.repl.co/api/signup/`,
        data: userData
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return { signup }
})
