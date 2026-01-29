

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably

export function getActiveUsers(){
  // we know that when we are trying to get the data or select the data we use filter function
  let activeUsers = users.filter((user) => user.active===true);
  return activeUsers;
}

// console.log(getActiveUsers()); // tested Working

export function getActiveUserNames(){
  // here we have Two options 
  // 1. we can run the filter function on directly users 
  // 2. we get the active users by using the getActiveusers function and then apply filter on that 
  // as we have done the first one already in the previous function we will try the option 2 here 
  let activeUsers = getActiveUsers();
  // let activeUserNames = activeUsers.filter((user) => {
  //   console.log(user.name)
  //   return user.name;
  // });
  // return activeUserNames; // i need to figure out why this gave the whole objects as i was returning the name only
  let activeUserNames = [];
  for(let user of activeUsers){
    // console.log(user.name)
    activeUserNames.push(user.name);
  }
  return activeUserNames;
}

// console.log(getActiveUserNames()); done complted;



// we need to check if there is any adming or not but we will not return the details of admin as that could cause the security issues 

export function isAdminExist(){
  let exist = false;
  for(let user of users){
    if(user.role === 'admin'){
      exist = true;
      return exist;
    }
  }
  return exist;
}

// console.log(isAdminExist()); done working

// we need to find the user by id 

export function findUserById(id){
  // this is a find task so we use filter
  let user = users.find((user) => user.id === id)
  return user; // this will return the user with that id or undefined if it does not exist 
}

/* 
  one Thing to remember 
  1. filter : when you have some selection task
  2. map : need to change 
  3. find : when you want to find
  4. findIndex : finds the index
  5. reduce : aggregate computations
*/

// deactivate a user 
export function deactivateUser(id){
  // we need id as we should know which user we have to deactivate
  // now this is working let's try to make this function in one line if that's possible
  // let usersAfter = users.map((user) => user.id===id ? user.active=false:user) // this is returning only the active status so we have to write it inside the block
  let clonedUser = structuredClone(users)
  let usersAfter = clonedUser.map((user) => {
    if(user.id === id){
      user.active = false;
    }
    return user
  })
  
  return usersAfter;
}

// console.log(deactivateUser(1)); // now working 
// console.log(users);

//  with this module one is completed 