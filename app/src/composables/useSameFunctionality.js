import {onMounted, ref, watch} from "vue"

// the first purpose is to clean the code
// to separate javascript functionality from html 
export default function useSameFunctionality (){

    // data properties
  const field1 = ref('')
  const field2 = ref('')
  const field3 = ref(0)
  const field4 = ref('')
  const field5 = ref('')
  const field6 = ref(null)
  const field7 = ref(null)

  onMounted(() => {
    console.log('mounted hoook is running--->')
  })

  watch(field3, (newVal) => {
    console.log('watcher field 3 value---->', newVal)
  })

  // functions or methods
  const updateField1 = (event) => {
      console.log('field1 --->', event.target.value)
      field1.value = event.target.value
  }

  const updateField2 = (typedInput) => {
      console.log('field2 --->', typedInput.data)
      field2.value = typedInput.data
  }

  const updateField7 = (event) => {
      console.log('field7 --->', event.target.value)
      field7.value = event.target.value
  }
  return {
    field1,
    field2,
    field3,
    field4,
    field5,
    field6,
    field7,
    updateField1,
    updateField2
  }
}
