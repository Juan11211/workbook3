"use strict"

// Define variables for person 1 
let nameFreddy = "Freddy Krueger";
let addressFreddy = "1428 Elm Street";
let cityFreddy = "Springwood";
let stateFreddy = "Ohio";
let zipFreddy = "56789";

// Define variables for person 2
let nameJason = "Jason Voorhees";
let addressJason = "Camp Crystal Lake";
let cityJason = "Cunningham County";
let stateJason = "New Jersey";
let zipJason = "12345";

// Define the function to display mailing labels
function displayMailingLabel(name, address, city, state, zip) {
    console.log("Name: " + name);
    console.log("Address: " + address);
    console.log("City: " + city);
    console.log("State: " + state);
    console.log("ZIP: " + zip);
}

// Invoke the function to display mailing labels for Freddy Krueger
displayMailingLabel(nameFreddy, addressFreddy, cityFreddy, stateFreddy, zipFreddy);
displayMailingLabel(nameJason, addressJason, cityJason, stateJason, zipJason);


// accepting 2 parameters
let num1;
let num2;

function addNumbers(num1, num2){
    let sum = num1 + num2
    console.log(sum)
}

addNumbers(5, 3)
addNumbers(500, 100)


// display receipt
let totalDue;
let amountPaid;

function displayReceipt(totalDue, amountPaid) {
    if (totalDue < amountPaid) {
        // Calculate the change
        let change = amountPaid - totalDue;
        console.log("Total Due: $" + totalDue);
        console.log("Amount Paid: $" + amountPaid);
        console.log("Change: $" + change);
    } else if (totalDue === amountPaid) {
        let change = amountPaid - totalDue;
        console.log("Total Due: $" + totalDue);
        console.log("Amount Paid: $" + amountPaid);
        console.log("Change: $" + change);
        console.log("Thank you");
    } else {
        let change = amountPaid - totalDue;
        console.log("Total Due: $" + totalDue);
        console.log("Amount Paid: $" + amountPaid);
        console.log("Run");
    }
}

// Example usages
displayReceipt(100, 200); // Output: "Total Due: $100", "Amount Paid: $200", "Change: $100"
displayReceipt(200, 200); // Output: "Thank you"
displayReceipt(200, 50);  // Output: "Run"

displayReceipt(100, 200)
displayReceipt(200, 200)
displayReceipt(200, 50)