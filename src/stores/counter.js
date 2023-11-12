import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
// const worker = new Worker(new URL('@/workers/worker.js', import.meta.url));

export const useCounterStore = defineStore('counter', () => {
  // Variables
  const count = ref(0)
  const products = ref()

  // Methods
  const doubleCount = computed(() => count.value * 2)
  // Api Requests
  async function getProducts() {
    // let res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&&_limit=10`)
    // // console.log(res.data);
    // setTimeout(() => {
    //   products.value = res.data
    // }, 5000);
// https://library24.hvsniddin.repl.co/library/books/
    // try {
    //   let res = await axios.get(`https://library24.hvsniddin.repl.co/library/books/`,{ 
    //     headers: {'Access-Control-Allow-Origin': '*'},
    //   },
    //   { crossdomain: true })
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return { count, doubleCount, products, getProducts }
})
