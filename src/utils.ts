import type { GuessRow, LetterState } from './types'

export function createEmptyBoard(rows = 6, cols = 5): GuessRow[] {
  return Array.from({ length: rows }, () => ({
    tiles: Array.from({ length: cols }, () => ({
      letter: '',
      state: 'empty' as LetterState,
    })),
  }))
}

export function evaluateGuess(guess: string, solution: string): LetterState[] {
  const result: LetterState[] = Array(guess.length).fill('absent')
  const solutionChars = solution.split('')

  // First pass: correct
  guess.split('').forEach((ch, i) => {
    if (solutionChars[i] === ch) {
      result[i] = 'correct'
      solutionChars[i] = '*'
    }
  })

  // Second pass: present
  guess.split('').forEach((ch, i) => {
    if (result[i] === 'correct') return
    const idx = solutionChars.indexOf(ch)
    if (idx !== -1) {
      result[i] = 'present'
      solutionChars[idx] = '*'
    }
  })

  return result
}
