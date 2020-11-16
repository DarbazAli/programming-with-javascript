/* 
ALGORITHMS AND DATA STRUCTURS

EXAMPLE:
PROBLEM: Design an Algorithm to add Two numbers and display the result

SOLUTION

METHOD 1
Step 1 - START
Step 2 - declare three integers a, b & c
Step 3 - define values of a & b
Step 4 - add values of a & b
Step 5 - store output of step 4 to c
Step 6 - print c
Step 7 - STOP

METHOD 2

Step 1 - START ADD
Step 2 - get values of a & b
Step 3 - c = a + b
Step 4 - display c
Step 5 - STOP

TEST CASES
ADD(2, 2) => 4
ADD(0, 0) => 0
ADD(-2, 2) => 0
ADD(-2, -2) => -4
*/

// Scripting the algorithm in javaScript
// Step 1 - START ADD ( define the function)
const ADD = (a, b) => {
  // Step 2 - get values of a & b
  // Step 3 - c = a + b
  const c = a + b

  // Step 4 - display c
  console.log(c)

  // Step 5 - STOP
  return
}

ADD(2, 2) // 4
ADD(0, 0) // 0
ADD(-2, 2) // 0
ADD(-2, -2) // 0
