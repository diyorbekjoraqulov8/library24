import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export default defineStore('index', () => {
  const accessToken = ref(null)
  const refreshToken = ref(null)
  return { 
    accessToken
  }
})
