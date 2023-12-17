<script setup>
// import ParentFile from "./ParentFile.vue"
import { onMounted, provide, ref } from "vue"
import Child2 from './Child2.vue'
import { useCounterStore } from '@/store/counterStore'

const counterStore = useCounterStore()

onMounted(() => {
  // console.log('before the table of 3 count--->', counterStore.of3Count)
  // console.log('after  the table of 3 count--->', counterStore.of3Count)
  // console.log('store the teable of 3 count--->', counterStore.of3Count)
  // console.log('before the table of 5 count--->', counterStore.of5Count)
  // console.log('after  the table of 5 count--->', counterStore.of5Count)
  // console.log('store the teable of 5 count--->', counterStore.of5Count)
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

const studentData = ref([
  {
    name: 'john',
    age: '20',
    class: '10'
  },
  {
    name: 'Mike',
    age: '22',
    class: '10'
  },
  {
    name: 'Ellie',
    age: '20',
    class: '10'
  },
  {
    name: 'Mikle',
    age: '19',
    class: '10'
  },
  {
    name: 'Watson',
    age: '21',
    class: '10'
  },
])

const toggleTeleport = ref(false)
</script>

<template>
  <!-- <button @click="counterStore.tableOfThree"> table of 3 </button> -->

  <!-- Teleport Concept -->

  <!-- // portals // react -->
  <Teleport to="#modals">
      <div class="third-div">
        <p>Hello from Teleport</p>
      </div>
  </Teleport>

  <!-- v-for loop on child to render the dynamic component into the DOM -->
  <Child2 :prop-data="student" v-for="student in studentData" :key="student" />
  
  <!-- <ParentFile /> -->
</template>