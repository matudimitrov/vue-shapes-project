<script setup lang="ts">
import { useShapesListStore } from '../stores/shapesList.ts'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { getTriangleClasses } from '../helpers/triangleHelper'
import type { TriangleShape } from '../types'

const store = useShapesListStore()

const { trianglesList } = storeToRefs(store)

const selectedTriangle = ref<number | null>(null)

function addTriangle(triangle: TriangleShape) {
  store.addTriangle(triangle)
}

function clearAll() {
  if (trianglesList.value.length > 0) {
    store.clearAllTriangles()
  }
}

const direction = ref<string>('up')

const handleSubmit: void = () => {
  const newTriangleClasses = getTriangleClasses(direction.value)
  addTriangle({ classes: newTriangleClasses, isSelected: false })
  direction.value = 'up'
}

const changeSelectedTriangle: void = (event: MouseEvent) => {
  console.log(event)
  if (selectedTriangle.value === event.target.id) {
    console.log(111)
    selectedTriangle.value = null
  } else {
    selectedTriangle.value = event.target.id
  }
}

const selectedTriangleDis = computed(() => {
  return trianglesList.value.find((tr) => tr.id == selectedTriangle.value)
})
</script>

<template>
  <h1 class="flex text-2xl justify-around py-6 font-extrabold">Triangles Page</h1>
  <div class="flex flex-col md:flex-row justify-between">
    <div class="w-full md:w-4/6">
      <h2 class="flex text-lg justify-around py-6 font-medium">Current Triangles</h2>
      <div class="flex justify-around w-full grid-cols-6 grid pl-4">
        <div
          v-for="triangle in trianglesList"
          class="my-2"
          :class="[
            triangle.classes,
            triangle.id == selectedTriangle ? 'brightness-200 scale-125' : '',
            'hover:scale-125 duration-300'
          ]"
          :key="triangle.id"
          :id="triangle.id"
          @click="changeSelectedTriangle($event)"
        >
          <!-- <span><i class="bi bi-x"></i></span> -->
        </div>
      </div>
    </div>
    <div class="pl-6 w-full md:w-2/6 pb-6">
      <h2 class="flex text-lg justify-start py-6 font-medium">Create a new triangle</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select direction of the triangle</label
          >
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="direction"
            v-model="direction"
          >
            <option value="up">Up</option>
            <option value="down">Down</option>
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-gray-900 text-gray-100 hover:bg-gray-700 font-bold py-2 px-4 rounded-full mt-2.5"
        >
          Add new triangle
        </button>
      </form>
      <button
        @click="clearAll"
        class="bg-red-900 text-gray-100 hover:bg-gray-700 font-bold py-2 px-4 rounded-full mt-2.5"
      >
        Clear All
      </button>
      <div v-if="selectedTriangle">
        <h3 class="flex text-lg justify-around py-6 font-medium">This is the selected element</h3>
        <div class="my-2" :class="selectedTriangleDis.classes"></div>
      </div>
    </div>
  </div>
</template>
