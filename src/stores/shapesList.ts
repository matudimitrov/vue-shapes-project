import type { SquareShape, TriangleShape } from '../types'
import { defineStore } from 'pinia'

export const useShapesListStore = defineStore('shapesList', {
  state: () => ({
    trianglesList: [] as TriangleShape[],
    squaresList: [] as SquareShape[],
    id: 0
  }),
  actions: {
    addTriangle(triangle: TriangleShape) {
      this.trianglesList.push({ ...triangle, id: this.id++ })
    },
    clearAllTriangles() {
      this.trianglesList = []
    },
    addSquare(square: SquareShape) {
      this.squaresList.push({ ...square, id: this.id++ })
    },
    clearAllSquares() {
      this.squaresList = []
    }
    // deleteTriangle(id) {
    //   this.trianglesList = this.trianglesList.filter((object) => {
    //     return object.id !== id;
    //   });
    // },
  }
})
