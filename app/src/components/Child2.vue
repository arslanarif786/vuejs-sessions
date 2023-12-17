<script setup>
const props = defineProps({
  propData: Object
})

// it is now a dynamic component and taking the dynamic data from the parent component
</script>
<template>
    <div>
        {{ propData }}
    </div>
    <br>
</template>