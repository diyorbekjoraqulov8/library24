import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {
  // Variables
  const baseUrl = ref("https://library24.onrender.com/library/")
  const modal = ref({
    type: null,
    open: false,
    loading: false
  })
  let products = ref(null);
  let newProducts = ref({
    count:0,
    items: []
  })
  let cart = ref([])

  // Input
  function getInputMaks() {
    for (const el of document.querySelectorAll("[data-slots]")) {
      // console.log('el: ', el);
      const pattern = el.getAttribute("placeholder"),
      slots = new Set(el.dataset.slots || "_"),
      prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
      first = [...pattern].findIndex(c => slots.has(c)),
      accept = new RegExp(el.dataset.accept || "\\d", "g"),
      clean = input => {
          input = input.match(accept) || [];
          return Array.from(pattern, c =>
              input[0] === c || slots.has(c) ? input.shift() || c : c
          );
      },
      format = () => {
          const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
              i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
              return i<0? prev[prev.length-1]: back? prev[i-1] || first: i;
          });
          el.value = clean(el.value).join``;
          el.setSelectionRange(i, j);
          back = false;
      };
      let back = false;
      el.addEventListener("keydown", (e) => back = e.key === "Backspace");
      el.addEventListener("input", format);
      el.addEventListener("focus", format);
      el.addEventListener("blur", () => el.value === pattern && (el.value=""));
    }
  }

  // Api Requests
  async function getProducts() {
    try {
      let res = await axios.get(`https://library24.hvsniddin.repl.co/library/books/`)
      products.value = res?.data
    } catch (err) {
      console.log(err);
    }
  }
  async function getProduct(id) {
    try {
      let res = await axios({
        method: 'GET',
        url: `${baseUrl.value}books/${id}`
      });
      return res?.data
    } catch (err) {
      console.log(err.response);
    }
  }
  // New Products
  async function getNewProducts() {
    try {
      let res = await axios({
        method: 'GET',
        url: `${baseUrl.value}books`
      });
      newProducts.value.items = res?.data?.results
      newProducts.value.count = res?.data?.count
    } catch (err) {
      console.log(err.response);
    }
  }
  // async function getProducts(search = null, page=1, limit=20) {
  //   search = search?.trim()
  //   try {
  //     let res = await axios({
  //       method: 'GET',
  //       url: !search ? `${baseUrl.value}books?page=${page}&page_size=${limit}` : `${baseUrl.value}books?search=${search}&page=${page}&page_size=${limit}`
  //     });
  //     productList.value = res?.data?.results
  //     productLength.value = res?.data?.count
  //   } catch (err) {
  //     console.log(err.response);
  //   }
  // }

  return { 
    products,
    modal,
    cart,
    newProducts,
    getProduct,
    getProducts,
    getInputMaks,
    getNewProducts
  }
})
