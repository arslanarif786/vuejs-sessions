<script setup lang="ts">
    import { ref, type Ref } from 'vue';

    const dataPropertiesA: Ref<any> = ref([])
    const dataPropertiesB: Ref<string> = ref('')
    const dataPropertiesC: Ref<Boolean> = ref(false)
    const dataPropertiesD: Ref<Number> = ref(0)
    const dataPropertiesE: Ref<Object> = ref({})
    const dataPropertiesF: Ref<string | Number | Object> = ref('')

    dataPropertiesA.value = ['Bob', 'Alice', 'John', 'Jane']
    dataPropertiesB.value = 'First Task String'
    dataPropertiesC.value = true
    dataPropertiesD.value = 1
    dataPropertiesE.value = { name: 'First Task' }
    dataPropertiesF.value = 'New First Task String'


    function functionForDataPropertiesA(a: any) {
    console.log(a)
    }

    function functionForDataPropertiesB(b: string) {
    console.log(b)
    }

    function functionForDataPropertiesC(c: Boolean) {
    console.log(c)
    }

    function functionForDataPropertiesD(d: Number) {
    console.log(d)
    }

    function functionForDataPropertiesE(e: Object) {
    console.log(e)
    }

    function functionForDataPropertiesF(f: string | Number | Object) {
    console.log(f)
    }

    const arrowFunctionWithMultipleVariables = (a: String | Number, b: String, c: Object,d: Boolean) => {
    console.log(a, b, c, d)
    }

    functionForDataPropertiesA(['Bob', 'Alice', 'John', 'Jane'])
    functionForDataPropertiesB('First Task String From Function')
    functionForDataPropertiesC(true)
    functionForDataPropertiesD(2)
    functionForDataPropertiesE({ name: 'First Task Object From Function' })
    functionForDataPropertiesF('New First Task String From Function')
    arrowFunctionWithMultipleVariables(1,'First Task Multiple Variables In Function',{ name: 'First Task Object From Function' },true)
</script>
<template>
    <div>
        <h1>First Task</h1>
        <p>dataPropertiesA: {{ dataPropertiesA }}</p>
        <p>dataPropertiesB: {{ dataPropertiesB }}</p>
        <p>dataPropertiesC: {{ dataPropertiesC }}</p>
        <p>dataPropertiesD: {{ dataPropertiesD }}</p>
        <p>dataPropertiesE: {{ dataPropertiesE }}</p>
        <p>dataPropertiesF: {{ dataPropertiesF }}</p>
    </div>
</template>

