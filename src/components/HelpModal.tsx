import { X, HelpCircle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
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
            className="relative w-full max-w-md bg-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            id="help-modal"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              id="close-help-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <BookOpen className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">How to Play</h2>
            </div>

            {/* Instructions */}
            <div className="text-slate-300 text-sm space-y-4 leading-relaxed">
              <p>
                Guess the <strong className="text-amber-300">Bible WordVerse</strong> in 6 tries. Every day, a new, spiritually inspiring word is chosen from the scriptures.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>Each guess must be a valid 5-letter word.</li>
                <li>The color of the tiles will change to show how close your guess was to the word.</li>
                <li>After you win or lose, you will unlock a <strong className="text-amber-300">Daily Bible Verse and Devotion</strong> based on that word!</li>
              </ul>

              <div className="border-t border-slate-800/80 my-4 pt-4">
                <h3 className="font-bold text-white mb-3 text-xs uppercase tracking-wider text-amber-400">Examples</h3>

                {/* Example 1: Correct */}
                <div className="space-y-2 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-sky-600 border-2 border-sky-500 rounded-lg text-white">F</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">A</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">I</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">T</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">H</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    The letter <strong className="text-sky-400 font-semibold">F</strong> is in the word and in the correct spot.
                  </p>
                </div>

                {/* Example 2: Present */}
                <div className="space-y-2 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">G</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">R</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-violet-600 border-2 border-violet-500 rounded-lg text-white">A</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">C</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">E</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    The letter <strong className="text-violet-400 font-semibold">A</strong> is in the word but in the wrong spot.
                  </p>
                </div>

                {/* Example 3: Absent */}
                <div className="space-y-2">
                  <div className="flex gap-1.5">
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">S</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">O</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">U</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-800 border-2 border-slate-700 rounded-lg text-slate-500">L</span>
                    <span className="w-10 h-10 flex items-center justify-center font-extrabold text-lg bg-slate-950 border-2 border-slate-800 rounded-lg text-slate-400">S</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    The letter <strong className="text-slate-400 font-semibold">L</strong> is not in the word in any spot.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-xs text-amber-300 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <span>
                  Share your results with family or church groups! Use the stats menu (<span className="inline-block px-1 bg-slate-800 rounded text-slate-200">📊</span>) to see your streaks, read scripture, and play past puzzles.
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 flex justify-end border-t border-slate-800 pt-4">
              <button
                onClick={onClose}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all active:scale-95 shadow-[0_4px_12px_rgba(245,158,11,0.25)]"
                id="close-help-btn-bottom"
              >
                Let's Begin!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
