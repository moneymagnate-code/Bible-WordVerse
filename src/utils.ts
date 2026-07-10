import { LetterState } from './types';

/**
 * Computes the correct game state for each character in a guessed word
 * relative to the solution word. Properly handles duplicate letters.
 */
export function getLetterStates(guess: string, solution: string): LetterState[] {
  const result: LetterState[] = Array(solution.length).fill('absent');
  const solutionLettersUsed = Array(solution.length).fill(false);
  const guessLettersUsed = Array(guess.length).fill(false);

  // First pass: Mark all exact matches (correct / green)
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === solution[i]) {
      result[i] = 'correct';
      solutionLettersUsed[i] = true;
      guessLettersUsed[i] = true;
    }
  }

  // Second pass: Mark partial matches (present / yellow)
  for (let i = 0; i < guess.length; i++) {
    if (guessLettersUsed[i]) continue;

    for (let j = 0; j < solution.length; j++) {
      if (!solutionLettersUsed[j] && guess[i] === solution[j]) {
        result[i] = 'present';
        solutionLettersUsed[j] = true;
        break;
      }
    }
  }

  return result;
}

/**
 * Calculates keyboard letter states based on all historical guesses.
 */
export function getKeyboardLetterStates(guesses: string[], solution: string): { [key: string]: LetterState } {
  const keyboardStates: { [key: string]: LetterState } = {};

  guesses.forEach((guess) => {
    const states = getLetterStates(guess, solution);
    for (let i = 0; i < guess.length; i++) {
      const char = guess[i];
      const currentState = states[i];
      const previousState = keyboardStates[char];

      // Rules of precedence: correct > present > absent
      if (currentState === 'correct') {
        keyboardStates[char] = 'correct';
      } else if (currentState === 'present') {
        if (previousState !== 'correct') {
          keyboardStates[char] = 'present';
        }
      } else if (currentState === 'absent') {
        if (previousState !== 'correct' && previousState !== 'present') {
          keyboardStates[char] = 'absent';
        }
      }
    }
  });

  return keyboardStates;
}
