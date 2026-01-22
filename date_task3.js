// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years

let dob = "2000-05-15";
let birth=new Date(dob)
let Today=new Date()
console.log(Today.getFullYear()-birth.getFullYear())
