<script setup lang="ts">
import { useShapesListStore } from '@/stores/shapesList'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { getSquareClasses } from '../helpers/squareHelper'
import type { SquareShape } from '@/types'

const store = useShapesListStore()

const { squaresList } = storeToRefs(store)

const selectedSquare = ref<number | null>(null)

function addSquare(square: SquareShape) {
  store.addSquare(square)
}

function clearAll() {
  if (squaresList.value.length > 0) {
    store.clearAllSquares()
  }
}

const color = ref<string>('red')

const handleSubmit: void = () => {
  const newSquareClasses = getSquareClasses(color.value)
  console.log(newSquareClasses)
  addSquare({ classes: newSquareClasses, isSelected: false })
  color.value = 'red'
}

const changeSelectedSquare: void = (event: MouseEvent) => {
  selectedSquare.value = event.target.id
}
</script>

<template>
  <h1 class="flex text-2xl justify-around py-6 font-extrabold">Squares Page</h1>
  <div class="flex flex-col md:flex-row justify-between">
    <div class="w-full md:w-4/6">
      <h2 class="flex text-lg justify-around py-6 font-medium">Current Squares</h2>
      <div class="flex justify-around w-full grid-cols-6 grid pl-4">
        <div
          v-for="square in squaresList"
          class="my-2"
          :class="[
            square.classes,
            square.id == selectedSquare ? 'brightness-200 scale-125' : '',
            'hover:scale-125 duration-300'
          ]"
          :key="square.id"
          :id="square.id"
          @click="changeSelectedSquare($event)"
        ></div>
      </div>
    </div>
    <div class="pl-6 w-full md:w-2/6 pb-6">
      <h2 class="flex text-lg justify-start py-6 font-medium">Create a new square</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select color of the square</label
          >
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="color"
            v-model="color"
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-gray-900 text-gray-100 hover:bg-gray-700 font-bold py-2 px-4 rounded-full mt-2.5"
        >
          Add new square
        </button>
      </form>
      <button
        @click="clearAll"
        class="bg-red-900 text-gray-100 hover:bg-gray-700 font-bold py-2 px-4 rounded-full mt-2.5"
      >
        Clear All
      </button>
    </div>
    <div></div>
  </div>
</template>
