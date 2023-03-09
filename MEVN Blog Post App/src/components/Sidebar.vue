<template>
    <div class="sidebar">
    <el-button :icon="ArrowLeft" circle @click="toggleMenu"/>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" @click="navigateHome">
        <el-icon><House /></el-icon>
        <template #title>
          <span>Home</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2" @click="navigateAbout">
        <el-icon><InfoFilled /></el-icon>
        <template #title>
          <span>About</span>
        </template>
      </el-menu-item>
      <el-menu-item index="1" @click="navigateEdit">
        <el-icon><Edit /></el-icon>
        <template #title>
          <span>Edit</span>
        </template>
      </el-menu-item>
    </el-menu>
</div>
  </template>
  
  <script lang="ts" setup>
  import {useRouter} from "vue-router"
  import { ref } from 'vue'
  import {
    InfoFilled,
    House,
    ArrowLeft,
    Edit
  } from '@element-plus/icons-vue'
  
  methods:{
    
  }
  const isCollapse = ref(true)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  
  const toggleMenu = () => {
    isCollapse.value = !isCollapse.value 
  }
  
  const router = useRouter()

  const navigateHome = () => {
    router.push('/')
  }
  
  const navigateAbout = () => {
    router.push('/about')
  }
  
  const navigateEdit = () => {
    router.push('/add-post')
  }
  </script>
  
  <style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;

  }
  </style>
  
  
  