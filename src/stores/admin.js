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
      id: 3,
      text: "Orders",
      name: "orders",
      path: "/orders"
    },
    {
      id: 4,
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
      id: 5,
      text: "Kaban",
      name: "kaban",
      path: "/admin"
    }
  ])
  const productList = ref([
    {
      id: 1,
      name: "Apple MacBook Pro 17",
      color: "red",
      category: "Laptop",
      accessories: "Yes",
      available: "No",
      price: "$2999",
      weight: "3.0 lb."
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "blue",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.0 lb."
    },
    {
      id: 3,
      name: "Magic Mouse 2",
      color: "green",
      category: "Laptop 2",
      accessories: "Yes",
      available: "No",
      price: "$99",
      weight: "0.2 lb."
    },
    {
      id: 4,
      name: "Apple Watch",
      color: "yellow",
      category: "Watches",
      accessories: "Yes",
      available: "No",
      price: "$199",
      weight: "7.0 lb."
    }
  ])
  // Api Requests

  return { menu, productList }
})