<template>
    <div>
      <input v-model="num1" id="num1" type="number" />
      <input v-model="num2" id="num2" type="number" />
      <p>Sum: {{ sum }}</p>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  
  export default {
    setup() {
      const num1 = ref(0)
      const num2 = ref(0)
  
      const sum = computed(() => {
        return num1.value + num2.value
      })
  
      return {num1, num2,sum}
    }
  }
  </script>
  