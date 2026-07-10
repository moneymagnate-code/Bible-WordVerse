export interface DailyPuzzle {
  word: string;
  verse: string;
  text: string;
  reflection: string;
  category: 'Doctrine' | 'Person' | 'Place' | 'Object' | 'Concept';
}

export interface ChallengePuzzle extends DailyPuzzle {
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  level: number;
}

export interface GameState {
  guesses: string[];
  currentGuess: string;
  isGameOver: boolean;
  isWon: boolean;
  playedDate: string; // YYYY-MM-DD
  isArchivePlay?: boolean;
  archiveDate?: string;
}

export interface UserStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: { [key: number]: number };
  lastPlayedDate?: string; // YYYY-MM-DD
}

export type LetterState = 'correct' | 'present' | 'absent' | 'tbd';
