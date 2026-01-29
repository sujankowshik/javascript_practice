import {getPublishedCourses} from './courseEngine.js'
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses

export function mergeCartCourse(){
    let courses = structuredClone(getPublishedCourses());
    let finalCourse = courses.map((course) => {
        let cartItem = cart.find((item) => item.courseId === course.id);
        course.qty = cartItem.qty; // right now i am directly assigning it but there might be some error here when there is no course which is mentioned so need to tackle this 
        return course;
    })
    return finalCourse;
}

// console.log(mergeCartCourse())

// get the total amount of cart 

export function getCartTotal(){
    let cartItem = mergeCartCourse();
    let total = cartItem.reduce((accumulator,item) => accumulator + (item.price*item.qty),0);
    return total;
}

// console.log(getCartTotal());

// increase quantity immutably
export function increaseQuantity(cartId,qty){
    let cartItem = structuredClone(mergeCartCourse());
    let increasedCart = cartItem.map((item) => {
        if(cartId === item.id){
            item.qty = qty;
        }
        return item;
    })
    return increasedCart;
}
// console.log(increaseQuantity(103,5));

// Remove a course from cart
export function removeItem(cartId){
    let final = mergeCartCourse();
    let itemIndx = final.findIndex((item) => item.id === cartId);
    if(itemIndx !== -1){
        final.splice(itemIndx,1);
    }
    return final;
}

// console.log(removeItem(101));

// Check if all cart items are paid courses
export function checkIfAllPaid(){
    let final = mergeCartCourse();
    let allPaid = true;
    for(let val of final){
        if(val.price === 0){
            allPaid = false;
            break;
        }
    }
    return allPaid;
}

console.log(checkIfAllPaid());  // working 

// with this cart engine is also completed
