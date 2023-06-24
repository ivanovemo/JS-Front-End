"use strict";

function checkIfAllDigitsAreSame(number) {
    const digitsString = number.toString();
    let isConsistent = true;
    let sum = Number(digitsString[0]);

    for (let i = 1; i < digitsString.length; i++) {
        if (digitsString[i] !== digitsString[i - 1]) {
            isConsistent = false;
        }

        sum += Number(digitsString[i]);
    }

    console.log(isConsistent)
    console.log(sum)
}

checkIfAllDigitsAreSame(2222222);