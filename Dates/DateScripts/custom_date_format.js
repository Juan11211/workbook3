"use strict"

// Get the current date
const currentDate = new Date();

// Define an array of weekday names
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayOfWeekIndex = currentDate.getDay();

// Get the day, month, and year
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();

// Get the weekday name
const weekdayName = weekdays[dayOfWeekIndex];

// Format the date as "day-month-year (weekday name)"
const formattedDate = `${day}-${month}-${year} (${weekdayName})`;

// Display the formatted date
console.log(formattedDate);

