<template>
    <div>
        <!-- One-way data binding -->
        <label for="field1">Field 1 (One-way binding):</label>
        <input type="text" id="field1" :value="field1" @input="updateField1"><br>
        <br>
        <label for="field2">Field 2 (One-way binding):</label>
        <input type="text" id="field2" :value="field2" @input="updateField2"><br>
        <br>
        <!-- Two-way data binding using v-model -->
        <label for="field3">Field 3 (Two-way binding):</label>
        <input type="number" id="field3" v-model="field3"><br>
        <br>
        <label for="field4">Field 4 (Two-way binding):</label>
        <input type="date" id="field4" v-model="field4"><br>
        <br>
        <label for="field5">Field 5 (Two-way binding):</label>
        <input type="text" id="field5" v-model="field5"><br>
        <br>
        <label for="field6">Field 6 (Two-way binding):</label>
        <input type="checkbox" id="field6" v-model="field6"><br>
        <br>
        <label for="field7">Field 7 (One-way binding):</label>
        <input type="radio" id="field7" :value="field7" @input="updateField7"><br>
    </div>
</template>

<script setup>
    import useSameFunctionality from '../composables/useSameFunctionality'
    const { field1, field2, field3, field4, field5,field6, field7, updateField1, updateField2 } = useSameFunctionality()
</script>