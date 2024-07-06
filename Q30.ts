// / Q30. Hello Admin:Make a array of five or more usernames,including the name'admin'imagine you are writing code that will print a greeting tp each user after they log in to a Website ,loop through the array and pint a greeting to each user:
// // *if the user name is Hello admin,would you like tosee a status report ?
// // *Otherwise print a generic greeting such as Hello Eric thank you for logging in again. 

let empolyee : string[] = ["admin","Zain","Moin","Shayan","Ali"]
for( let i=0; i<empolyee.length; i++){
    console.log(empolyee[i] == "admin"){
        console.log("Heloo admin, would you like to see  STtus report?")
    }
}else{
    console.log(`hello ${empolyee[i]}`)
}