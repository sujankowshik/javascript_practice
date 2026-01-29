import {validateTitle,validatePriority,validateDueDate} from './validator.js'
const tasks = [];

// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions

    // If valid, add to tasks array
    dueDate = new Date(dueDate).getDate()
    
    if(validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)){
        tasks.push({title,priority,dueDate});
        console.log("Success");
        return 1;
    }
    // Return success/error message
    console.log("Not Valid");
    return 0;
}

function getAllTasks() {
    for(let task of tasks){
        console.log(task.title,task.priority,task.dueDate);
    }
}

function completeTask(taskId) {
    // Find task and mark as complete
    tasks.splice(taskId-1,1);
}

export {addTask,getAllTasks,completeTask};