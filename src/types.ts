export type LetterState = 'correct' | 'present' | 'absent' | 'empty'

export interface Tile {
  letter: string
  state: LetterState
}

export interface GuessRow {
  tiles: Tile[]
}

export interface Scripture {
  reference: string
  text: string
}

export interface DailyPuzzle {
  solution: string
  scripture: Scripture
  dateKey: string
}
