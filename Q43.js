"use strict";
// 43. Unchanged Magicions : Start with your work from exercise 40 Call the funtion make _great () with a copy of the array of magicions names Because the original array will be unchanged return the new array and store it in a seperate Array,call show_magicians() with each array to show that you have one array of the original names and one array with the great added to beach magicians name. 
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArry(arr) {
    return [...arr];
}
function make_great(magiciansArry) {
    for (let i = 0; i < magiciansArry.length; i++) {
        magiciansArry[i] = 'the Great ' + magiciansArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArry = copyArry(magicians);
make_great(copyMagicianArry);
console.log('\n\nThis is my orginal Arry:');
show_magicians(magicians);
console.log('\n\nThis is my modified copy of the Arry:');
show_magicians(copyMagicianArry);
