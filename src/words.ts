import type { DailyPuzzle } from './types'

//
// 1. A list of daily verse references.
//    The day of the year picks one automatically.
//
const VERSE_LIST: string[] = [
  // 1–130
  "Genesis 1:1","Genesis 1:27","Genesis 2:7","Genesis 12:2","Genesis 28:15",
  "Exodus 14:14","Exodus 20:3","Exodus 33:14","Numbers 6:24","Numbers 6:25",
  "Deuteronomy 6:5","Deuteronomy 31:6","Deuteronomy 31:8","Joshua 1:9","Joshua 24:15",
  "Judges 6:12","Ruth 1:16","1 Samuel 12:24","1 Samuel 16:7","2 Samuel 22:31",
  "1 Kings 8:61","1 Kings 19:12","2 Kings 6:16","1 Chronicles 16:11","1 Chronicles 28:20",
  "2 Chronicles 7:14","Ezra 10:4","Nehemiah 8:10","Esther 4:14","Job 1:21","Job 19:25",

  "Psalm 1:1","Psalm 4:8","Psalm 9:9","Psalm 16:8","Psalm 18:2",
  "Psalm 19:14","Psalm 23:1","Psalm 23:4","Psalm 27:1","Psalm 27:14",
  "Psalm 28:7","Psalm 34:8","Psalm 37:4","Psalm 37:5","Psalm 37:23",
  "Psalm 46:1","Psalm 51:10","Psalm 55:22","Psalm 56:3","Psalm 61:2",
  "Psalm 62:6","Psalm 84:11","Psalm 91:1","Psalm 91:4","Psalm 91:11",
  "Psalm 100:4","Psalm 103:1","Psalm 118:24","Psalm 119:105","Psalm 121:1","Psalm 139:14",

  "Proverbs 3:5","Proverbs 3:6","Proverbs 4:23","Proverbs 16:3","Proverbs 18:10",
  "Proverbs 18:21","Proverbs 22:6","Ecclesiastes 3:1","Ecclesiastes 4:9","Ecclesiastes 7:9",
  "Song of Solomon 2:4","Isaiah 9:6","Isaiah 26:3","Isaiah 40:31","Isaiah 41:10",
  "Isaiah 43:2","Isaiah 53:5","Jeremiah 17:7","Jeremiah 29:11","Jeremiah 33:3",
  "Lamentations 3:22","Lamentations 3:23","Ezekiel 36:26","Daniel 3:17","Daniel 12:3",

  "Hosea 6:3","Joel 2:25","Amos 5:24","Micah 6:8","Nahum 1:7",
  "Habakkuk 3:19","Zephaniah 3:17","Zechariah 4:6","Malachi 3:10","Malachi 4:2",
  "Matthew 5:14","Matthew 5:16","Matthew 6:33","Matthew 7:7","Matthew 11:28",
  "Matthew 19:26","Matthew 22:37","Matthew 28:19","Matthew 28:20","Mark 9:23",
  "Mark 10:27","Mark 12:30","Luke 1:37","Luke 6:31","Luke 11:9","Luke 18:27",

  "John 1:1","John 3:16","John 8:12","John 10:10","John 13:34",
  "John 14:6","John 14:27","John 15:5","John 15:13","John 16:33",
  "Acts 1:8","Acts 2:38","Acts 4:12","Acts 16:31","Acts 20:35",
  "Romans 1:16","Romans 5:8","Romans 6:23","Romans 8:1","Romans 8:18",
  "Romans 8:28","Romans 8:31","Romans 8:37","Romans 10:9","Romans 12:2","Romans 15:13",

  "1 Corinthians 1:18","1 Corinthians 10:13","1 Corinthians 13:4","1 Corinthians 13:7","1 Corinthians 15:58",
  "2 Corinthians 4:16","2 Corinthians 5:17","2 Corinthians 9:7","2 Corinthians 12:9","Galatians 2:20",
  "Galatians 5:22","Galatians 6:9","Ephesians 2:8","Ephesians 2:10","Ephesians 3:20",
  "Ephesians 4:32","Ephesians 6:10","Ephesians 6:11","Philippians 1:6","Philippians 2:3",
  "Philippians 4:6","Philippians 4:7","Philippians 4:8","Philippians 4:13","Colossians 3:12","Colossians 3:23",
  
    // 131–260
  "1 Thessalonians 5:16","1 Thessalonians 5:17","1 Thessalonians 5:18","2 Thessalonians 3:3","1 Timothy 4:12",
  "2 Timothy 1:7","2 Timothy 3:16","Titus 2:11","Philemon 1:7","Hebrews 4:12",
  "Hebrews 10:23","Hebrews 11:1","Hebrews 12:1","Hebrews 13:5","Hebrews 13:8",
  "James 1:2","James 1:5","James 1:12","James 4:7","James 4:8","James 5:16",

  "1 Peter 1:3","1 Peter 2:9","1 Peter 3:15","1 Peter 5:7","2 Peter 3:9",
  "1 John 1:9","1 John 3:1","1 John 4:7","1 John 4:18","1 John 4:19",
  "2 John 1:6","3 John 1:4","Jude 1:20","Jude 1:24","Revelation 1:8",
  "Revelation 3:20","Revelation 12:11","Revelation 21:4","Revelation 21:5","Revelation 22:13",

  // Additional high‑impact verses to reach 260
  "Genesis 50:20","Exodus 15:2","Exodus 34:6","Leviticus 19:18","Numbers 23:19",
  "Deuteronomy 7:9","Joshua 3:5","Joshua 10:25","Judges 5:31","Ruth 2:12",
  "1 Samuel 2:2","1 Samuel 30:6","2 Samuel 7:22","1 Kings 2:3","1 Kings 17:24",
  "2 Kings 17:39","1 Chronicles 4:10","2 Chronicles 16:9","Ezra 7:10","Nehemiah 1:11",
  "Esther 2:17","Job 5:8","Job 23:10","Job 42:2","Psalm 5:12",
  "Psalm 9:1","Psalm 13:5","Psalm 17:6","Psalm 20:7","Psalm 25:4",
  "Psalm 25:5","Psalm 27:5","Psalm 30:5","Psalm 31:24","Psalm 32:8",
  "Psalm 33:11","Psalm 34:17","Psalm 40:1","Psalm 42:11","Psalm 46:10",
  "Psalm 55:16","Psalm 63:3","Psalm 73:26","Psalm 86:5","Psalm 90:17",
  "Psalm 94:19","Psalm 103:13","Psalm 112:7","Psalm 116:1","Psalm 118:6",
  "Psalm 126:5","Psalm 130:5","Psalm 138:8","Psalm 145:18","Psalm 147:3",

  "Proverbs 1:7","Proverbs 10:12","Proverbs 11:25","Proverbs 12:25","Proverbs 14:12",
  "Proverbs 15:1","Proverbs 16:9","Proverbs 17:17","Proverbs 18:24","Proverbs 19:21",
  "Proverbs 21:21","Proverbs 24:10","Proverbs 27:17","Ecclesiastes 7:14","Ecclesiastes 12:13",

  "Isaiah 1:18","Isaiah 12:2","Isaiah 30:21","Isaiah 32:17","Isaiah 35:4",
  "Isaiah 49:16","Isaiah 54:10","Isaiah 55:6","Isaiah 55:8","Isaiah 55:9",
  "Jeremiah 1:5","Jeremiah 10:6","Jeremiah 32:17","Jeremiah 33:6","Lamentations 3:25",
  "Ezekiel 11:19","Ezekiel 34:26","Daniel 2:21","Daniel 6:27","Daniel 10:19",

  "Hosea 14:9","Joel 3:16","Amos 9:6","Obadiah 1:17","Jonah 2:2",
  "Micah 7:7","Nahum 1:3","Habakkuk 2:3","Zephaniah 2:3","Zechariah 9:9",
  "Malachi 1:11","Malachi 3:6","Malachi 4:6",

  // 261–365
  "2 Thessalonians 1:11","2 Thessalonians 2:16","2 Thessalonians 3:5","1 Timothy 1:17","1 Timothy 2:1",
  "1 Timothy 6:6","1 Timothy 6:12","2 Timothy 2:3","2 Timothy 2:13","2 Timothy 4:7",
  "Titus 1:2","Titus 3:5","Philemon 1:6","Hebrews 2:18","Hebrews 6:19",
  "Hebrews 10:35","Hebrews 12:2","Hebrews 12:14","Hebrews 13:6","Hebrews 13:15",

  "James 1:17","James 2:26","James 3:17","James 4:10","James 5:8",
  "1 Peter 1:13","1 Peter 2:24","1 Peter 4:8","1 Peter 5:10","1 Peter 5:6",
  "2 Peter 1:3","2 Peter 1:4","2 Peter 1:19","2 Peter 3:18","1 John 2:1",
  "1 John 2:15","1 John 3:18","1 John 5:4","1 John 5:14","1 John 5:20",

  "2 John 1:8","3 John 1:11","Jude 1:21","Jude 1:22","Jude 1:25",
  "Revelation 1:5","Revelation 2:10","Revelation 3:5","Revelation 5:12","Revelation 7:17",
  "Revelation 11:15","Revelation 19:16","Revelation 21:3","Revelation 21:7","Revelation 22:17",

  "Genesis 6:8","Genesis 22:14","Genesis 39:2","Exodus 3:14","Exodus 15:13",
  "Leviticus 20:7","Numbers 14:18","Deuteronomy 4:31","Deuteronomy 10:12","Joshua 8:1",
  "Judges 2:18","Ruth 4:14","1 Samuel 3:10","1 Samuel 17:45","2 Samuel 22:33",
  "1 Kings 18:37","2 Kings 20:5","1 Chronicles 29:11","2 Chronicles 20:15","Ezra 8:22",
  "Nehemiah 4:14","Esther 8:17","Job 22:28","Job 36:11","Psalm 3:3",
  "Psalm 6:9","Psalm 17:8","Psalm 20:4","Psalm 31:19","Psalm 33:20",
  "Psalm 40:8","Psalm 57:1","Psalm 63:8","Psalm 71:5","Psalm 73:23",
  "Psalm 86:15","Psalm 94:22","Psalm 102:17","Psalm 116:7","Psalm 119:11",
  "Psalm 121:7","Psalm 130:7","Psalm 143:8","Psalm 145:9","Psalm 147:11",

  "Proverbs 3:24","Proverbs 11:30","Proverbs 12:18","Proverbs 14:26","Proverbs 15:23",
  "Proverbs 17:22","Proverbs 20:24","Proverbs 21:2","Proverbs 24:16","Proverbs 28:1",
  "Ecclesiastes 3:11","Ecclesiastes 5:2","Ecclesiastes 9:10","Song of Solomon 8:7","Isaiah 7:14",

  "Isaiah 12:5","Isaiah 25:1","Isaiah 33:2","Isaiah 45:2","Isaiah 48:17",
  "Jeremiah 3:22","Jeremiah 20:11","Jeremiah 31:3","Jeremiah 32:27","Lamentations 3:57",
  "Ezekiel 18:32","Ezekiel 34:31","Daniel 7:27","Daniel 9:18","Daniel 10:12",

  "Hosea 2:19","Joel 2:12","Amos 9:13","Obadiah 1:4","Jonah 2:7",
  "Micah 4:5","Nahum 1:15","Habakkuk 2:14","Zephaniah 3:20","Zechariah 10:12",
  "Malachi 2:10","Malachi 3:1","Malachi 4:5",

  "Matthew 3:17","Matthew 9:22","Matthew 13:12","Matthew 18:20","Matthew 21:22",
  "Mark 5:36","Mark 9:29","Mark 12:33","Mark 13:31","Mark 14:38",

  "Luke 1:45","Luke 8:50","Luke 10:19","Luke 12:34","Luke 18:1",
  "Luke 23:34","Luke 24:49",

  "John 3:17","John 4:24","John 5:24","John 6:63","John 8:31",
  "John 12:24","John 14:1","John 17:24","John 20:21","John 21:12",

  "Acts 2:21","Acts 3:6","Acts 7:55","Acts 13:52","Acts 20:24",

  "Romans 2:4","Romans 6:14","Romans 8:39","Romans 12:12","Romans 15:5",

  "1 Corinthians 3:16","1 Corinthians 4:20","1 Corinthians 6:20","1 Corinthians 12:27","1 Corinthians 15:57",

  "2 Corinthians 1:3","2 Corinthians 2:14","2 Corinthians 4:8","2 Corinthians 5:1","2 Corinthians 9:8",

  "Galatians 1:10","Galatians 2:21","Galatians 5:1","Galatians 5:14","Galatians 6:14",

  "Ephesians 1:18","Ephesians 2:19","Ephesians 4:1","Ephesians 5:15","Ephesians 6:18",

  "Philippians 1:9","Philippians 2:14","Philippians 3:7","Philippians 4:4","Philippians 4:12",

  "Colossians 1:9","Colossians 1:20","Colossians 3:1","Colossians 3:15","Colossians 4:6",

  "1 Thessalonians 2:4","1 Thessalonians 3:13","1 Thessalonians 5:5","1 Thessalonians 5:9","1 Thessalonians 5:24",

  "2 Thessalonians 1:3","2 Thessalonians 2:3","2 Thessalonians 3:13","1 Timothy 1:5","1 Timothy 2:8",

  "1 Timothy 6:17","1 Timothy 6:18","2 Timothy 1:9","2 Timothy 2:22","2 Timothy 4:18",

  "Titus 2:7","Titus 3:14","Philemon 1:3","Hebrews 3:6","Hebrews 4:16",

  "Hebrews 10:19","Hebrews 11:6","Hebrews 12:28","Hebrews 13:20","Hebrews 13:21",

  "James 1:4","James 2:8","James 3:10","James 4:2","James 5:7",

  "1 Peter 1:22","1 Peter 2:2","1 Peter 3:9","1 Peter 4:10","1 Peter 5:5",

  "2 Peter 1:8","2 Peter 2:9","2 Peter 3:10","1 John 1:7","1 John 2:6",

  "1 John 3:2","1 John 4:4","1 John 5:3","2 John 1:4","3 John 1:2",

  "Jude 1:3","Jude 1:24","Revelation 1:3","Revelation 2:7","Revelation 22:21"
];

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
