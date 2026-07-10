import { useState, useEffect } from 'react';
import { X, BarChart2, Share2, Heart, Award, Flame, Calendar, BookOpen, Clock, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserStats } from '../types';
import { getLetterStates } from '../utils';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  isGameOver: boolean;
  isWon: boolean;
  solution: string;
  guesses: string[];
  puzzleNumber: number;
  isArchivePlay: boolean;
  archiveDateString?: string;
  isChallengePlay?: boolean;
  challengeLevel?: number;
  bibleVerse: string;
  bibleText: string;
  bibleReflection: string;
  category: string;
}

export default function StatsModal({
  isOpen,
  onClose,
  stats,
  isGameOver,
  isWon,
  solution,
  guesses,
  puzzleNumber,
  isArchivePlay,
  archiveDateString,
  isChallengePlay = false,
  challengeLevel,
  bibleVerse,
  bibleText,
  bibleReflection,
  category
}: StatsModalProps) {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  // Calculate countdown to next midnight local time
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const nextMidnight = new Date(now);
      nextMidnight.setHours(24, 0, 0, 0); // next midnight
      
      const diff = nextMidnight.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = () => {
    // Generate emoji matrix
    const grid = guesses
      .map((guess) => {
        const states = getLetterStates(guess, solution);
        return states
          .map((s) => {
            if (s === 'correct') return '🟦';
            if (s === 'present') return '🟪';
            return '⬛';
          })
          .join('');
      })
      .join('\n');

    const modeTag = isChallengePlay
      ? `(Challenge Level ${challengeLevel})`
      : isArchivePlay
      ? `(Archive Play - ${archiveDateString})`
      : '';
    const shareText = `Sozique Bible WordVerse #${puzzleNumber} ${isWon ? guesses.length : 'X'}/6 ${modeTag}\n\n${grid}\n\nLet’s study God's Word together! Play here: ${window.location.origin}`;

    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const maxGuessCount = Math.max(...Object.values(stats.guessDistribution), 1);

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
            className="relative w-full max-w-lg bg-slate-900 border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-2xl z-10 max-h-[92vh] overflow-y-auto flex flex-col"
            id="stats-modal"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              id="close-stats-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <BarChart2 className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">Your statistics</h2>
            </div>

            {/* Main Stats Cards */}
            <div className="grid grid-cols-4 gap-2 text-center mb-6" id="stats-dashboard">
              <div className="bg-slate-950/50 border border-slate-800/80 p-2 rounded-xl flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-black text-amber-300">{stats.gamesPlayed}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Played</span>
              </div>
              <div className="bg-slate-950/50 border border-slate-800/80 p-2 rounded-xl flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-black text-emerald-400">{stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0}%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Win Rate</span>
              </div>
              <div className="bg-slate-950/50 border border-slate-800/80 p-2 rounded-xl flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-black text-amber-400 flex items-center justify-center gap-0.5">
                  <Flame className="w-4 h-4 text-orange-500 fill-current inline" />
                  {stats.currentStreak}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Streak</span>
              </div>
              <div className="bg-slate-950/50 border border-slate-800/80 p-2 rounded-xl flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-black text-amber-500">{stats.maxStreak}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Max Streak</span>
              </div>
            </div>

            {/* Guess Distribution */}
            <div className="mb-6">
              <h3 className="font-bold text-slate-300 text-xs uppercase tracking-wider text-amber-400 mb-3 font-mono">Guess Distribution</h3>
              <div className="space-y-1.5 text-xs">
                {[1, 2, 3, 4, 5, 6].map((num) => {
                  const count = stats.guessDistribution[num] || 0;
                  const percent = count > 0 ? (count / maxGuessCount) * 100 : 8; // min size to render bar beautifully
                  const isCurrentSolve = isWon && guesses.length === num;

                  return (
                    <div key={num} className="flex items-center gap-2">
                      <span className="w-2.5 font-bold text-slate-400 font-mono">{num}</span>
                      <div className="flex-1 bg-slate-950 h-5.5 rounded overflow-hidden">
                        <div
                          className={`h-full flex items-center justify-end px-2 font-mono font-bold text-[10px] rounded transition-all duration-500 ${
                            isCurrentSolve
                              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-[0_0_8px_rgba(245,158,11,0.2)]'
                              : count > 0
                              ? 'bg-slate-700 text-slate-200'
                              : 'bg-slate-850 text-slate-500'
                          }`}
                          style={{ width: `${percent}%` }}
                        >
                          {count}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Daily Devotion Card (Unlocked on game over) */}
            <div className="flex-1 flex flex-col">
              {isGameOver ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-950/80 border border-amber-500/20 rounded-xl p-4 sm:p-5 flex-1 flex flex-col gap-4 shadow-inner"
                  id="devotion-unlocked"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-mono uppercase font-bold tracking-wider text-amber-400/80">Daily Scripture unlocked</span>
                    </div>
                    <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 px-1.5 py-0.5 rounded font-mono font-bold">
                      {category}
                    </span>
                  </div>

                  {/* Guess outcome */}
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-slate-400">Word of the Day:</h4>
                    <span className="text-2xl font-black tracking-widest text-white block mt-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                      {solution}
                    </span>
                    <p className="text-xs font-semibold text-amber-300 mt-1">
                      {isWon ? '🎉 Hallelujah! You solved it!' : '📖 Let’s examine this Word today!'}
                    </p>
                  </div>

                  {/* Scripture Display */}
                  <div className="border-l-2 border-amber-400 pl-3.5 my-1">
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                      "{bibleText}"
                    </p>
                    <span className="text-xs font-bold text-amber-400 block mt-1.5 text-right font-mono">
                      — {bibleVerse}
                    </span>
                  </div>

                  {/* Devotional Reflection */}
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-lg border border-slate-800/60">
                    <p>{bibleReflection}</p>
                  </div>

                  {/* Interactive Actions & Countdown */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 border-t border-slate-800/80 pt-4">
                    
                    {/* Countdown */}
                    {!isArchivePlay && !isChallengePlay && (
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <div>
                          <div className="text-[10px] uppercase font-mono tracking-wider">Next Word In</div>
                          <div className="text-sm font-extrabold font-mono text-white tracking-wider">{timeLeft}</div>
                        </div>
                      </div>
                    )}

                    {isArchivePlay && (
                      <div className="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/15">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>Replaying archive game</span>
                      </div>
                    )}

                    {isChallengePlay && (
                      <div className="flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/15">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Challenge Level {challengeLevel}</span>
                      </div>
                    )}

                    {/* Share Button */}
                    <button
                      onClick={handleShare}
                      className="w-full sm:flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_4px_12px_rgba(245,158,11,0.25)] relative"
                      id="share-game-btn"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3px]" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4 stroke-[2.5px]" />
                          <span>Share Results</span>
                        </>
                      )}
                    </button>

                  </div>
                </motion.div>
              ) : (
                <div className="text-center bg-slate-950/30 border border-slate-800/60 p-6 rounded-xl flex-1 flex flex-col items-center justify-center">
                  <Heart className="w-10 h-10 text-amber-500/20 mb-2 fill-current" />
                  <p className="text-sm text-slate-400 max-w-xs font-medium">
                    Complete today's puzzle to unlock the daily devotional message and bible verse!
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-5 text-center text-[10px] text-slate-500">
              Sozique Christian Network • Built with Love & Faith
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
