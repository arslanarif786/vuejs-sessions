<template>
    <div>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="John Doe" v-model="newPerson.name" />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" placeholder="25" v-model="newPerson.age" />
      </div>
      <div>
        <label for="city">City:</label>
        <input type="text" id="city" placeholder="Example City" v-model="newPerson.city" />
      </div>
      <button @click="toggleBoolean">Toggle Boolean</button>
      <button @click="toggleBoolean1">Toggle Boolean 1</button>
      <button @click="updatePerson">Update Person</button>
      <p>Boolean 1: {{ boolean1 }}</p>
      <p>Boolean 2: {{ boolean2 }}</p>
      <p>Person: {{ person.name }}, {{ person.age }}, {{ person.city }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  const boolean1 = ref(false);
  const boolean2 = ref(true);
  
  const person = ref({ name: 'John Doe', age: 25, city: 'Example City' })
  const newPerson = ref({ name: '', age: null, city: '' })
  
  const toggleBoolean = () => {
    boolean1.value = !boolean1.value;
  };
  
  const toggleBoolean1 = () => {
    boolean2.value = !boolean2.value;
  };
  
  const updatePerson = () => {
    person.value.name = newPerson.value.name;
    person.value.age = newPerson.value.age;
    person.value.city = newPerson.value.city;
  };
  
  watch([boolean1, boolean2, person], ([newBoolean1, newBoolean2, newPersonValue]) => {
    // console.log('newProps---->', newProps)
    console.log(`Boolean 1 changed to ${newBoolean1}`);
    console.log(`Boolean 2 changed to ${newBoolean2}`);
    console.log('Person object changed to', newPersonValue);
  },{ deep: true })
  
  </script>
  