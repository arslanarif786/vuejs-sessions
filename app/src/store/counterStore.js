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
    const name = ref('Eduardo')

    // const doubleCount = computed(() => count.value * 2)

    const increment = () => {
      count.value++
    //   console.log('count--->', count.value)
    }

    const doubleIncrement = () => {
        count.value = count.value + 2
        // console.log('double count--->', count.value)
      }
  
    return { count, name, increment, doubleIncrement }
  })


  // make the table of 3
  // make the table of 5