"use strict";
// Q38: Cities :Write a function called describe_city and its country The function should print a simple sentence such as karachi is in pakistan Give the parameter for the country a defult value Call your function for three different cities at least one of which is not in the defult country .
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
;
describe_city("Karachi");
describe_city("Hydrabad");
describe_city("Abu zahbi", "Dubai");
