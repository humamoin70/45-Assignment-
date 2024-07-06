// Q29.Favorite Fruit.Make a array of your favorite fruit.and then write a series of independent if ststgements that check for certain fruits in your array 
// *Make a array of your three favorite fruits and call it favorite fruits.
// *Write five if satatments Each should check whether a certain kind of fruit is in your Array,the if block should print a statment such as you really like bananas.

const favoriteFruits : string[]= ["Banana","Apple","Mango"];
 
if (favoriteFruits.includes("Banana")){
    console.log("you really like Bananas")
 }
 if (favoriteFruits.includes("Apple")){
    console.log("you really like Apples")
 }
 if (favoriteFruits.includes("Orange")){
    console.log("you really like Orange")
 }
else{
    console.log("Orange are not is you favorite fruits list");
}
 if (favoriteFruits.includes("Mangos")){
    console.log("you really like Mangos")
 }
 if (favoriteFruits.includes("Grapes")){
    console.log("you really like Grapes")
 }
 else{
    console.log("Grapes are not in your favorite fruit list");
 }