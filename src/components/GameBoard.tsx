import React from 'react'
import type { GuessRow } from '../types'

interface GameBoardProps {
  board: GuessRow[]
}

export const GameBoard: React.FC<GameBoardProps> = ({ board }) => {
  return (
    <div className="board-card">
      <div className="board-grid">
        {board.map((row, rIdx) => (
          <div className="board-row" key={rIdx}>
            {row.tiles.map((tile, cIdx) => (
              <div
                key={cIdx}
                className="tile"
                data-state={tile.state}
              >
                {tile.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-soft)' }}>
        Type your guess using the keyboard below. 5 letters, 6 attempts.
      </p>
    </div>
  )
}
