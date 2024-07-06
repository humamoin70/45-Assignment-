"use strict";
// 41:Magicians:Make a array of magician's names pass the array to a funtion called show_magician() which prints the name of each magician in the array 
Object.defineProperty(exports, "__esModule", { value: true });
let magicains = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function show_magicians(magicains) {
    magicains.forEach(element => {
        console.log(element);
    });
}
show_magicians(magicains);
