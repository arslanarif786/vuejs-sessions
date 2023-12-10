<script setup>
import ChildFile from "./ChildFile.vue"
import { useCounterStore } from '@/store/counterStore'
const counterStore = useCounterStore()
</script>


<template>
  <button @click="counterStore.doubleIncrement"> Parent Button </button>
  <ChildFile />
</template>