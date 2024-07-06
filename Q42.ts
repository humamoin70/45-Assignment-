// 42.Great Magicians:Start with a copy of your prigram from Exercise 39 Write a funtion called make_great() that modifies the array of magicians by adding the phares the great to each magicians () to see that the list has actually been modified.

let magicians:string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley','Albus Dumbledore']
function make_great(magicains:string[]){
    for(let i=0; i<magiciansArry.length; i++){
      
        magicians[i] = 'the Great ' + magiciansArry[i]
      }
  
  }
  
  
  
  function show_magicians(magicians: string[]){
  magicians.forEach(element => {
          console.log(element);
      });
  }
  
  make_great(magicians);
  
  show_magicians(magicians);
