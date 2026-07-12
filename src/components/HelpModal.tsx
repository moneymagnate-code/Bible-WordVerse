import React from 'react'

interface HelpModalProps {
  onClose: () => void
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">How to play</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-soft)' }}>
          Guess the 5-letter word in 6 tries. Each guess reveals colored tiles:
        </p>
        <ul style={{ fontSize: '0.8rem', color: 'var(--text-soft)', paddingLeft: '1.1rem' }}>
          <li>Green – letter is in the word and in the correct spot.</li>
          <li>Gold – letter is in the word but in a different spot.</li>
          <li>Gray – letter is not in the word.</li>
        </ul>
        <p style={{ fontSize: '0.85rem', color: 'var(--accent-soft)', marginTop: '0.6rem' }}>
          When you solve the word, a Bible verse and reflection unlock for today.
        </p>
      </div>
    </div>
  )
}
