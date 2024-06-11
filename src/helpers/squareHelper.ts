export function getSquareClasses(color: string): string {
  switch (color) {
    case 'red':
      return 'w-8 h-8 md:w-20 md:h-20 bg-red-500'
    case 'blue':
      return 'w-8 h-8 md:w-20 md:h-20 bg-blue-500'
    case 'yellow':
      return 'w-8 h-8 md:w-20 md:h-20 bg-yellow-500'
    case 'green':
      return 'w-8 h-8 md:w-20 md:h-20 bg-green-500'
    default:
      throw new Error('Invalid direction')
  }
}
