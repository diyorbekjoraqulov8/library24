<template>
  <div>
    <TableComp 
      :headerList="headerList"
      :bodyList="bodyList"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TableComp from "@/components/TableComp.vue";

const headerList = ref([
  {
    id: 1,
    text: "Product name"
  },
  {
    id: 2,
    text: "Color"
  },
  {
    id: 3,
    text: "Category"
  },
  {
    id: 4,
    text: "Accessories"
  },
  {
    id: 5,
    text: "Available"
  },
  {
    id: 6,
    text: "Price"
  },
  {
    id: 7,
    text: "Weight"
  }
])

const bodyList = ref([
  {
    id: 1,
    data: [
      {
        text: "Apple MacBook Pro 17",
        main: true
      },
      {
        text: "Silver"
      },
      {
        text: "Laptop"
      },
      {
        text: "Yes"
      },
      {
        text: "Yes"
      },
      {
        text: "$2999"
      },
      {
        text: "3.0 lb."
      }
    ]
  },
  {
    id: 2,
    data: [
      {
        text: "Microsoft Surface Pro",
        main: true
      },
      {
        text: "White"
      },
      {
        text: "Laptop PC"
      },
      {
        text: "No"
      },
      {
        text: "Yes"
      },
      {
        text: "$1999"
      },
      {
        text: "1.0 lb."
      }
    ]
  },
  {
    id: 3,
    data: [
      {
        text: "Magic Mouse 2",
        main: true
      },
      {
        text: "Black"
      },
      {
        text: "Accessories"
      },
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "$99"
      },
      {
        text: "0.2 lb."
      }
    ]
  },
  {
    id: 4,
    data: [
      {
        text: "Apple Watch",
        main: true
      },
      {
        text: "Black"
      },
      {
        text: "Watches"
      },
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "$199"
      },
      {
        text: "7.0 lb."
      }
    ]
  },
  {
    id: 1,
    data: [
      {
        text: "Apple MacBook Pro 17",
        main: true
      },
      {
        text: "Silver"
      },
      {
        text: "Laptop"
      },
      {
        text: "Yes"
      },
      {
        text: "Yes"
      },
      {
        text: "$2999"
      },
      {
        text: "3.0 lb."
      }
    ]
  },
  {
    id: 2,
    data: [
      {
        text: "Microsoft Surface Pro",
        main: true
      },
      {
        text: "White"
      },
      {
        text: "Laptop PC"
      },
      {
        text: "No"
      },
      {
        text: "Yes"
      },
      {
        text: "$1999"
      },
      {
        text: "1.0 lb."
      }
    ]
  },
  {
    id: 3,
    data: [
      {
        text: "Magic Mouse 2",
        main: true
      },
      {
        text: "Black"
      },
      {
        text: "Accessories"
      },
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "$99"
      },
      {
        text: "0.2 lb."
      }
    ]
  },
  {
    id: 4,
    data: [
      {
        text: "Apple Watch",
        main: true
      },
      {
        text: "Black"
      },
      {
        text: "Watches"
      },
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "$199"
      },
      {
        text: "7.0 lb."
      }
    ]
  },
  {
    id: 1,
    data: [
      {
        text: "Apple MacBook Pro 17",
        main: true
      },
      {
        text: "Silver"
      },
      {
        text: "Laptop"
      },
      {
        text: "Yes"
      },
      {
        text: "Yes"
      },
      {
        text: "$2999"
      },
      {
        text: "3.0 lb."
      }
    ]
  },
  {
    id: 2,
    data: [
      {
        text: "Microsoft Surface Pro",
        main: true
      },
      {
        text: "White"
      },
      {
        text: "Laptop PC"
      },
      {
        text: "No"
      },
      {
        text: "Yes"
      },
      {
        text: "$1999"
      },
      {
        text: "1.0 lb."
      }
    ]
  },
  {
    id: 3,
    data: [
      {
        text: "Magic Mouse 2",
        main: true
      },
      {
        text: "Black"
      },
      {
        text: "Accessories"
      },
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "$99"
      },
      {
        text: "0.2 lb."
      }
    ]
  },
  {
    id: 4,
    data: [
      {
        text: "Apple Watch",
        main: true
      },
      {
        text: "Black"
      },
      {
        text: "Watches"
      },
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "$199"
      },
      {
        text: "7.0 lb."
      }
    ]
  },
  {
    id: 1,
    data: [
      {
        text: "Apple MacBook Pro 17",
        main: true
      },
      {
        text: "Silver"
      },
      {
        text: "Laptop"
      },
      {
        text: "Yes"
      },
      {
        text: "Yes"
      },
      {
        text: "$2999"
      },
      {
        text: "3.0 lb."
      }
    ]
  },
  {
    id: 2,
    data: [
      {
        text: "Microsoft Surface Pro",
        main: true
      },
      {
        text: "White"
      },
      {
        text: "Laptop PC"
      },
      {
        text: "No"
      },
      {
        text: "Yes"
      },
      {
        text: "$1999"
      },
      {
        text: "1.0 lb."
      }
    ]
  },
  {
    id: 3,
    data: [
      {
        text: "Magic Mouse 2",
        main: true
      },
      {
        text: "Black"
      },
      {
        text: "Accessories"
      },
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "$99"
      },
      {
        text: "0.2 lb."
      }
    ]
  },
  {
    id: 4,
    data: [
      {
        text: "Apple Watch",
        main: true
      },
      {
        text: "Black"
      },
      {
        text: "Watches"
      },
      {
        text: "Yes"
      },
      {
        text: "No"
      },
      {
        text: "$199"
      },
      {
        text: "7.0 lb."
      }
    ]
  },
])
</script>