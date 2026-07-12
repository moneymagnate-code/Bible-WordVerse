import React from 'react'

interface HeaderProps {
  onHelp: () => void
  onStats: () => void
  onArchive: () => void
}

export const Header: React.FC<HeaderProps> = ({ onHelp, onStats, onArchive }) => {
  return (
    <header className="app-header">
      <div className="app-title-block">
        <div className="app-title">
          Bible WordVerse
          <span className="app-title-pill">Daily Scripture Puzzle</span>
        </div>
        <div className="app-subtitle">
          Guess the word, unlock the verse, meditate on the meaning.
        </div>
      </div>
      <div className="app-controls">
        <button className="app-button" onClick={onHelp}>
          ❓ Help
        </button>
        <button className="app-button" onClick={onArchive}>
          📚 Archive
        </button>
        <button className="app-button app-button-primary" onClick={onStats}>
          📊 Stats
        </button>
      </div>
    </header>
  )
}
