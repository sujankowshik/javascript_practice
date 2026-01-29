// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"


const students = [
      { id: 1, name: "Ravi", marks: 78 },
      { id: 2, name: "Anjali", marks: 92 },
      { id: 3, name: "Kiran", marks: 35 },
      { id: 4, name: "Sneha", marks: 88 },
      { id: 5, name: "Arjun", marks: 40 }
    ];
    //Task 1
    let r1=students.filter(c=>c.marks>=40);
    console.log(r1)
    //Task 2
    let r2=students.map(c=>{
        if(c.marks>=90){
             c.gradefield='A'
             return c
        }
        else if(c.marks>=75){
            c.gradefield='B'
            return c
        }
        else if(c.marks>=60){
             c.gradefield='C'
             return c
        }
        else{
             c.gradefield='D'
             return c
        }
    })
    console.log(r2)

    //Task 3
    