## String Calculator

This is an iterative implementation of a simple string calculator. It follows the principles of Test Driven Development (T.D.D) so unit tests were written first, then run causing them to  fail and then code written to allow tests to pass. We can then refactor knowing we have test conditions that still pass.

Each iteration was done the same. New unit tests added, run to fail and then code written and refactored.

### App Structure

This is a really simple set of Javascript files organised in the following way:

`src directory` -> This contains each iteration of the code seperated out into its own directory. I.e Version 1 lives in the V1 folder.

`test directory` -> This directory contains the corresponding unit tests for each iteration in its own directory. I.e Version 1 tests live in the V1 directory.

### Running the App

* Clone repo
* Run `npm install`. This is to simply install the test runners `mocha` and `chai`. There are no other dependencies
* Run `npm test`. This will run all tests. The output should be similar to the following:

![tests passing](/testOutputs/full_pass.png)

## Process for each version

Below are links to describe the process taken for each iteration of the code. With screenshots of the output.

* [Version 1](/testOutputs/versionOne.md)
* [Version 2](/testOutputs/versionTwo.md)
* [Version 3](/testOutputs/versionThree.md)
* [Version 4](/testOutputs/versionFour.md)
* [Version 5](/testOutputs/versionFive.md)