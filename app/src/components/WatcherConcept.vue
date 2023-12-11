<script setup>
import { ref, watch } from 'vue'

const toggle = ref(false)
const person = ref({
  name: 'ABC',
  age: '20'
})

const arrayOfObjects = ref([
    {
      name: 'ABC',
      age: '20'
    },
    {
      name: 'ABC',
      age: '20'
    },
  ])

const arrayOfArrays = ref([
  [
    {
      name: 'ABC',
      age: '20'
    },
    {
      name: 'ABC',
      age: '20'
    },
  ],
  [
    {
      name: 'ABC',
      age: '20'
    },
    {
      name: 'ABC',
      age: '20'
    },
  ],
  [
    {
      name: 'ABC',
      age: '20'
    },
    {
      name: 'ABC',
      age: '20'
    },
  ]
])

// watcher ----> it looks to states everytime even if we change its data or not

watch(toggle, (newVal) => {
  console.log(`watcher running ----- toggle new value => ${newVal}`)
  if(newVal) {
    person.value.name = 'XYZ'
  } else {
    person.value.name = 'ABC'
  }
},
// { immediate: true },   // purpose to use this to get sudden change whenever you face lazy changing behavior in your watcher
// { deep: true }         // purpose to handle and play with nested level of data structures
)

// watch([email, phoneNumber, first_name, last_name],
//   ([newEmail, newPhNumber, newFirstName, newLastName]) => {
//     if(newFirstName) {
//       changeFName.value = true
//     }
//     if(newLastName) {
//       changeLName.value = true
//     }
//     if(newEmail) {
//       changeEmail.value = true
//     }
//     if(newPhNumber) {
//       changePhNumber.value = true
//     }
//     checkEmail.value = validateEmail(newEmail)
//     checkPhoneNumber.value = (newPhNumber.toString().length >= 9 && /^[0-9+-]+$/.test(newPhNumber)) ? true : false;
//     checkFirstName.value = newFirstName.length > 0 ? true : false
//     checkLastName.value = newLastName.length > 0 ? true : false
// }, { immediate: true })



// const props = defineProps({
//   isOpen: Boolean,
// })

// const newService = ref({
//   name: '',
//   price: '',
//   picture: ''
// })

// watch(props, (newVal) => {
//   if(!newVal.isOpen) {
//     newService.value.name = ''
//     newService.value.price = ''
//     newService.value.picture = ''
//   }
// })

</script>

<template>
  <div>

    <button
      @click="toggle = !toggle"
      style="background: green; color: white;">
      Submit
    </button>

    <p> name is: {{ person }} </p>
  </div>
</template>
