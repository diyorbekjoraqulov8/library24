import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { localStorageVerify } from "@/directives/verifyToken.js";

import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue'
import PieIcon from '@/components/icons/PieIcon.vue'

export const useAdminStore = defineStore('admin', () => {
  // Variables
  const baseUrl = ref("https://library24.onrender.com/library/")

  const menu = ref([
    {
      id: 1,
      text: "Dashboard",
      name: "admin",
      path: "/admin",
      icon: PieIcon
    },
    {
      id: 2,
      text: "Products",
      name: "admin-products",
      path: "/admin/products",
      icon: ShoppingCartIcon
    },
    // {
    //   id: 3,
    //   text: "Orders",
    //   name: "orders",
    //   path: "/orders"
    // },
    // {
    //   id: 4,
    //   text: "E-commerse",
    //   name: "e-commerse",
    //   lists: [
    //     {
    //       id: 1,
    //       text: "one",
    //       name: "one",
    //       path: "/admin"
    //     },
    //     {
    //       id: 2,
    //       text: "two",
    //       name: "two",
    //       path: "/admin"
    //     },
    //     {
    //       id: 3,
    //       text: "three",
    //       name: "three",
    //       path: "/admin"
    //     },
    //   ]
    // },
    // {
    //   id: 5,
    //   text: "Kaban",
    //   name: "kaban",
    //   path: "/admin"
    // }
  ])
  // const productList = ref([
  //   {
  //     id: 1,
  //     name: "Apple MacBook Pro 17",
  //     color: "red",
  //     category: "Laptop",
  //     accessories: "Yes",
  //     available: "No",
  //     price: "$2999",
  //     weight: "3.0 lb."
  //   },
  //   {
  //     id: 2,
  //     name: "Microsoft Surface Pro",
  //     color: "blue",
  //     category: "Laptop PC",
  //     accessories: "No",
  //     available: "Yes",
  //     price: "$1999",
  //     weight: "1.0 lb."
  //   },
  //   {
  //     id: 3,
  //     name: "Magic Mouse 2",
  //     color: "green",
  //     category: "Laptop 2",
  //     accessories: "Yes",
  //     available: "No",
  //     price: "$99",
  //     weight: "0.2 lb."
  //   },
  //   {
  //     id: 4,
  //     name: "Apple Watch",
  //     color: "yellow",
  //     category: "Watches",
  //     accessories: "Yes",
  //     available: "No",
  //     price: "$199",
  //     weight: "7.0 lb."
  //   }
  // ])
  // Api Requests
  const productList = ref([])
  const productLength = ref(0)
  const authors = ref([])

  /* Author */
  async function getAuthors() {
    try {
      if (!authors.value.length) {
        let res = await axios.get(`${baseUrl.value}authors/`)
        authors.value = res?.data?.results
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function addAuthor(name) {
    console.log("name: ", name);
    const token = await localStorageVerify('userAccessToken')
    console.log(token);
    const headers = {
      Authorization: `Bearer ${token}`
    }
    let data = {
      full_name: name
    }
    try {
      let res = await axios({
        method: 'POST',
        url: `${baseUrl.value}authors/`,
        headers,
        data
      });
      return res?.data
    } catch (err) {
      console.log(err.response);
    }
  }

  /* Product */
  // GET
  async function getProduct(id) {
    if (id) {
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
  }
  async function getProducts(search = null, page=1, limit=20) {
    search = search?.trim()
    try {
      let res = await axios({
        method: 'GET',
        url: !search ? `${baseUrl.value}books?page=${page}&page_size=${limit}` : `${baseUrl.value}books?search=${search}&page=${page}&page_size=${limit}`
      });
      productList.value = res?.data?.results
      productLength.value = res?.data?.count
    } catch (err) {
      console.log(err.response);
    }
  }
  // POST
  async function addProduct(data) {
    const token = await localStorageVerify('userAccessToken')
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
    try {
      let res = await axios({
        method: 'post',
        url: `${baseUrl.value}books/`,
        headers,
        data
      });
      console.log(res?.data);
    } catch (err) {
      console.log(err.response);
    }
  }
  // PUT
  async function editProduct(data, productId) {
    const token = await localStorageVerify('userAccessToken')
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
    try {
      let res = await axios({
        method: 'PUT',
        url: `${baseUrl.value}books/${productId}`,
        headers,
        data
      });
      console.log(res?.data);
    } catch (err) {
      console.log(err.response);
    }
  }
  // DELETE
  async function delProduct(id) {
    const token = await localStorageVerify('userAccessToken')
    const headers = {
      Authorization: `Bearer ${token}`
    }
    try {
      let res = await axios({
        method: 'DELETE',
        url: `${baseUrl.value}books/${id}`,
        headers
      });
      console.log(res?.data);
    } catch (err) {
      console.log(err.response);
    }
  }

  return { 
    menu,
    productList,
    productLength,
    authors,
    getProduct,
    getProducts,
    getAuthors,
    addProduct,
    addAuthor,
    editProduct,
    delProduct
  }
})