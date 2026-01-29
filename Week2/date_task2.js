// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid

 let enrollmentDeadline = new Date("2026-01-20");
 let Today=new Date("2026-02-30");
 if(Today<enrollmentDeadline){
    console.log("Enrollment Open")
 }
 else{
    console.log("Enrollment closed")
 }
// Task 2
// for example if the date is 31 feb then it is invalid


   


