"use strict";
// Q33. Oridinal Numbers :Ordinal numbers indicatetheir position in a Array,such as 1st or 2nd .Most ordinal numbers end in this, except 1,2and 3.
// *Store the numbers 1 through 9 in a Array 
// *Loop through the array .
// Use an if_else chain inside the loop to print the proper ordinal ending for each number your output shpuld read 1st 2nd 3rd 4th 5th 6th 7th 8th 9th and each result should be on a separate line .
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    let suffix;
    if (numbers[i] === 1) {
        suffix = "st";
    }
    else if (numbers[i] === 2) {
        suffix = "nd";
    }
    else if (numbers[i] === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log(`${numbers[i]}${suffix}`);
}
