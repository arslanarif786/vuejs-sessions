<script setup>
import ParentFile from "./ParentFile.vue"
import { onMounted, provide, ref } from "vue"
import { useCounterStore } from '@/store/counterStore'

const counterStore = useCounterStore()

onMounted(() => {
  console.log('before the table of 3 count--->', counterStore.of3Count)
  console.log('after  the table of 3 count--->', counterStore.of3Count)
  console.log('store the teable of 3 count--->', counterStore.of3Count)
  console.log('before the table of 5 count--->', counterStore.of5Count)
  console.log('after  the table of 5 count--->', counterStore.of5Count)
  console.log('store the teable of 5 count--->', counterStore.of5Count)
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