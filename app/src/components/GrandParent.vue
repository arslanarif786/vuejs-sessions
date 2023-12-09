<script setup>
import ParentFile from "./ParentFile.vue"
import { provide, ref } from "vue"

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