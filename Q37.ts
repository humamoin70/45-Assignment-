// Q37: Large Shirts:Modify the make_shirt () function so that shirts are large by default with a message that reads i love Typescript .Make a large short and a mediam shirt with the default message and a shirt of any size with a different message .

function make_shirt(size = "L", message = "I love Typescript!"):void{
console.log(`I am Making a ${size} T.shirt with the message "${message}"`);
}
make_shirt("small")
make_shirt("Mediam")
make_shirt("Large" ,"i am Programmer")