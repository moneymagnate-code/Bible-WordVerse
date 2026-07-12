import React, { useState } from 'react'
import { Header } from './components/Header'
import { GameBoard } from './components/GameBoard'
import { Keyboard } from './components/Keyboard'
import { HelpModal } from './components/HelpModal'
import { StatsModal } from './components/StatsModal'
import { ArchiveModal } from './components/ArchiveModal'
import { createEmptyBoard, evaluateGuess } from './utils'
import { getTodayPuzzle } from './words'
import type { GuessRow, LetterState } from './types'

const MAX_ROWS = 6
const WORD_LENGTH = 5

const App: React.FC = () => {
  const puzzle = getTodayPuzzle()
  const [board, setBoard] = useState<GuessRow[]>(() => createEmptyBoard(MAX_ROWS, WORD_LENGTH))
  const [currentRow, setCurrentRow] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [isSolved, setIsSolved] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [showArchive, setShowArchive] = useState(false)

  function handleKey(letter: string) {
    if (isSolved) return
    if (currentGuess.length >= WORD_LENGTH) return
    setCurrentGuess(prev => prev + letter)
    setBoard(prev => {
      const copy = prev.map(row => ({ tiles: row.tiles.map(t => ({ ...t })) }))
      currentGuess.split('').forEach((ch, idx) => {
        copy[currentRow].tiles[idx].letter = ch
      })
      const nextIndex = currentGuess.length
      if (nextIndex < WORD_LENGTH) {
        copy[currentRow].tiles[nextIndex].letter = letter
      }
      return copy
    })
  }

  function handleBackspace() {
    if (!currentGuess.length || isSolved) return
    setCurrentGuess(prev => prev.slice(0, -1))
    setBoard(prev => {
      const copy = prev.map(row => ({ tiles: row.tiles.map(t => ({ ...t })) }))
      const idx = currentGuess.length - 1
      if (idx >= 0) {
        copy[currentRow].tiles[idx].letter = ''
      }
      return copy
    })
  }

  function handleEnter() {
    if (isSolved) return
    if (currentGuess.length !== WORD_LENGTH) return

    const guess = currentGuess.toUpperCase()
    const solution = puzzle.solution.toUpperCase()
    const states: LetterState[] = evaluateGuess(guess, solution)

    setBoard(prev => {
      const copy = prev.map(row => ({ tiles: row.tiles.map(t => ({ ...t })) }))
      states.forEach((state, idx) => {
        copy[currentRow].tiles[idx].state = state
      })
      return copy
    })

    if (guess === solution) {
      setIsSolved(true)
    } else {
      setCurrentRow(prev => Math.min(prev + 1, MAX_ROWS - 1))
      setCurrentGuess('')
    }
  }

  return (
    <div className="app-shell">
      <div className="app-card">
        <Header
          onHelp={() => setShowHelp(true)}
          onStats={() => setShowStats(true)}
          onArchive={() => setShowArchive(true)}
        />

        <div className="game-layout">
          <div>
            <GameBoard board={board} />
            <Keyboard
              onKey={handleKey}
              onEnter={handleEnter}
              onBackspace={handleBackspace}
            />
          </div>

          <div className="scripture-card">
            <div className="scripture-label">Today&apos;s WordVerse</div>
            <div className="scripture-reference">{puzzle.scripture.reference}</div>
            <div className="scripture-text">
              {isSolved
                ? puzzle.scripture.text
                : 'Solve today’s word to reveal the full verse and reflection.'}
            </div>
          </div>
        </div>
      </div>

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {showStats && <StatsModal onClose={() => setShowStats(false)} />}
      {showArchive && <ArchiveModal onClose={() => setShowArchive(false)} />}
    </div>
  )
}

export default App
