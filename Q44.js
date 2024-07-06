"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 44. Sandwiches:Write a function that accept a array of items a person wants on a sandwich.
// // The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwhich that is being ordred call the function three times using a different number of arguments each time 
function makeSandwich(item) {
    console.log('\nMaking your Sandwich with');
    item.forEach(Element => console.log("_" + Element));
    console.log('Enjoy your Sandwich !\n');
}
makeSandwich(['Ham', 'Cheese', 'Lettuce']);
makeSandwich(['turkey', 'Bacon',]);
makeSandwich(['Butter', 'jelly',]);
