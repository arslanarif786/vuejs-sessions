<script setup>
import { inject } from "vue"
import { useCounterStore } from '@/store/counterStore'
const counterStore = useCounterStore()

const { grandParentData } = inject("data")

</script>
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VUE 3</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="item in grandParentData" :key="item.name" class="nav-item" >
          <a class="nav-link" href="#">{{ item.name }}</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="container-fluid mt-5 pt-5">
  <div class="row">
    <div class="col-12">
      <h1>Data Printing</h1>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Provide/Inject</h5>
          <p class="card-text">{{ grandParentData }}</p>
          <h5 class="card-title">Store Counter</h5>
          <p class="card-text">{{ counterStore.count }}</p>
        </div>
      </div>
    </div>
  </div>
  <button @click="counterStore.theTableOf3"> Parent Button Table of 3 </button>
  <button @click="counterStore.theTableOf5"> Parent Button Table of 5 </button>
</div>
</template>