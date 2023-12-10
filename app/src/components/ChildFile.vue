<script setup>
// import GrandChild from "./GrandChild.vue"
const props = defineProps({
  authorData: Object
})

</script>
<template>
  <!-- <GrandChild /> -->
  {{ authorData }}
</template>