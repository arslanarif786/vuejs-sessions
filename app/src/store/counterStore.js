import { defineStore } from 'pinia'
import { ref } from 'vue'

// export const useCounterStore = defineStore("counter", {
//   state: () => ({
//     count: 10,
//     name: "Eduardo",
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2, /// 10 x 2 = 20
//   },
//   actions: {
//     increment() {
//       this.count++;
//       console.log('count---->', this.count, this.name)
//     },
//   },
// });

export const useCounterStore = defineStore('counter', () => {

    const count = ref(0)
    const name = ref('Bojan')
    const of3Count = ref(0)
    const of5Count = ref(0)

     //const doubleCount = computed(() => count.value * 2)

    const increment = () => {
      count.value++
       console.log('count--->', count.value)
    }

    const doubleIncrement = () => {
        count.value = count.value + 2
         console.log('double count--->', count.value)
      }

    // make the table of 3
    const theTableOf3 = () => {
      of3Count.value = of3Count.value + 3
      console.log('the table of 3 count--->', of3Count.value)    
    }

    // make the table of 5
    const theTableOf5 = () => {
      of5Count.value = of5Count.value + 5
      console.log('the table of 5 count--->', of5Count.value)
    }
    return { count, of3Count, of5Count, name, increment, doubleIncrement, theTableOf3, theTableOf5 }
  
  })