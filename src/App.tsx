import React, { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { GameBoard } from './components/GameBoard'
import { Keyboard } from './components/Keyboard'
import { HelpModal } from './components/HelpModal'
import { StatsModal } from './components/StatsModal'
import { ArchiveModal } from './components/ArchiveModal'
import { createEmptyBoard, evaluateGuess } from './utils'
import { getTodayPuzzle } from './words'
import type { DailyPuzzle, GuessRow, LetterState } from './types'

const MAX_ROWS = 6
const WORD_LENGTH = 5

const App: React.FC = () => {
  const [puzzle, setPuzzle] = useState<DailyPuzzle | null>(null)
  const [board, setBoard] = useState<GuessRow[]>(() => createEmptyBoard(MAX_ROWS, WORD_LENGTH))
  const [currentRow, setCurrentRow] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [isSolved, setIsSolved] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [showHelp, setShowHelp] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [showArchive, setShowArchive] = useState(false)

  useEffect(() => {
    async function loadPuzzle() {
      try {
        setIsLoading(true)
        setError(null)
        const todayPuzzle = await getTodayPuzzle()
        setPuzzle(todayPuzzle)
      } catch (e) {
        console.error(e)
        setError('Unable to load today’s WordVerse. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    loadPuzzle()
  }, [])

  function handleKey(letter: string) {
    if (!puzzle || isSolved || isLoading) return
    if (currentGuess.length >= WORD_LENGTH) return

    const nextGuess = (currentGuess + letter).toUpperCase()
    setCurrentGuess(nextGuess)

    setBoard(prev => {
      const copy = prev.map(row => ({ tiles: row.tiles.map(t => ({ ...t })) }))
      nextGuess.split('').forEach((ch, idx) => {
        copy[currentRow].tiles[idx].letter = ch
      })
      return copy
    })
  }

  function handleBackspace() {
    if (!puzzle || isSolved || isLoading) return
    if (!currentGuess.length) return

    const nextGuess = currentGuess.slice(0, -1)
    setCurrentGuess(nextGuess)

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
    if (!puzzle || isSolved || isLoading) return
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

        {isLoading && (
          <p style={{ fontSize: '0.9rem', color: 'var(--text-soft)' }}>
            Loading today&apos;s WordVerse…
          </p>
        )}

        {error && (
          <p style={{ fontSize: '0.9rem', color: 'var(--error)' }}>
            {error}
          </p>
        )}

        {puzzle && !isLoading && !error && (
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
        )}
      </div>

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      {showStats && <StatsModal onClose={() => setShowStats(false)} />}
      {showArchive && <ArchiveModal onClose={() => setShowArchive(false)} />}
    </div>
  )
}

export default App

