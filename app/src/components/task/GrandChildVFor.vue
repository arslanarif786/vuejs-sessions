<script setup>
import { ref } from 'vue'
const toggleTeleport = ref(false)
const teleportComponent = ref('teleport')
const props = defineProps({
  productsData: Object
})
//for HTML use this template https://bbbootstrap.com/snippets/bootstrap-ecommerce-category-product-list-page-93685579
</script>
<template>
<div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" :src="productsData.image"></div>
                <div class="col-md-6 mt-1">
                    <h5>{{ productsData.name }}</h5>
                    <p class="text-justify para mb-0">{{ productsData.description }}</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">{{ productsData.price }}</h4>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                        <a :href="productsData.productLink" class="btn btn-primary btn-sm">Details</a>
                        <button @click="toggleTeleport = true" class="btn btn-outline-primary btn-sm mt-2" type="button">Start Teleport</button>
                        <div class="second-div">
                            <component :is="teleportComponent">
                                <div v-if="toggleTeleport" class="third-div">
                                    <p>Hello from Teleport And Third Div</p>
                                    <button @click="toggleTeleport = false" class="btn btn-outline-primary btn-sm mt-2" type="button">Stop Teleport</button>
                                </div>
                            </component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>