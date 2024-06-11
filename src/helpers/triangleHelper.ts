export function getTriangleClasses(direction: string): string {
  switch (direction) {
    case 'up':
      return `w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-yellow-500 border-r-[20px] border-r-transparent
    md:border-l-[50px] md:border-l-transparent md:border-b-[75px] md:border-b-yellow-500 md:border-r-[50px] md:border-r-transparent`
    case 'right':
      return `w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-l-green-500 border-b-[20px] border-b-transparent
      md:border-t-[50px] md:border-t-transparent md:border-l-[75px] md:border-l-green-500 md:border-b-[50px] md:border-b-transparent`
    case 'down':
      return `w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-red-500 border-r-[20px] border-r-transparent
      md:border-l-[50px] md:border-l-transparent md:border-t-[75px] md:border-t-red-500 md:border-r-[50px] md:border-r-transparent
      `
    case 'left':
      return `w-0 h-0 border-t-[20px] border-t-transparent border-r-[30px] border-r-blue-500 border-b-[20px] border-b-transparent
      md:border-t-[50px] md:border-t-transparent md:border-r-[75px] md:border-r-blue-500 md:border-b-[50px] md:border-b-transparent`
    default:
      throw new Error('Invalid direction')
  }
}
