"use strict";
// Q28. Stages of Life: Write an if else chain that determines a persons stages of life.set a value for the variable age and then 
// *if the person is less than 2 years old print a massage that the person is a baby
//  *if the person is at least 2 years old but less than 4 print a massage that the person is a toddler 
//  *if the person is at least 4 years old but less than 13 print a massage that the person is a kid 
//  *if the person is at least 13 years old but less than 20 print a massage that the person is a teenager
//  *if the person is at least 20 years old but less than 65 print a massage that the person is a elder 
//  If and else 
Object.defineProperty(exports, "__esModule", { value: true });
let age = ;
if (age < 2) {
    console.log("the person is a babay");
}
else if (age < 4 && age < 13) {
    console.log("the person is a toddler");
}
else if (age < 13 && age < 20) {
    console.log("the person is a kid");
}
else if (age < 20 && age < 65) {
    console.log("the person is a  teenager");
}
else if (age < 65) {
    console.log("the person is a elder");
}
