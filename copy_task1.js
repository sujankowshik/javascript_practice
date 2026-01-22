// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t

const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",
      language: "en"
    }
  };
  let user_copy1={...user}
  user_copy1.name="vilok"
  user_copy1.preferences.theme="light"
  user.log="log"
  user_copy1.log="log"
  console.log(user)
  console.log(user_copy1)

  const order = {
    orderId: "ORD1001",
    customer: {
      name: "Anita",
      address: {
        city: "Hyderabad",
        pincode: 500085
      }
    },
    items: [
      { product: "Laptop", price: 70000 }
    ]
  };

  let order_copy=structuredClone(order)
  order_copy.customer.city="Ladakh"
  order_copy.items[0].price="20"
  console.log(order)
  console.log(order_copy)

