// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
    
// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
  ];
  //Task 1
  let r1=cart.filter(c=>c.inStock===true)
  console.log(r1)
  //Task 2
  let r2=cart.map(c=>[c.name,c.price])
  console.log(r2)
  //Task 3
  let r3=cart.reduce((a,b)=>a+(b.price*b.quantity),0)
  console.log(r3)
  //Task 4
  let r4=cart.find(c=>c.name==='Mouse')
  console.log(r4)
  //Task 5
  let r5=cart.findIndex(c=>c.name==='Keyboard')
  console.log(r5)