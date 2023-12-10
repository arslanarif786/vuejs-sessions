<script setup>
import ParentFile from "./ParentFile.vue"
import { onMounted, provide, ref } from "vue"
import { useCounterStore } from '@/store/counterStore'

const counterStore = useCounterStore()

onMounted(() => {
  console.log('before count--->', counterStore.count)
  console.log('after count--->', counterStore.count)
   console.log('store--->', counterStore.count)
})

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
  <ParentFile />
</template>