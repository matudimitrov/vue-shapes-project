<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from './ButtonStart.vue'
import { ref } from 'vue'

const open = ref(true)

function openMenu() {
  open.value = !open.value
}
</script>

<template>
  <div
    class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow flex flex-col items-start md:flex-row justify-between md:items-center"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-green-500 text-xl mr-2">
        <i class="bi-bounding-box"></i>
      </span>
      <RouterLink to="/" class="text-xl">Shapes</RouterLink>
    </div>
    <span @click="openMenu()" class="absolute md:hidden right-6 top-1.5 cursor-pointer">
      <i :class="open ? 'bi bi-x' : 'bi bi-filter-left'"></i>
    </span>
    <nav
      v-if="open"
      class="flex flex-col gap-y-0.5 my-1 md:flex md:flex-row md:items-center ease-in duration-700"
      :class="open ? 'left-0' : 'left-[-100%]'"
    >
      <RouterLink to="/" class="md:mx-4 text-x1 hover:text-green-500">Triangles</RouterLink>
      <RouterLink :to="{ name: 'SquaresView' }" class="md:mx-4 text-x1 hover:text-green-500"
        >Squares</RouterLink
      >
      <RouterLink :to="{ name: 'MixedShapesView' }" class="md:mx-4 text-x1 hover:text-green-500"
        >Mixed Shapes</RouterLink
      >
      <Button class="mt-1" />
    </nav>
  </div>
</template>
