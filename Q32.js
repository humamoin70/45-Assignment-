"use strict";
// Q32.Checking username: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// // *make a list of five usernames called new _users.Make sure one or two the new username are also in current_userlist.
// // *loop through the new_users list to see if each new usernames has already been used.if it has print a message that the person will need to enter a new username. if a usernames has npt been used print a message saying that the username is availabe.
// // *Make sure your comparison is case insensitive.if 'john' has been used JOHN should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Huma", "Hina", "Zain", "Ali", "Maria"];
let new_users = ["ali", "zain", "Saba", "Moin", "Hina"];
for (let new_user of new_user) {
    let isAvailable = true;
    for (let current_user of current_users)
        ;
    if (new_user.toLowerCase() === current_user.toLowerCase()) {
        console.log(`username"${new_user}" is already taken.please choose a diffrent username.`);
        isAvailabe = false;
        break;
    }
    if (isAvailable) {
        console.log(`username"${new_user}" is available`);
    }
}
