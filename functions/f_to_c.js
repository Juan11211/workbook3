// "use strict";

function convertFtoC(fahrenheit) {
    return ((fahrenheit - 32) * 5/9).toFixed(2);
}

function displayFtoCConversion(fahrenheit) {
    let celsius = convertFtoC(fahrenheit);

    if (celsius > 32) {
        console.log(`${fahrenheit}°F is ${celsius}°C. It's pretty warm.`);
    } else if (celsius === 32) {
        console.log(`${fahrenheit}°F is ${celsius}°C. It's freezing.`);
    } else {
        console.log(`${fahrenheit}°F is ${celsius}°C. It's below freezing.`);
    }
}

displayFtoCConversion(212);
displayFtoCConversion(90);
displayFtoCConversion(72);
displayFtoCConversion(32);
displayFtoCConversion(0);
displayFtoCConversion(-40);

// "use strict";

// function convertFtoC(fahrenheit) {
//     return ((fahrenheit - 32) * 5/9).toFixed(2);
// }

// function displayFtoCConversion(fahrenheit) {
//     let celsius = convertFtoC(fahrenheit);
//     let message = `${fahrenheit}°F is ${celsius}°C.`;

//     console.log(message);
// }

// displayFtoCConversion(212);
// displayFtoCConversion(90);
// displayFtoCConversion(72);
// displayFtoCConversion(32);
// displayFtoCConversion(0);
// displayFtoCConversion(-40);
