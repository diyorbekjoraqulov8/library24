import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {
  // Variables
  let count = ref(0);
  let products = ref(null);

  // Api Requests
  async function getProducts() {
    try {
      let res = await axios.get(`https://library24.hvsniddin.repl.co/library/books/`)
      products.value = res?.data
    } catch (err) {
      console.log(err);
    }
  }

  return { count, products, getProducts }
})
