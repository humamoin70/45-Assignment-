"use strict";
// 45: Cars: Write a function thatstores information about a car in a object .The funtion should always receive a manufacturer and a model name it should then accept an arbitrary number of keyword arguments:call the function with the required information and two other name_value pairs such as a color or an optional feature Print the object that sreturned to make sure all the information was stored correctly .
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let ans = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['navigations', 'power window'] });
console.log(ans);
