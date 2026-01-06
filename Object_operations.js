// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
//     1. Read and print the user’s name and email
//     2. Add a new property lastLogin: "2026-01-01"
//     3. Update role from "student" to "admin"
//     4. Delete the isActive property
//     5. Use Object.keys() to list all remaining fields



const user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
  };
  console.log(user.name);
  console.log(user.email);
  user.role="admin"
  delete user.isActive
  console.log(Object.keys(user))


//   Assignment 2: Exam Result Summary
//   ---------------------------------
//   Scenario : Marks are stored subject-wise for a student.
  
//   Test data:
//   const marks = {
//     maths: 78,
//     physics: 65,
//     chemistry: 82,
//     english: 55
//   };
  
//   Tasks:
//       1. Calculate total marks
//       2. Calculate average marks
//       3. Find the highest scoring subject
//       4. Add a new subject computer: 90
  
const marks = {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55,
    gettotal:function total(){
        t=0
        t=t+this.maths+this.physics+this.chemistry+this.english
        return t
    },
    getavg:function average(){
        a=0
        a=(a+this.maths+this.physics+this.chemistry+this.english)/4;
        return a
    },
    getlargest:function large(){
        return Math.max(this.chemistry,this.english,this.maths,this.physics)
    }
    
  };
  marks.computer=100
console.log(marks)
console.log(marks.getlargest())
console.log(marks.getavg())
console.log(marks.gettotal())
