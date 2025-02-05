# **K-Intership 2025**
## Test 5 - DO YOU REGEX ?

## Objective

The purpose of this test is to evaluate your ability to craft regular expressions for real-world text processing tasks.

- **Time Allotted:** 40 minutes
---

## Task Description

You are provided with a file (`data.txt`) containing various patterns. Your job is to:
1. **Write Regex Patterns**: Create regular expressions to match specific patterns in the data.
2. **Validate and Extract**: Use your regex patterns to identify and extract valid matches from the file.
3. **Organize Results**: Save valid matches for each pattern into separate files:
   - `emails.txt`
   - `dates.txt`
   - `ips.txt`
   - `colors.txt`
4. **Count Matches**: Provide a summary of how many valid matches were found for each pattern.

---

## Patterns to Match

### 1. Email Addresses
Write a regex to match email addresses in the format:
- `username@domain.extension`
- Constraints:
  - The username may contain letters, numbers, dots (`.`), underscores (`_`), or hyphens (`-`).
  - The domain may contain letters, numbers, and hyphens (`-`).
  - The extension must be between 2 and 6 characters long.

---

### 2. Dates
Write a regex to match dates in the formats:
- `YYYY-MM-DD`
- `MM/DD/YYYY`
- Constraints:
  - The year (`YYYY`) must be between `1900` and `2099`.
  - The month (`MM`) must be `01–12`.
  - The day (`DD`) must be valid for the given month.

---

### 3. IPv4 Addresses
Write a regex to match valid IPv4 addresses in the format:
- `XXX.XXX.XXX.XXX`
- Constraints:
  - Each `XXX` must be a number between `0` and `255`.

---

### 4. Hexadecimal Color Codes
Write a regex to match valid hexadecimal color codes in the format:
- `#RRGGBB`
- Constraints:
  - Each of `RR`, `GG`, and `BB` must be a 2-digit hexadecimal number (0–9, A–F, a–f).

---

## Example Input File

`data_patterns.txt`:
```
john_doe@example.com
2024-11-29
192.168.0.1
#1A2B3C
invalid-email@com
02/30/2024
300.300.300.300
#ZZZZZZ
```

---

## Expected Output Files

1. `emails.txt`:
   ```
   john_doe@example.com
   ```

2. `dates.txt`:
   ```
   2024-11-29
   ```

3. `ips.txt`:
   ```
   192.168.0.1
   ```

4. `colors.txt`:
   ```
   #1A2B3C
   ```

---

## How to Complete the Test

1. **Write Regex Patterns**:
   - Write a regex pattern for each type of data.
   - Test the regex against the provided input file.
   - Put each regex patten in its field in regex.json. (Don't forget to escape when you have to)

2. **Extract and Save Matches**:
   - Use the regex.py script to extract extract valid matches for each regex pattern.
```
    - cd TEST\ 5\ -\ DO\ YOU\ REGEX\ \
    - python regex.py
```


3. **Provide Summary**:
   - List the total number of matches found for each type of data.

---

## Submission

Submit the following:
- Your regex patterns.
- Output files (`emails.txt`, `dates.txt`, `ips.txt`, `colors.txt`).
- A short explanation of your approach for each regex.

---

Good luck!

—  
**The Keiken Team**