import React from 'react'

const ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM']

interface KeyboardProps {
  onKey: (key: string) => void
  onEnter: () => void
  onBackspace: () => void
}

export const Keyboard: React.FC<KeyboardProps> = ({ onKey, onEnter, onBackspace }) => {
  return (
    <div className="keyboard">
      {ROWS.map((row, idx) => (
        <div className="keyboard-row" key={idx}>
          {idx === 2 && (
            <button className="key" onClick={onEnter}>
              Enter
            </button>
          )}
          {row.split('').map(ch => (
            <button
              key={ch}
              className="key"
              onClick={() => onKey(ch)}
            >
              {ch}
            </button>
          ))}
          {idx === 2 && (
            <button className="key" onClick={onBackspace}>
              ⌫
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
