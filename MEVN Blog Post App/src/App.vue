<script setup>
  import {RouterView} from "vue-router"
  import SideBar from './components/Sidebar.vue'
</script>

<template>
  <div class="container">
    <SideBar/>
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
}
</style>