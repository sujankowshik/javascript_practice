
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

// we need to get all the published courses
export function getPublishedCourses(){
    // as the task is of selection we are using filter
    let publishedCourses = courses.filter((course) => course.published===true);
    return publishedCourses;
}

// console.log(getPublishedCourses());

export function sortByPrice(){
    // if the course1's price is higher we are asking it to consider course1
    let sortedCourses = courses.sort((course1,course2) => course1.price > course2.price ? -1:1);
    return sortedCourses
}

// console.log(sortByPrice());

// we need to extract only {title and price}
export function extractTitleAndPrice(){
    let data = courses.map((course) => {
        let title = course.title;
        let price = course.price;
        return {title,price};
    })
    return data;
}
// console.log(extractTitleAndPrice());

// now we need to calculate the total value of published courses
// now as we are dealing with aggregate function we need to use reduce function
export function getTotalValue(){
    let total = getPublishedCourses().reduce((accumulator,course) => accumulator + course.price,0);
    return total;
}
// console.log(getTotalValue()); 
export function addCourse(id,title,price,published){
    let courseToBeAdded = {
        id:id,
        title:title,
        price:price,
        published:published
    }
    let data = [...courses]
    data.push(courseToBeAdded);
    return data
}
// addCourse(104,'express',4999,true);
// console.log(courses);
// console.log(addCourse(104,'express',4999,true));

// with this we have completed this module as well now we will move to the next module