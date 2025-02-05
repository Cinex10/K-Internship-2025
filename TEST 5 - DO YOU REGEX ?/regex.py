
import json
import re

# Load regex patterns from regex.json
with open("regex.json", "r") as file:
    regex_patterns = json.load(file)

# Load data patterns from data.txt
with open("data.txt", "r") as file:
    lines = file.readlines()

# Create a dictionary to store matches
matches = {key: [] for key in regex_patterns.keys()}

# Apply regex patterns and extract matches
for line in lines:
    line = line.strip()
    for key, pattern in regex_patterns.items():
        if re.match(pattern, line):
            matches[key].append(line)

# Save results to respective files
for key, matched_lines in matches.items():
    with open(f"{key}.txt", "w") as output_file:
        output_file.write("\n".join(matched_lines))

print("Regex testing completed. Results saved to respective files.")
