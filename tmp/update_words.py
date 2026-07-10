import urllib.request
import re

print("Fetching sgb-words.txt...")
url = "https://raw.githubusercontent.com/charlesreid1/five-letter-words/master/sgb-words.txt"
try:
    response = urllib.request.urlopen(url)
    words_data = response.read().decode('utf-8')
    # Filter for exact 5-letter alphabetical words
    words = sorted(list(set([
        w.strip().upper() 
        for w in words_data.strip().split('\n') 
        if len(w.strip()) == 5 and w.strip().isalpha()
    ])))
    print(f"Fetched {len(words)} unique 5-letter words.")
except Exception as e:
    print(f"Error fetching: {e}")
    exit(1)

# Format the word list nicely in chunks of 12 per line
formatted_chunks = []
chunk_size = 12
for i in range(0, len(words), chunk_size):
    chunk = words[i:i+chunk_size]
    formatted_chunks.append("  " + ", ".join(f"'{w}'" for w in chunk))

words_javascript_block = ",\n".join(formatted_chunks)

# Load src/words.ts
with open('src/words.ts', 'r', encoding='utf-8') as f:
    words_file_content = f.read()

# Locate the export const VALID_GUESS_WORDS declaration block
# It starts at export const VALID_GUESS_WORDS = new Set([ and ends at ]); before export const CHALLENGE_PUZZLES
pattern = r'export const VALID_GUESS_WORDS = new Set\(\[.*?\]\);'
replacement = f"""export const VALID_GUESS_WORDS = new Set([
  // Daily words added first
  ...DAILY_PUZZLES.map(p => p.word),
  ...CHALLENGE_PUZZLES.map(p => p.word),
  
  // Stanford GraphBase 5-letter words
{words_javascript_block}
]);"""

# Replace the block
new_content, count = re.subn(pattern, replacement, words_file_content, flags=re.DOTALL)
if count == 0:
    print("Error: Could not locate VALID_GUESS_WORDS block in src/words.ts")
    exit(1)

# Write back to src/words.ts
with open('src/words.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated src/words.ts with 5,757 words!")
