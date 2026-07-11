import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import HelpModal from './components/HelpModal';
import StatsModal from './components/StatsModal';
import ArchiveModal from './components/ArchiveModal';
import { getDailyPuzzle, DAILY_PUZZLES, VALID_GUESS_WORDS, getArchivePuzzles, CHALLENGE_PUZZLES } from './words';
import { GameState, UserStats, ChallengePuzzle } from './types';
import { getKeyboardLetterStates } from './utils';

// Default initial statistics
const DEFAULT_STATS: UserStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
};

export default function App() {
  // Current Active Day details
  const todayPuzzleInfo = getDailyPuzzle();
  const [activeDate, setActiveDate] = useState<string>(todayPuzzleInfo.dateString);
  const [isArchivePlay, setIsArchivePlay] = useState<boolean>(false);
  
  // Challenge State
  const [isChallengePlay, setIsChallengePlay] = useState<boolean>(false);
  const [challengeLevel, setChallengeLevel] = useState<number>(1);
  const [completedChallengeLevels, setCompletedChallengeLevels] = useState<number[]>([]);

  // Active Puzzle and Words
  const currentPuzzle = isChallengePlay
    ? CHALLENGE_PUZZLES[challengeLevel - 1]
    : isArchivePlay 
      ? DAILY_PUZZLES.find(p => getDailyPuzzle(new Date(activeDate + 'T00:00:00')).puzzle.word === p.word) || todayPuzzleInfo.puzzle
      : todayPuzzleInfo.puzzle;

  const puzzleIndex = isChallengePlay
    ? challengeLevel
    : isArchivePlay
      ? getDailyPuzzle(new Date(activeDate + 'T00:00:00')).index
      : todayPuzzleInfo.index;

  const solution = currentPuzzle.word;

  // Modals Visibility
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Custom Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [invalidRowIndex, setInvalidRowIndex] = useState<number | null>(null);

  // User Stats loaded from LocalStorage
  const [stats, setStats] = useState<UserStats>(DEFAULT_STATS);

  // Game board states loaded dynamically depending on activeDate
  const [gameState, setGameState] = useState<GameState>({
    guesses: [],
    currentGuess: '',
    isGameOver: false,
    isWon: false,
    playedDate: activeDate
  });

  // Load stats from local storage on startup
  useEffect(() => {
    const savedStats = localStorage.getItem('bible_wordverse_stats_v2') || localStorage.getItem('bible_wordle_stats_v1');
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (e) {
        console.error('Error parsing stats', e);
      }
    } else {
      // First time user: show help modal automatically
      setIsHelpOpen(true);
    }

    const savedCompleted = localStorage.getItem('bible_wordverse_completed_challenge_levels_v2') || localStorage.getItem('bible_wordle_completed_challenge_levels_v1');
    if (savedCompleted) {
      try {
        setCompletedChallengeLevels(JSON.parse(savedCompleted));
      } catch (e) {
        console.error('Error parsing completed challenge levels', e);
      }
    }
  }, []);

  // Sync game state depending on whether it's Today's Daily, Archive, or Challenge play
  useEffect(() => {
    if (isChallengePlay) {
      const savedChallenge = localStorage.getItem(`bible_wordverse_challenge_state_level_${challengeLevel}`) || localStorage.getItem(`bible_wordle_challenge_state_level_${challengeLevel}`);
      if (savedChallenge) {
        try {
          setGameState(JSON.parse(savedChallenge));
        } catch (e) {
          console.error('Error parsing challenge state', e);
        }
      } else {
        setGameState({
          guesses: [],
          currentGuess: '',
          isGameOver: false,
          isWon: false,
          playedDate: `challenge-${challengeLevel}`
        });
      }
    } else if (isArchivePlay) {
      const savedArchive = localStorage.getItem(`bible_wordverse_archive_${activeDate}`) || localStorage.getItem(`bible_wordle_archive_${activeDate}`);
      if (savedArchive) {
        try {
          setGameState(JSON.parse(savedArchive));
        } catch (e) {
          console.error('Error parsing archive state', e);
        }
      } else {
        setGameState({
          guesses: [],
          currentGuess: '',
          isGameOver: false,
          isWon: false,
          playedDate: activeDate,
          isArchivePlay: true,
          archiveDate: activeDate
        });
      }
    } else {
      const savedDaily = localStorage.getItem('bible_wordverse_daily_state_v2') || localStorage.getItem('bible_wordle_daily_state_v1');
      if (savedDaily) {
        try {
          const parsed = JSON.parse(savedDaily);
          // Only use daily state if it matches today's date
          if (parsed.playedDate === activeDate) {
            setGameState(parsed);
          } else {
            // New day has rolled over! Reset daily puzzle state
            setGameState({
              guesses: [],
              currentGuess: '',
              isGameOver: false,
              isWon: false,
              playedDate: activeDate
            });
          }
        } catch (e) {
          console.error('Error parsing daily state', e);
        }
      } else {
        setGameState({
          guesses: [],
          currentGuess: '',
          isGameOver: false,
          isWon: false,
          playedDate: activeDate
        });
      }
    }
  }, [activeDate, isArchivePlay, isChallengePlay, challengeLevel]);

  // Helper to trigger elegant temporary Toast notifications
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Keyboard updates: Character insertion
  const handleChar = useCallback((char: string) => {
    if (gameState.isGameOver || gameState.guesses.length >= 6) return;
    
    setGameState((prev) => {
      if (prev.currentGuess.length >= 5) return prev;
      return {
        ...prev,
        currentGuess: prev.currentGuess + char.toUpperCase()
      };
    });
  }, [gameState.isGameOver, gameState.guesses.length]);

  // Keyboard updates: Character deletion (backspace)
  const handleDelete = useCallback(() => {
    if (gameState.isGameOver) return;
    
    setGameState((prev) => {
      if (prev.currentGuess.length === 0) return prev;
      return {
        ...prev,
        currentGuess: prev.currentGuess.slice(0, -1)
      };
    });
  }, [gameState.isGameOver]);

  // Save specific stats helper
  const saveStats = (updatedStats: UserStats) => {
    setStats(updatedStats);
    localStorage.setItem('bible_wordverse_stats_v2', JSON.stringify(updatedStats));
  };

  // Keyboard updates: Word submission (enter)
  const handleEnter = useCallback(() => {
    if (gameState.isGameOver) return;

    const { currentGuess, guesses } = gameState;

    if (currentGuess.length !== 5) {
      showToast('Word must be 5 letters');
      setInvalidRowIndex(guesses.length);
      setTimeout(() => setInvalidRowIndex(null), 500);
      return;
    }

    if (!VALID_GUESS_WORDS.has(currentGuess)) {
      showToast('Not in standard word list');
      setInvalidRowIndex(guesses.length);
      setTimeout(() => setInvalidRowIndex(null), 500);
      return;
    }

    const nextGuesses = [...guesses, currentGuess];
    const isWin = currentGuess === solution;
    const isLoss = !isWin && nextGuesses.length >= 6;
    const isGameOver = isWin || isLoss;

    const updatedState: GameState = {
      ...gameState,
      guesses: nextGuesses,
      currentGuess: '',
      isGameOver,
      isWon: isWin
    };

    // Update Game State Local Persistence
    setGameState(updatedState);
    if (isChallengePlay) {
      localStorage.setItem(`bible_wordverse_challenge_state_level_${challengeLevel}`, JSON.stringify(updatedState));
      
      // Update unlocked/completed challenge levels list on win
      if (isWin && !completedChallengeLevels.includes(challengeLevel)) {
        const updatedCompleted = [...completedChallengeLevels, challengeLevel].sort((a, b) => a - b);
        setCompletedChallengeLevels(updatedCompleted);
        localStorage.setItem('bible_wordverse_completed_challenge_levels_v2', JSON.stringify(updatedCompleted));
      }
    } else if (isArchivePlay) {
      localStorage.setItem(`bible_wordverse_archive_${activeDate}`, JSON.stringify(updatedState));
    } else {
      localStorage.setItem('bible_wordverse_daily_state_v2', JSON.stringify(updatedState));
    }

    // Process general User Stats only when they finish a game for the FIRST TIME
    if (isGameOver) {
      const trackingKey = isChallengePlay ? `challenge-${challengeLevel}` : activeDate;
      const alreadyPlayedDates = JSON.parse(
        localStorage.getItem('bible_wordverse_completed_dates_v2') || 
        localStorage.getItem('bible_wordle_completed_dates_v1') || 
        '[]'
      );
      
      if (!alreadyPlayedDates.includes(trackingKey)) {
        // Record completed date/level
        alreadyPlayedDates.push(trackingKey);
        localStorage.setItem('bible_wordverse_completed_dates_v2', JSON.stringify(alreadyPlayedDates));

        // For Archive and Challenge play, we only increment overall played/won stats but do not build Daily Streak
        const playedCount = stats.gamesPlayed + 1;
        const wonCount = stats.gamesWon + (isWin ? 1 : 0);

        let currentStreak = stats.currentStreak;
        let maxStreak = stats.maxStreak;

        if (!isArchivePlay && !isChallengePlay) {
          if (isWin) {
            currentStreak += 1;
            if (currentStreak > maxStreak) {
              maxStreak = currentStreak;
            }
          } else {
            currentStreak = 0; // streak broke on daily loss
          }
        }

        // Guess Distribution increment
        const nextDistribution = { ...stats.guessDistribution };
        if (isWin) {
          const guessIndex = nextGuesses.length;
          nextDistribution[guessIndex] = (nextDistribution[guessIndex] || 0) + 1;
        }

        const newStats: UserStats = {
          gamesPlayed: playedCount,
          gamesWon: wonCount,
          currentStreak,
          maxStreak,
          guessDistribution: nextDistribution,
          lastPlayedDate: (isArchivePlay || isChallengePlay) ? stats.lastPlayedDate : activeDate
        };

        saveStats(newStats);
      }

      // Show devotion modal on victory/loss after a tiny delay for cell animations
      setTimeout(() => {
        setIsStatsOpen(true);
      }, 1000);
    }
  }, [gameState, solution, stats, isArchivePlay, isChallengePlay, challengeLevel, completedChallengeLevels, activeDate]);

  // Bind physical desktop keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isHelpOpen || isStatsOpen || isArchiveOpen) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key.toUpperCase();

      if (key === 'ENTER') {
        handleEnter();
      } else if (key === 'BACKSPACE') {
        handleDelete();
      } else if (key.length === 1 && key >= 'A' && key <= 'Z') {
        handleChar(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleChar, handleDelete, handleEnter, isHelpOpen, isStatsOpen, isArchiveOpen]);

  // Handle playing past puzzles selected in archive
  const handleSelectArchive = (dateString: string) => {
    setIsArchivePlay(true);
    setActiveDate(dateString);
  };

  // Reset to today's daily puzzle
  const handleResetToDaily = () => {
    setIsArchivePlay(false);
    setActiveDate(todayPuzzleInfo.dateString);
  };

  // Fetch completed dates list for the archive checklists
  const completedDates = JSON.parse(
    localStorage.getItem('bible_wordverse_completed_dates_v2') || 
    localStorage.getItem('bible_wordle_completed_dates_v1') || 
    '[]'
  );

  // Generate mapping of letter colors for keyboard
  const keyboardLetterStates = getKeyboardLetterStates(gameState.guesses, solution);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Dynamic Background Star Field (Pure CSS styling) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Header component */}
      <Header
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        onOpenArchive={() => setIsArchiveOpen(true)}
        isArchivePlay={isArchivePlay}
        archiveDate={isArchivePlay ? activeDate : undefined}
        onResetDaily={handleResetToDaily}
        puzzleNumber={puzzleIndex}
      />

      {/* App Main Area */}
      <main className="flex-1 flex flex-col justify-between max-w-md w-full mx-auto relative z-10">
        
        {/* Mode Selector Tabs */}
        <div className="flex gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl mx-4 mt-3">
          <button
            onClick={() => {
              setIsChallengePlay(false);
              setIsArchivePlay(false);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              !isChallengePlay && !isArchivePlay
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                : 'text-slate-400 hover:text-white'
            }`}
            id="mode-daily-tab"
          >
            Daily WordVerse
          </button>
          <button
            onClick={() => {
              setIsChallengePlay(true);
              setIsArchivePlay(false);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              isChallengePlay
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                : 'text-slate-400 hover:text-white'
            }`}
            id="mode-challenge-tab"
          >
            7-Level Challenge
          </button>
        </div>

        {/* 7-Level Celebration Banner */}
        {isChallengePlay && completedChallengeLevels.length === 7 && (
          <div className="mx-4 mt-3 p-4 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-2xl text-center shadow-lg relative overflow-hidden" id="challenge-complete-banner">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] pointer-events-none animate-pulse" />
            <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent block">
              🎉 Great job - you solved all of them! 🎉
            </span>
            <p className="text-[10px] sm:text-xs text-slate-300 mt-1 font-medium leading-relaxed">
              You have successfully completed all 7 levels of the Scripture Challenge! Your knowledge and devotion to God's Word are truly inspiring.
            </p>
            <button
              onClick={() => {
                if (window.confirm("Are you sure you want to reset your 7-Level Challenge progress?")) {
                  setCompletedChallengeLevels([]);
                  localStorage.removeItem('bible_wordverse_completed_challenge_levels_v2');
                  localStorage.removeItem('bible_wordle_completed_challenge_levels_v1');
                  // Also reset challenge state cache
                  for (let i = 1; i <= 7; i++) {
                    localStorage.removeItem(`bible_wordverse_challenge_state_level_${i}`);
                    localStorage.removeItem(`bible_wordle_challenge_state_level_${i}`);
                  }
                  setChallengeLevel(1);
                  showToast("Challenge progress reset! Start fresh.");
                }
              }}
              className="mt-2.5 text-[9px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 rounded-full transition-all"
            >
              Reset Challenge & Play Again
            </button>
          </div>
        )}

        {/* Challenge Level Progress Path Selector */}
        {isChallengePlay && (
          <div className="px-4 mt-3" id="challenge-level-selector">
            <div className="flex items-center justify-between gap-1 bg-slate-950/60 p-1.5 border border-slate-900 rounded-xl">
              {[1, 2, 3, 4, 5, 6, 7].map((lvl) => {
                const isCompleted = completedChallengeLevels.includes(lvl);
                const isActive = lvl === challengeLevel;
                const isUnlocked = lvl === 1 || completedChallengeLevels.includes(lvl - 1);

                let btnClass = "";
                if (isActive) {
                  btnClass = "bg-amber-500 text-slate-950 border-amber-400 font-black ring-2 ring-amber-500/20";
                } else if (isCompleted) {
                  btnClass = "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25";
                } else if (isUnlocked) {
                  btnClass = "bg-slate-900 text-slate-300 border-slate-800 hover:border-amber-500/30 hover:text-amber-300";
                } else {
                  btnClass = "bg-slate-950 text-slate-700 border-slate-950/30 opacity-30 cursor-not-allowed";
                }

                return (
                  <button
                    key={lvl}
                    onClick={() => {
                      if (isUnlocked) {
                        setChallengeLevel(lvl);
                      } else {
                        showToast(`Solve Level ${lvl - 1} first to unlock this challenge!`);
                      }
                    }}
                    disabled={isActive && isUnlocked}
                    className={`w-8.5 h-8.5 rounded-lg flex flex-col items-center justify-center text-[11px] border font-bold transition-all ${btnClass}`}
                    title={`Level ${lvl}: ${CHALLENGE_PUZZLES[lvl - 1].difficulty}`}
                  >
                    <span className="leading-none">{lvl}</span>
                    {isCompleted && <span className="text-[7px] font-extrabold text-emerald-400 mt-0.5 leading-none">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Game Title Bar / Active Level info */}
        <div className="text-center pt-3 px-4">
          {isChallengePlay ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-bold text-amber-300 font-mono">
                Level {challengeLevel}: {CHALLENGE_PUZZLES[challengeLevel - 1].difficulty}
              </span>
              <span className="text-slate-600 text-[10px] font-mono">•</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {CHALLENGE_PUZZLES[challengeLevel - 1].category} WORD
              </span>
            </div>
          ) : isArchivePlay ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] font-bold text-sky-300 font-mono">
                Archive Puzzle
              </span>
              <span className="text-slate-600 text-[10px] font-mono">•</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {currentPuzzle.category} WORD
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/5 border border-amber-500/10 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
              <span className="text-[10px] font-bold text-slate-400">
                Daily WordVerse
              </span>
              <span className="text-slate-600 text-[10px] font-mono">•</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {currentPuzzle.category} WORD
              </span>
            </div>
          )}
          <p className="text-[11px] font-semibold text-slate-400 max-w-xs mx-auto leading-relaxed italic mt-1">
            "Your Word is a lamp to my feet and a light to my path." 
            <span className="block not-italic text-[10px] text-amber-500/80 font-bold font-mono mt-0.5">Psalm 119:105</span>
          </p>
        </div>

        {/* WordVerse 5-letter Grid */}
        <GameBoard
          guesses={gameState.guesses}
          currentGuess={gameState.currentGuess}
          solution={solution}
          invalidRowIndex={invalidRowIndex}
        />

        {/* Virtual Keyboard */}
        <Keyboard
          onChar={handleChar}
          onDelete={handleDelete}
          onEnter={handleEnter}
          letterStates={keyboardLetterStates}
        />

      </main>

      {/* Elegant Toast Notifications */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-lg border border-amber-400 text-sm animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Help Instructions Modal */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* Statistics and Daily Devotion/Verse Modal */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={stats}
        isGameOver={gameState.isGameOver}
        isWon={gameState.isWon}
        solution={solution}
        guesses={gameState.guesses}
        puzzleNumber={puzzleIndex}
        isArchivePlay={isArchivePlay}
        archiveDateString={isArchivePlay ? activeDate : undefined}
        isChallengePlay={isChallengePlay}
        challengeLevel={isChallengePlay ? challengeLevel : undefined}
        bibleVerse={currentPuzzle.verse}
        bibleText={currentPuzzle.text}
        bibleReflection={currentPuzzle.reflection}
        category={currentPuzzle.category}
      />

      {/* Archive Modal (30 past games selector) */}
      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        onSelectArchivePuzzle={handleSelectArchive}
        completedDates={completedDates}
      />

    </div>
  );
}
