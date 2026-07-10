import { Delete } from 'lucide-react';
import { LetterState } from '../types';

interface KeyboardProps {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  letterStates: { [key: string]: LetterState };
}

export default function Keyboard({ onChar, onDelete, onEnter, letterStates }: KeyboardProps) {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']
  ];

  const getKeyClass = (key: string) => {
    const base = "h-14 sm:h-16 flex-1 flex items-center justify-center rounded font-bold text-sm sm:text-base select-none transition-all duration-200 cursor-pointer active:scale-95";
    
    // Status colors
    const state = letterStates[key];
    if (state === 'correct') {
      return `${base} bg-sky-600 hover:bg-sky-500 text-white shadow-[0_2px_4px_rgba(14,165,233,0.35)]`;
    }
    if (state === 'present') {
      return `${base} bg-violet-600 hover:bg-violet-500 text-white shadow-[0_2px_4px_rgba(139,92,246,0.35)]`;
    }
    if (state === 'absent') {
      return `${base} bg-slate-850 text-slate-500 border border-slate-800/50 opacity-60`;
    }

    // Special keys vs letter keys
    if (key === 'ENTER' || key === 'DELETE') {
      return `${base} px-1.5 sm:px-3 bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs sm:text-sm border border-slate-700/60`;
    }

    return `${base} bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/30`;
  };

  return (
    <div className="w-full max-w-[500px] mx-auto px-2 pb-6 mt-auto flex flex-col gap-1.5" id="virtual-keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1.5 touch-action-none">
          {row.map((key) => {
            const isSpecial = key === 'ENTER' || key === 'DELETE';
            
            return (
              <button
                key={key}
                onClick={() => {
                  if (key === 'ENTER') onEnter();
                  else if (key === 'DELETE') onDelete();
                  else onChar(key);
                }}
                className={getKeyClass(key)}
                id={`keyboard-key-${key}`}
                style={{
                  minWidth: isSpecial ? '48px' : '28px',
                  touchAction: 'manipulation' // prevents double-tap zoom delay on mobile
                }}
              >
                {key === 'DELETE' ? (
                  <Delete className="w-4 h-4 sm:w-5 h-5 text-amber-300" />
                ) : (
                  key
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
