'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");


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



function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(2000);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2000);
console.log(age1, age2);
*/

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
// arrow fucntion

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetire = (birthYear, firstname) => {
    const age = 2000 - birthYear;
    const retirement = 65 - age;
    return `${fisrtname} retires in ${retirement} years`;
}
console.log(yearsUntilRetire(2000, 'ganesh'));
console.log(yearsUntilRetire(2000, 'bob'));