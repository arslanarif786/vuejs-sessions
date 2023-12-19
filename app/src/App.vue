<script setup>
import GrandParentVFor from '@/components/task/GrandParentVFor.vue';
// import ComputedFunction from './components/ComputedFunction.vue';
// import GrandParent from './components/GrandParent.vue'
// import ComputedConcept from "./components/ComputedConcept.vue"
// import WatcherConcept from "./components/WatcherConcept.vue"
// import DataBindingTask from "./components/DataBindingTask.vue"
// import StyledButton from "./components/StyledButton.vue";
// import ComposableFormTask from "./components/ComposablesFormTask.vue";
// import WatcherTask from "./components/WatcherTask.vue"
// import { ref } from 'vue';

// const toggle = ref(false)
</script>


<template>
   <!-- <button @click="toggle = true"> Button </button>
   <div class="first-div" id="modals">
      <div class="second-div">
         <GrandParent />
      </div>
   </div> -->

    <!-- Teleport -->
   <!-- <Teleport to="#modals">
      <div v-if="toggle" class="teleported-div">
         <div>A</div>
         <div>B</div>
      </div>
   </Teleport> -->
<GrandParentVFor />
</template>
