// 19.Dinner Guests:Working with one of the programs from Exercises 14 through 18 print a message indicating the number of people you are invited to dinner.

let guestArray: string[] = ["Huma" , "Hina" , "sana" , " zain" , "Moin"]
guestArray.map((item) => 
console.log(`Dear ${item}, you are invited to a Dinner`))
function printNumberOfGuests(guests: string[]): void {
let numberOfGuests = guests.length;
  console.log(`You are inviting ${numberOfGuests} people to dinner.`);
}
