// Q34.Pizzas : Think of at least three kinds of your favorite pizza.
// store these pizza names in a array and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// *Add a line at the end of your program ,outside the for loop that states how much you like pizza . The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence such as i really love pizza,

let favoritePizzas: string[] = ["Extra Cheez","Afghani Tikka","Malai Tikka"];

for(let i = 0 ; i< favoritePizzas.length; i++){
    console.log(`I like ${favoritePizzas[i]}Pizza.`);
}
console.log("I Really love Pizza")