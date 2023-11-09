// "use strict";

// function convertCtoF(celsius) {
//     return (celsius * 9/5) + 32;
// }

// function displayCtoFConversion(celsius) {
//     let fahrenheit = convertCtoF(celsius);

//     if (fahrenheit > 32) {
//         console.log(`${celsius}°C is ${fahrenheit}°F. It's pretty warm.`);
//     } else if (fahrenheit === 32) {
//         console.log(`${celsius}°C is ${fahrenheit}°F. It's freezing.`);
//     } else {
//         console.log(`${celsius}°C is ${fahrenheit}°F. It's below freezing.`);
//     }
// }

// displayCtoFConversion(100)
// displayCtoFConversion(45)
// displayCtoFConversion(19)
// displayCtoFConversion(0)
// displayCtoFConversion(-7)
// displayCtoFConversion(-40)

"use strict";

function convertCtoF(celsius) {
    return ((celsius * 9/5) + 32).toFixed(2);
}

function displayCtoFConversion(celsius) {
    let fahrenheit = convertCtoF(celsius);
    let message = `${celsius}°C is ${fahrenheit}°F.`;

    console.log(message);
}

displayCtoFConversion(100);
displayCtoFConversion(45);
displayCtoFConversion(19);
displayCtoFConversion(0);
displayCtoFConversion(-7);
displayCtoFConversion(-40);
