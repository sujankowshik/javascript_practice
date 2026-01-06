// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];
//Task 1
let r1=temperatures.filter(t => t > 35);
console.log(r1);
//Task 2
let r2=temperatures.map(t => (t * 9/5) + 32);
console.log(r2);
//Task 3
let r3=temperatures.reduce((accumulator,element)=>accumulator+element,0);
console.log(r3/temperatures.length);
//Task 4
let r4=temperatures.findIndex(t=>t===28)
console.log(r4);
//Task 5
let r5=temperatures.find(t=>t>40)
console.log(r5);