<template>
    <button type="submit" class="btn btn-primary">
        <slot></slot>
    </button>
</template>
<script setup>
        import { defineEmits, onMounted,ref } from "vue"
        const emits = defineEmits(['pass-message-to-parent'])

        const dataForTheMessage = ref ([
        {
            message: "This message comes from the child file via the emit concept",
        }
        ])

        const childFunction = () => {
            console.log('child function is runing')
            emits('pass-message-to-parent', dataForTheMessage.value)
        }

        onMounted(() => {
            childFunction()
        })
</script>