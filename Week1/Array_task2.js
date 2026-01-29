// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"


const courses = ["javascript", "react", "node", "mongodb", "express"];
//Task1
let r1=courses.filter(c=>c.length>5)
console.log(r1)
//Task2
let r2=courses.map(c=>c.toUpperCase())
console.log(r2)
//Task3
let r3=courses.find(c=>c==='react')
console.log(r3)
//Task4
let r4=courses.findIndex(c=>c==='node')
console.log(r4)