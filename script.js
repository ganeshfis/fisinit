'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");
*/

function logger() {
    console.log("my name is Ganesh");
}
//function call
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples
    and ${oranges} oranges`;
    return juice;

}

const aJ = fruitProcessor(4, 6);
console.log(aJ);

const appleOrangeJuice = fruitProcessor(3, 5);
console.log(appleOrangeJuice);



