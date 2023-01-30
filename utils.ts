export const randomFromArray = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)]

export const randomInRange = (from: number, to: number): number =>
  from + Math.floor(Math.random() * (to - from))
