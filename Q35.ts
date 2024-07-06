// Q35. Animals: Think of at least three different animals that have a common characteristic.store the names of these animals in a list and then use a for loop to print out the name of each Animal .
// Modify your program to print a statement about each animal such as a dog would make a great pet Add a line at the end of your program stating what these animals have in common you could print a sentance such as any these animals would make a great Pet 

let animals: string[] = ["Dog","Loin","cats"];

for(let i = 0 ; i< animals.length; i++){
    console.log(`A ${animals[i]} would make a great pet`);
}
console.log("Any of these animals would make a wonderful companian");