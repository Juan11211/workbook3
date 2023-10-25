"use strict";

function convertFtoC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let fahrenheitValue = 212;
let celsiusValue = convertFtoC(fahrenheitValue);

console.log(`${fahrenheitValue}°F is ${celsiusValue}°C`);


