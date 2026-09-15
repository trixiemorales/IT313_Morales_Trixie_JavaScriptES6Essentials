# IT313 JavaScript ES6 Essentials

## Enrollment Eligibility Checker

This project is an Enrollment Eligibility Checker for IT313. It
calculates the average grade of each enrollee and determines whether
the student is PASSING or on PROBATION.

A student is considered PASSING if the average of their prelim,
midterm, and final grades is 75 or above.

## Approach

The program uses modern JavaScript ES6+ features.

- const for variables that are not reassigned
- Arrow functions for shorter function syntax
- Template literals for formatted output
- Destructuring to get values from enrollee objects
- map() to create the results array
- filter() to separate passing and probation students
- reduce() to calculate the class average
- ES modules using import and export
- Promise to simulate retrieving data from a registrar API
- async/await to handle asynchronous data
- try/catch to handle possible errors

The grade calculation functions are placed in gradeUtils.js.
The main program is placed in main.js.

## Files

### gradeUtils.js

Contains the computeAverage() and isPassing() functions.

### main.js

Contains the enrollee data, simulated API call, grade processing,
filtering, class average calculation, and formatted report.

## How to Run

1. Open the project folder in VS Code.
2. Open the terminal.
3. Make sure Node.js is installed.
4. Run:

node main.js

or:

npm start

## Expected Output

=== IT313 Enrollment Eligibility Report ===
Ana Cruz - Average: 87.67 - PASSING
Bea Santos - Average: 65.00 - PROBATION
Cid Ramos - Average: 94.67 - PASSING
Dex Alonzo - Average: 55.00 - PROBATION
Eli Tan - Average: 78.00 - PASSING
Class Average: 76.07
Passing: 3 / 5