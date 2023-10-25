"use strict";

function getSupplier(code) {
    // Find the index of the colon
    let supplierCodeIndex = code.indexOf(":");
    
    // Return all characters before the colon
    return code.substring(0, supplierCodeIndex);
}

function getProductNumber(code) {
    // Find the index of the : and -
    let colonIndex = code.indexOf(":");
    let hyphenIndex = code.indexOf("-");
    
    // Return all characters between the : and -
    return code.substring(colonIndex + 1, hyphenIndex);
}

function getSize(code) {
    // Find the index of the -
    let hyphenIndex = code.indexOf("-");
    
    // Return all characters after the -
    return code.substring(hyphenIndex + 1);
}

const productInfo = "DI:12345-M";

const supplier = getSupplier(productInfo);
const productNumber = getProductNumber(productInfo);
const size = getSize(productInfo);

console.log('The size ' + size + ' part ' + productNumber + ' is supplied by ' + supplier);
