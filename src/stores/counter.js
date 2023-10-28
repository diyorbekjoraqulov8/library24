import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import axios from 'axios';
// const worker = new Worker(new URL('@/workers/worker.js', import.meta.url));

export const useCounterStore = defineStore('counter', () => {
  // Variables
  const count = ref(0)
  const products = ref([
    {
      id: 1,
      name: 'Jenny Quintana: Reading and writing 6 (+CD)',
      href: '#',
      price: '59 000',
      imgSrc: '/book1.svg',
      imgAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      stars:4.3
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imgSrc: '/book2.svg',
      imgAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      stars:4
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imgSrc: '/book3.svg',
      imgAlt: 'Person using a pen to cross a task off a productivity paper card.',
      stars:3.5
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imgSrc: '/book1.svg',
      imgAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      stars:5
    },
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imgSrc: '/book2.svg',
      imgAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      stars:4
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imgSrc: '/book3.svg',
      imgAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      stars:2
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imgSrc: '/book1.svg',
      imgAlt: 'Person using a pen to cross a task off a productivity paper card.',
      stars:4.5
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imgSrc: '/book2.svg',
      imgAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      stars:5
    },
  ])

  // Methods
  const doubleCount = computed(() => count.value * 2)
  // Api Requests
  async function getProducts() {
    // console.log('hi');
    // worker.postMessage('worker');
    // worker.onmessage = (event) => {
    //   console.log(event.data);
    // };
    // await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    // console.log('end api');
  }

  return { count, doubleCount, products, getProducts }
})
