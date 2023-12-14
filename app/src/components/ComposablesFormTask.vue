<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-12 mb-5 mt-5">
        <form>
            <div class="mb-3">
                <label for="userName">User Name:</label>
                <input type="text" id="userName" class="form-control"  :value="userName" @input="updateUserName">
                <TextBelowField>The user name must be between 2 and 40 characters long.</TextBelowField>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" class="form-control"  :value="email" @input="updateEmail">
                <TextBelowField>We'll never share your email with anyone else.</TextBelowField>
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age:</label>
                <input type="number" id="age" class="form-control"  v-model="age"><br>
                <TextBelowField>The user must be have more than 18 age of live.</TextBelowField>
            </div>
            <div class="mb-3">
                <label for="dateOfbirth" class="form-label">Date Of Birth:</label>
                <input type="date" id="dateOfbirth" class="form-control"  v-model="dateOfbirth"><br>
                <TextBelowField>The user must be born after 9/3/2006.</TextBelowField>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" class="form-control"  v-model="password"><br>
                <TextBelowField>The password must be at least 8 characters long and contain at least one special character, one number and one uppercase character.</TextBelowField>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password:</label>
                <input type="password" id="confirmPassword" class="form-control" v-model="confirmPassword"><br>
                <TextBelowField>Please note that the password must match the previously entered password.</TextBelowField>
            </div>
            <StyledButtonFormTask @pass-message-to-parent="messageFunction">Submit</StyledButtonFormTask> 
        </form>
        </div>
    </div>
  </div>
</template>

<script setup>
    import {ref} from "vue"

    import useComposablesFormTask from '../composables/useComposablesFormTask.js'

    import TextBelowField from '../components/StyledTextBelowFields.vue'

    import StyledButtonFormTask from '../components/StyledButtonFormTask.vue'

    const { userName, email, age, dateOfbirth, password,confirmPassword, updateUserName, updateEmail } = useComposablesFormTask()
    
    const messageData = ref([])
    
    const messageFunction = (data) => {
        console.log("parent function is running")
        console.log("parent message --->", data)
        messageData.value = data
        for (const item of messageData.value) {
        console.log(item.message)
        }
    }

</script>