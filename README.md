

<div align="center">
  <img src="Assets/keikenlogo.png" alt="keiken logo" width="100%"/>
</div>
<br>



# **TEST DAY**

Welcome to the **TEST DAY**! This collection is designed to challenge and enhance your skills in various technical domains, ranging from SQL and Regex to full-stack development and text processing. Each test is self-contained, focusing on a specific area to assess your proficiency and problem-solving abilities.


# **Deliverables**

1. Update your Github repository with the new changes you added.
2. For each exercise, read the README.md file, follow the steps to complete the exercise, put the answer on `AWSWERS.md` file .and save your work.
3. Commit your work and push it to on the branch you created. 


<br><br>
# Setting Up Your EC2 Machine

Before starting your work, make sure you are executing everything using the **ec2-user**, if not, execute the command : 
```bash
su ec2-user
```


## I - Setting up your Github account and getting your Tests Day repository: 

Follow these steps to connect your GitHub account to your EC2 machine.

### **1. Configure Git**
Set your global Git configuration with your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

Generate a new SSH key pair for authentication:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- Save the key to the default location (e.g., `/home/ec2-user/.ssh/id_ed25519`).
- Optionally, set a passphrase or leave it blank.


### **2. Add the SSH Key to the SSH Agent**
Start the SSH agent and add your new key:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```


### **3. Add Your SSH Key to GitHub**
1. Display the public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
2. Copy the output of the above command.
3. Go to your GitHub account; on your local machine:
   - Navigate to **Settings > SSH and GPG Keys**.
   - Click **New SSH Key**.
   - Paste the key and give it a title (e.g., "EC2 Machine").
   - Click **Add SSH Key**.


### **4. Test the SSH Connection**
Verify that your EC2 instance is successfully connected to GitHub:

```bash
ssh -T git@github.com
```

You should see a message like this:

```plaintext
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```


## II - Setting Up a New Git Repository and Pushing It to GitHub

### **Step 1: Initialize a New Git Repository**
1. Navigate to your project directory:
   ```bash
   cd ~/home/ec2-user/K-Internship-2025
   ```

2. Initialize the repository:
   ```bash
   git init
   ```
   This creates a new `.git` directory in your project folder.

---

### **Step 2: Add Files to the Repository**
1. Check the status of your repository:
   ```bash
   git status
   ```

2. Add files to the staging area:
   ```bash
   git add .
   ```
   This stages all files in the current directory for the next commit. You can also add specific files:
   ```bash
   git add filename
   ```

3. Commit the changes:
   ```bash
   git commit -m "Initial commit"
   ```

---

### **Step 3: Create a Repository on GitHub**
1. Log in to your [GitHub account](https://github.com/).
2. Click the **New** button to create a new repository.
3. Provide a repository name, optional description, and choose visibility (Public/Private).
4. Do **not** initialize with a README (we already have local files).
5. Click **Create Repository**.

---

### **Step 4: Link Your Local Repository to GitHub**
1. Copy the repository's SSH or HTTPS URL from GitHub.

2. Add the remote repository to your local Git repository:
   ```bash
   git remote add origin <repository-url>
   ```
   Example:
   ```bash
   git remote add origin git@github.com:username/repository-name.git
   ```

3. Verify the remote URL:
   ```bash
   git remote -v
   ```

---

### **Step 5: Push the Code to GitHub**
1. Push your local changes to the GitHub repository:
   ```bash
   git push -u origin main
   ```
   Replace `main` with `master` if your default branch is named `master`.

2. For subsequent pushes, you can simply use:
   ```bash
   git push
   ```
  <br><br>
  


# **Directory Overview**

### 1. **TEST 1 - SQL**
   - **Objective**: Test your ability to write efficient SQL queries.
   - **Contents**: 
     - Tasks related to data retrieval, aggregation, and manipulation.
     - Real-world datasets to simulate practical scenarios.
   - **Skills Assessed**:
     - Data base architecture.
     - Use of SQL functions and joins.


### 2. **TEST 2 - A SMALL FULL STACK APP**
   - **Objective**: Work on a simple full-stack application.
   - **Contents**:
     - Frontend: Basic UI/UX implementation.
     - Backend: Server setup and API integration.
     - Database: CRUD operations with a database.
   - **Skills Assessed**:
     - Frontend and backend integration.
     - RESTful API design.
     - Debugging skills.


### 3. **TEST 3 - A QUICK QUIZ**
   - **Objective**: Solve a series of quick programming and problem-solving challenges.
   - **Contents**:
     - Short tasks across multiple domains, such as math, algorithms, and puzzles.
   - **Skills Assessed**:
     - Logical reasoning.
     - Time management.


### 4. **TEST 4 - XSLT**
   - **Objective**: Work with XML and XSLT for data transformation.
   - **Contents**:
     - Transform XML data into readable formats (HTML, text, etc.) using XSLT.
   - **Skills Assessed**:
     - Understanding of XML structure.
     - Mastery of XSLT templates and functions.
     - Formatting and data transformation techniques.


### 5. **TEST 5 - DO YOU REGEX?**
   - **Objective**: Solve complex text matching and extraction tasks using Regular Expressions.
   - **Contents**:
     - Exercises involving pattern matching, data validation, and string manipulation.
   - **Skills Assessed**:
     - Proficiency with Regex syntax.
     - Advanced text processing techniques.


### 6. **TEST 6 - GREP IT**
   - **Objective**: Use Linux command-line tools like `grep` to extract and process data.
   - **Contents**:
     - Real-world log file analysis tasks.
     - Data filtering and transformation using Linux commands.
   - **Skills Assessed**:
     - Mastery of `grep`, `awk`, `sed`, and other CLI tools.
     - Automation of text processing tasks.

<br><br>
Good luck and happy coding!

—  
**The Keiken Team**



