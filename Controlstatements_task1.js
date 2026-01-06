// HANDS-ON 1: Smart Login Status Engine
// ----------------------------------------

// Initial data:
//     let isLoggedIn = true;
//     let isProfileComplete = false;

// Tasks:
//    1. If user is not logged in → show "Please login"
//    2. If logged in but profile incomplete → show "Complete your profile"
//    3. If logged in and profile complete → show "Welcome back!"
//    4. Store the result in message
//    5. Print the message



let l=true;
let p=false;
function logging(l,p){
    if(l==false){
        return "please login"
    }

    else if (l==true && p==false){
        return "complete your profile"

    }
    
    

}
msg=logging(true,false)
console.log("message is",msg);
