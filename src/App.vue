<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="h-screen">
    <NavigationBar />
    <RouterView />
  </div>
</template>
