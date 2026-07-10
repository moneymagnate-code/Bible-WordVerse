import { X, Calendar, Play, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getArchivePuzzles } from '../words';

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArchivePuzzle: (dateString: string) => void;
  completedDates: string[]; // dates that are won/lost
}

export default function ArchiveModal({ isOpen, onClose, onSelectArchivePuzzle, completedDates }: ArchiveModalProps) {
  const archivePuzzles = getArchivePuzzles();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Doctrine': return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      case 'Person': return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'Place': return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Object': return 'bg-pink-500/15 text-pink-300 border-pink-500/30';
      default: return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-md bg-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto flex flex-col"
            id="archive-modal"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              id="close-archive-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <Calendar className="w-6 h-6 text-amber-400" />
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">Daily Puzzle Archive</h2>
                <p className="text-xs text-slate-400">Play previous puzzles from the last 30 days</p>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1" id="archive-list">
              {archivePuzzles.map(({ dateString, puzzle, number }) => {
                const isCompleted = completedDates.includes(dateString);
                const dateObj = new Date(dateString + 'T00:00:00'); // avoid timezone offsets
                const displayDate = dateObj.toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                });

                return (
                  <div
                    key={dateString}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                      isCompleted
                        ? 'bg-slate-950/50 border-slate-800/80 text-slate-400'
                        : 'bg-slate-950 border-slate-800/40 hover:border-amber-500/30 text-white'
                    }`}
                    id={`archive-item-${dateString}`}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                          #{number}
                        </span>
                        <span className="text-sm font-semibold">{displayDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className={`text-[10px] font-mono border px-1.5 py-0.5 rounded-md ${getCategoryColor(puzzle.category)}`}>
                          {puzzle.category}
                        </span>
                        {isCompleted && (
                          <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-0.5">
                            <CheckCircle className="w-3 h-3 text-emerald-400" /> Finished
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onSelectArchivePuzzle(dateString);
                        onClose();
                      }}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 ${
                        isCompleted
                          ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                          : 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-[0_2px_8px_rgba(245,158,11,0.15)]'
                      }`}
                      id={`play-archive-btn-${dateString}`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isCompleted ? 'Replay' : 'Play'}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="text-center text-[11px] text-slate-500 mt-4 border-t border-slate-800 pt-3">
              Archive games do not overwrite your primary Daily streak, but they do build up your overall puzzles-solved statistics!
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
