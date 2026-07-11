import type { DailyPuzzle } from './types'

export const dailyPuzzles: DailyPuzzle[] = [
  {
    solution: 'GRACE',
    dateKey: '2026-07-11',
    scripture: {
      reference: 'Ephesians 2:8',
      text: 'For by grace you have been saved through faith...',
    },
  },
  {
    solution: 'LIGHT',
    dateKey: '2026-07-12',
    scripture: {
      reference: 'John 8:12',
      text: 'I am the light of the world...',
    },
  },
]

export function getTodayPuzzle(): DailyPuzzle {
  const today = new Date()
  const key = today.toISOString().slice(0, 10)
  const match = dailyPuzzles.find(p => p.dateKey === key)
  return match ?? dailyPuzzles[0]
}
