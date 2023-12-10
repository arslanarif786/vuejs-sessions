<script setup>
import { ref, watch } from 'vue'

const toggle = ref(false)
const name = ref('ABC')

watch(toggle, (newVal) => {
  console.log(`watcher running ----- toggle new value => ${newVal}`)
  if(newVal) {
    name.value = 'XYZ'
  } else {
    name.value = 'ABC'
  }
})

</script>

<template>
  <div>
    <button @click="toggle = !toggle" style="background: green; color: white;">
      Submit
    </button>
    <p> name is: {{ name }} </p>
  </div>
</template>
