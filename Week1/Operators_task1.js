// Initial data:
//         let totalAmount = 0;

// 🎯 Tasks
//   1. Add ₹500 to the total
//   2. Add ₹1200 to the total
//   3. Apply a ₹200 discount
//   4. Add 18% GST
//   5. Print the final bill amount

let total=0
total+=500
total+=1200
total-=200
total=total+18/100*total
console.log(total)