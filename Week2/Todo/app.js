import {addTask,completeTask,getAllTasks} from './task.js'
// we have imported from the task module

// let title, priority, dueDate;
// this is required to create the task
// adding some items
addTask("haircut","medium","2026-1-25")
addTask("running","high","2026-1-22")
addTask("bath","high","2026-1-22")
addTask("cycle","low","2026-1-25")
// displaying all the records here
getAllTasks();
// complete the second task
completeTask(2)
// after removing checking the tasks again
getAllTasks();