// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
let currentDate=new Date();
console.log(currentDate)
console.log("Year is ",currentDate.getFullYear())
console.log("Month is ",currentDate.getMonth())//month index starts from 0
console.log("Date is",currentDate.getDate())
console.log("Day of week is ",currentDate.getDay())//sunday is 0
console.log("Hours:",currentDate.getHours())
console.log("Minutes:",currentDate.getMinutes())
console.log("Seconds:",currentDate.getSeconds())
//formatting date to DD-MM-YYYY HH:mm:ss
let dd=currentDate.getDate();
let mm=currentDate.getMonth()+1;
let yyyy=currentDate.getFullYear();
let hh=currentDate.getHours();
let min=currentDate.getMinutes();
let ss=currentDate.getSeconds();
let formattedDate=`${dd}-${mm}-${yyyy} ${hh}:${min}:${ss}`;
console.log(formattedDate)