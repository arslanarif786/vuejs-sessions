<script setup>
import { computed, onMounted, ref } from 'vue'
import ChildFile from './ChildFile.vue'

const author = ref({
  name: 'John Doe',
  books: []
})

const publishedBooksMessage = computed(() => {
    return author.value.books.length > 0 ? 'length is greater than 0' : 'length is Zero'
})

//created hook
console.log('created hook--->', publishedBooksMessage.value)

//mounted hook
onMounted(()=> {
    setTimeout(() => {
        author.value.books = [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
        ]
        console.log('mounted hook--->', publishedBooksMessage.value)
    }, 2000);
})



</script>



<template>
     <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <ChildFile :authorData="author"/>
  </template>