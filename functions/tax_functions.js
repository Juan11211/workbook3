"use strict"

function getSocSecTax(grossPay) {
    const taxRate = 0.062;
    return grossPay * taxRate;
}

function getMedicareTax(grossPay) {
    const taxRate = 0.145;
    return grossPay * taxRate;
}


function getFederalTax(grossPay, whCode) {
    let federalTax = 0;

    if (whCode == 0) {
        federalTax = 0.023 * grossPay;
    } else if (whCode == 1) {
        federalTax = 0.021 * grossPay;
    } else if (whCode == 2) {
        federalTax = 0.195 * grossPay;
    } else if (whCode == 3) {
        federalTax = 0.185 * grossPay;
    } else {
        // Calculate tax for withholding codes greater than or equal to 4
        const baseRate = 0.18;
        const extraRate = 0.005 * (whCode - 3);
        federalTax = (baseRate - extraRate) * grossPay;
    }

    return federalTax.toFixed(2);
}


console.log(getFederalTax(750,0))
console.log(getFederalTax(1550,2))
console.log(getFederalTax(1100,6))