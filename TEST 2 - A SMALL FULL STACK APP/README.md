# K-Internship 2025
## TEST 2 - A Small Full Stack App

This test is meant to test your knowledge and ability in frontend and backend frameworks.
The frameworks that are used in this test are Spring and React.

- **Time Allotted:** 1H30
---

# Notes app

The app you will be working on is a simple note taking app where the user should be able to perform the following tasks:

 1. Create notebooks
 2. Create a note within a notebook
 3. Delete a note
 4. Delete a notebook

> There will be several bugs and/or build time errors. You would have to resolve each one of them and mention it in your ANSWERS.md an make sure the app is working as it is supposed to. 

## Running the backend

Move into the **spring-back** directory and run the following command:

    ./mvnw compile exec:java -Dexec.mainClass="com.keiken.test.TestApplication"

## Running the frontend
Move into the **react-front** directory and run the following commands:

    npm install
    npm run dev -- --host
    go to `https://<your-id>.sandsculptor.keiken-digital.io:5173
    
PS : you can check <your-id> on the **address bar**  

# Implement a feature

Once you have the app working you should implement a feature that would allow the user sort notes alphabetically or by the time they were last updated.

> Note: You should modify the backend so that notes are returned sorted
> to the frontend


*Good luck, and happy coding!*

**- The Keiken Team -**