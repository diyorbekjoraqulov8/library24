import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAdminStore = defineStore('counter', () => {
  // Variables
  const menu = ref([
    {
      id: 1,
      text: "Dashboard",
      name: "admin",
      path: "/admin"
    },
    {
      id: 2,
      text: "Products",
      name: "products",
      path: "/admin/products"
    },
    {
      id: 2,
      text: "E-commerse",
      name: "e-commerse",
      lists: [
        {
          id: 1,
          text: "one",
          name: "one",
          path: "/admin"
        },
        {
          id: 2,
          text: "two",
          name: "two",
          path: "/admin"
        },
        {
          id: 3,
          text: "three",
          name: "three",
          path: "/admin"
        },
      ]
    },
    {
      id: 3,
      text: "Kaban",
      name: "kaban",
      path: "/admin"
    },
  ])
  // Api Requests
  

  return { menu }
})