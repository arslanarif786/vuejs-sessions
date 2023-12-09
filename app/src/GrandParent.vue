<script setup>
import ParentFile from "./ParentFile.vue"
import { onMounted, provide, ref, watch } from "vue"
import { useCounterStore } from '@/store/counterStore'

const counterStore = useCounterStore()

onMounted(() => {
  console.log('before count--->', counterStore.count)

  counterStore.doubleIncrement()

  console.log('after count--->', counterStore.count)
  // console.log('store--->', coun);
})

// watch(counterStore, (newVal) => {
//   console.log('watcher is --> grand parent file count--->', newVal.count)
// })

// const getStateOfStore = () => {
//   console.log('grand parent file count--->', counterStore.count)
// }


const grandParentData = ref([
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Services",
  },
  {
    name: "Price",
  },
  {
    name: "Contact",
  },
])
provide("data", { grandParentData })
</script>
<template>
  <button @click="counterStore.tableOfThree"> table of 3 </button>
  
  <ParentFile />
</template>