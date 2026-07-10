import { motion } from 'motion/react';
import { getLetterStates } from '../utils';

interface GameBoardProps {
  guesses: string[];
  currentGuess: string;
  solution: string;
  invalidRowIndex: number | null;
}

export default function GameBoard({ guesses, currentGuess, solution, invalidRowIndex }: GameBoardProps) {
  const maxGuesses = 6;
  const wordLength = 5;

  return (
    <div className="w-full max-w-[350px] mx-auto px-4 my-4 flex-1 flex flex-col justify-center">
      <div className="grid grid-rows-6 gap-2" id="game-grid">
        {Array.from({ length: maxGuesses }).map((_, rowIndex) => {
          const isCurrentRow = rowIndex === guesses.length;
          const isCompletedRow = rowIndex < guesses.length;
          const guess = isCompletedRow ? guesses[rowIndex] : isCurrentRow ? currentGuess : '';
          const shouldShake = invalidRowIndex === rowIndex;

          return (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-5 gap-2"
              animate={shouldShake ? {
                x: [0, -10, 10, -10, 10, -5, 5, 0],
                transition: { duration: 0.5 }
              } : {}}
              id={`grid-row-${rowIndex}`}
            >
              {Array.from({ length: wordLength }).map((_, colIndex) => {
                const letter = guess[colIndex] || '';
                let state: 'correct' | 'present' | 'absent' | 'tbd' = 'tbd';

                if (isCompletedRow) {
                  state = getLetterStates(guess, solution)[colIndex];
                }

                return (
                  <GridTile
                    key={colIndex}
                    letter={letter}
                    state={state}
                    index={colIndex}
                    isCompleted={isCompletedRow}
                    isCurrent={isCurrentRow}
                  />
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

interface GridTileProps {
  key?: any;
  letter: string;
  state: 'correct' | 'present' | 'absent' | 'tbd';
  index: number;
  isCompleted: boolean;
  isCurrent: boolean;
}

function GridTile({ letter, state, index, isCompleted, isCurrent }: GridTileProps) {
  // Styles based on letter states
  const baseClasses = "aspect-square w-full flex items-center justify-center text-2xl sm:text-3xl font-extrabold uppercase rounded-lg select-none border-2 transition-all duration-300";
  
  let colorClasses = "border-slate-800 bg-slate-950/40 text-slate-100";
  if (letter && isCurrent) {
    colorClasses = "border-amber-500/50 bg-slate-900 text-white scale-102 shadow-[0_0_8px_rgba(245,158,11,0.15)]";
  }

  // Animating flipped states with Framer Motion (vertical flip without mirroring)
  const variants = {
    initial: {
      scaleY: 1,
    },
    typing: {
      scale: [1, 1.15, 1],
      transition: { duration: 0.15 }
    },
    flipped: {
      scaleY: [1, 0, 1],
      transition: {
        duration: 0.5,
        times: [0, 0.5, 1],
        delay: index * 0.15,
      }
    }
  };

  const completedColors: Record<string, string> = {
    correct: "bg-sky-600 border-sky-500 text-white shadow-[0_0_12px_rgba(14,165,233,0.25)]",
    present: "bg-violet-600 border-violet-500 text-white shadow-[0_0_12px_rgba(139,92,246,0.25)]",
    absent: "bg-slate-800 border-slate-700/80 text-slate-400",
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={
        isCompleted
          ? 'flipped'
          : letter && isCurrent
          ? 'typing'
          : 'initial'
      }
      className="relative w-full aspect-square"
      id={`tile-${index}`}
    >
      <div
        className={`${baseClasses} ${
          isCompleted ? completedColors[state] : colorClasses
        } w-full h-full absolute flex items-center justify-center`}
      >
        {/* Render letter inside tile */}
        <span>{letter}</span>
      </div>
    </motion.div>
  );
}
