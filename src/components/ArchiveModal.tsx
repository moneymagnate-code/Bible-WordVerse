import React from 'react'

interface ArchiveModalProps {
  onClose: () => void
}

export const ArchiveModal: React.FC<ArchiveModalProps> = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Archive</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-soft)' }}>
          Soon you’ll be able to revisit past WordVerse puzzles and scriptures.
        </p>
      </div>
    </div>
  )
}
