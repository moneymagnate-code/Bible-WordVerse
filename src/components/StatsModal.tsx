import React from 'react'

interface StatsModalProps {
  onClose: () => void
}

export const StatsModal: React.FC<StatsModalProps> = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Stats</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-soft)' }}>
          Coming soon: streaks, win rate, and challenge levels.
        </p>
      </div>
    </div>
  )
}
