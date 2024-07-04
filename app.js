// Write a JavaScript program to calculate the days left before 14 August.

var today = new Date();
var August14th = new Date(today.getFullYear(), 7, 14); 
let daysLeft = (August14th - today) / (1000 * 3600 * 24);
console.log(`There are ${Math.floor(daysLeft)} days left before August 14th`);