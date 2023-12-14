import {ref} from "vue"

export default function useComposableFormTask (){

  const userName = ref(null)
  const email = ref(null)
  const age = ref(null)
  const dateOfbirth = ref(null)
  const password = ref(null)
  const confirmPassword = ref(null)

  const updateUserName = (event) => {
      console.log('updateUserName --->', event.target.value)
      updateUserName.value = event.target.value
  }

  const updateEmail = (event) => {
      console.log('updateEmail --->', event.target.value)
      updateEmail.value = event.target.value
  }

  return {
    userName,
    email,
    age,
    dateOfbirth,
    password,
    confirmPassword,
    updateUserName,
    updateEmail
  }
}
