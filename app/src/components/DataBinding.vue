<template>
    <div>Data binding in this component</div>

    <input placeholder="Enter 1st varibale" :value="variableA" @input="changeVaraibleA($event)"/><br>

    <input placeholder="Enter 2nd varibale" v-model="variableB" /><br>
    <input type="checkbox" placeholder="Enter 3rd varibale" v-model="variableC"/><br>
    <input placeholder="Enter 4th varibale"/><br>
    <input placeholder="Enter 5th varibale"/><br>
</template>


<script setup>
// single way data binding
import { ref } from 'vue';

const variableA = ref('')
const variableB = ref(null)
const variableC = ref(0)
const variableD = ref(0)
const variableE = ref(0)

const changeVaraibleA = (typedInput) => {
    console.log('--->', typedInput.data)
    variableA.value = typedInput.data
}

// two way data binding
</script>