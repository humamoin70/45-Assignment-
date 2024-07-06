"use strict";
// .Shrink guest list:you just found out that your new dinner table won't arrive.
// . Start with yopur program from Exercise 16.Add a new line that print a message say 
// .Remove guest from your list one at a time untill only two namesremain in your list 
// a message to that person letting them know you are sorry you can not invite them to dinner
// Print a message to each of the two people still on your FileList,letting them know the 
// .Remove the last two names from your list, so you have an empty list . print your list of your Program .
Object.defineProperty(exports, "__esModule", { value: true });
let guestArray = ["Nida", "Huma", "Zain", "Shama", "Soha"];
console.log("I can invite only two people to Dinner");
while (guestArray.lenght > 2) {
    let removeGuest = guestArray.pop();
    console.log(`Dear ${removeGuest},you are not invited to the dinner`);
}
guestArray.map((item) => (console.log(`Dear ${item}, you are invited to dinner`)));
guestArray.pop();
console.log(guestArray);
