function validateTitle(title){
    if(title === undefined) return false;
    if(title.length < 3) return false;
    // console.log("title valid");
    return true;
}

function validatePriority(priority){
    if(priority === 'low' || priority === 'medium' || priority === 'high'){
        // console.log("priority valid")
        return true;
    }
    return false;
}

function validateDueDate(date){
    let today = new Date(Date.now()).getDate();
    if(date > today){
        return true;
    }
    // console.log("date is not valid")
    return false;
}

export {validateTitle,validatePriority,validateDueDate}