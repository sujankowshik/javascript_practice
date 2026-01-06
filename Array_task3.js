// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92



const marks = [78, 92, 35, 88, 40, 67];
//Task1
let r1=marks.filter(c=>c>=40)
console.log(r1)
//Task2
let r2=marks.map(c=>c+=2)
console.log(r2)
//Task3
let r3=marks.reduce((a,b)=>a>b?a:b)
console.log(r3)
//Task4
let r4=marks.find(c=>c<40)
console.log(r4)
//Task5
let r5=marks.findIndex(c=>c===92)
console.log(r5)