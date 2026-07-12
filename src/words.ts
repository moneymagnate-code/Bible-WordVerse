import type { DailyPuzzle } from './types'

//
// 1. A list of daily verse references.
//    The day of the year picks one automatically.
//
const VERSE_LIST = [
  "John 3:16",
  "Psalm 23:1",
  "Romans 8:28",
  "Philippians 4:13",
  "Proverbs 3:5",
  "Isaiah 41:10",
  "Jeremiah 29:11",
  "Matthew 11:28",
  "Psalm 46:1",
  "1 John 4:19",
  "Psalm 118:24",
  "James 1:5",
  "Psalm 27:1",
  "Galatians 5:22",
  "Psalm 91:1",
  "John 14:6",
  "Psalm 121:1",
  "Matthew 6:33",
  "Psalm 34:8",
  "Hebrews 11:1",
]

//
// 2. Get the day of the year (0–365)
//
function getDayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  return Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
}

//
// 3. Fetch the verse text from the Bible API
//
async function fetchVerse(reference: string) {
  const url = `https://bible-api.com/${reference.replace(/\s+/g, '+')}`
  const res = await fetch(url)
  const data = await res.json()

  return {
    reference: data.reference,
    text: data.text.trim(),
  }
}

//
// 4. Extract a 5-letter word from the verse text
//
function extractWordFromVerse(text: string): string {
  const words = text
    .replace(/[^a-zA-Z\s]/g, '')
    .split(/\s+/)
    .map(w => w.toUpperCase())

  const fiveLetterWords = words.filter(w => w.length === 5)

  return fiveLetterWords[0] ?? "GRACE"
}

//
// 5. Build the daily puzzle object
//
export async function getTodayPuzzle(): Promise<DailyPuzzle> {
  const dayIndex = getDayOfYear() % VERSE_LIST.length
  const reference = VERSE_LIST[dayIndex]

  const scripture = await fetchVerse(reference)
  const solution = extractWordFromVerse(scripture.text)

  return {
    solution,
    scripture,
    dateKey: new Date().toISOString().slice(0, 10),
  }
}
