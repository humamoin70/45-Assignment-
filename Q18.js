"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q18. Seeing the world: Think of at least five places in the world you'd like to visit.
// . Store the locations in a array.Make sure the array is not in alphabetical order. 
// Print your array in its original order.
// .Print your array in alphabetical order without modifying the actual list .
// .Show that your array is its original order by printing it.
// Print your array in Reverse alphabetical order without changing the order of the original list. 
// .Show that your array is its original order by printing it again.
//  Reverse the order of your list print the array show that its order has changed . 
// . print the list to show its back to its original order .
// .Sort your array so its stored in alphbetical order.print the array to show that its order has changed .
// Sort to change your array so its stored in reverse alphabetical ondragover.Print the list to show that its order has changed .
// .
let fivePlaces = ["Saudi Arab", "Canada", "Singapoor", "kashmir", "sawat"];
console.log(fivePlaces);
let alphabeticalOrder = [...fivePlaces].sort();
console.log("Alphabetical Order:", alphabeticalOrder);
console.log("Original Order (unchanged):fivePlaces");
let reverseAlphabeticalOrder = [...fivePlaces].sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
console.log("Original Order (unchanged):", fivePlaces);
fivePlaces.reverse();
console.log("Reversed Order:", fivePlaces);
console.log("Array Order Changed:", fivePlaces);
fivePlaces.reverse();
console.log("Back to Original Order:", fivePlaces);
fivePlaces.sort();
console.log("Sorted in Alphabetical Order:", fivePlaces);
fivePlaces.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", fivePlaces);
