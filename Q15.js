"use strict";
// 15.Changing a guest list: you just heard that one of your guests can't make the dinner,so you need to send out a new set of invitation.you;ll have to think of someone else to invite. 
// Start with your program from exercise 14. add a print statementat the end of your program starting the name of the guest who can't make it.
// Modify yuor list ,replacing the name of the guest who cant'make it with the name of new person your are inviting.
// print a second set of invition message,one for each person who is still in your List. 
Object.defineProperty(exports, "__esModule", { value: true });
let guestArr = ["Huma", "Hina", " Zain", "Sana", "Sidra"];
let canNotAttend = "sana";
console.log(canNotAttend + '  ' + "can not make it,for Dinner");
let newGuest = "Moin";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
guestArr.map({ item }, console.log(`Dear ${item}, You are coordinally invite to Dinner`));
