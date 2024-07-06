"use strict";
// Q3.Name Cases:Store a person's name in a variable and then print that person's name in lowercase,uppercase,and tiltlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "huma moin";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.charAt(0).toLocaleUpperCase() + personName.slice(1));
