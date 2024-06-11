export interface TriangleShape {
  id?: number
  isSelected?: boolean
  classes: string
}

export interface SquareShape {
  id: number
  isSelected: boolean
  classes: string
}

export type Color = 'red' | 'yellow' | 'blue' | 'green'
