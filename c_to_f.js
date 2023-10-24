"use strict";

function convertCtoF(celsius) {
    return (celsius * 9/5) + 32;
}

function displayCtoFConversion(celsius) {
    let fahrenheit = convertCtoF(celsius);

    if (fahrenheit > 32) {
        console.log(`${celsius}°C is ${fahrenheit}°F. It's above freezing.`);
    } else if (fahrenheit === 32) {
        console.log(`${celsius}°C is ${fahrenheit}°F. It's freezing.`);
    } else {
        console.log(`${celsius}°C is ${fahrenheit}°F. It's below freezing.`);
    }
}

let celsiusValues = [100, 45, 19, 0, -7, -40];

for (let celsius of celsiusValues) {
    displayCtoFConversion(celsius);
}
