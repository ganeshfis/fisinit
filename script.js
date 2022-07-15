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
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntilRetire(2000, 'ganesh'));
console.log(yearsUntilRetire(2000, 'bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePiesces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePiesces} apples
    and ${orangePieces} oranges`;
    return juice;

}
console.log(fruitProcessor(2, 3));


const calcAGE = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetire = function (birthYear, firstname) {
    const age = calcAGE(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;

    }
    else {
        console.log(`${firstname} has retired`)
        return - 1;

    }
    //return retirement;
    // 
}

console.log(yearsUntilRetire(1991, 'ganesh'));
console.log(yearsUntilRetire(1970, 'mike'));
*/



// Challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// check winner

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win  (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win  (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
// checkwinner function 
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);