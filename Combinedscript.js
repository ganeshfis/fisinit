
let js = "amazing";
console.log(40 + 8 + 23 - 10);

//For initializing values and variables
console.log("amazing");
console.log(21);

let firstName = "Ganesh";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let Ganesh_r = "VR";
let $function = 27;

let person = "Ganesh";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Codes";

let job1 = "develop";
let job2 = "teaches";

console.log(myFirstJob);

//Data type

let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof javascriptIsFun);


javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;


var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

const now = 2037;
const ageGanesh = now - 1991;
const agevarun = now - 2018;
console.log(ageGanesh, agevarun);

console.log(ageGanesh * 2, ageGanesh / 10, 2 ** 3);


//Assignment

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

//String Functions




const Ganesh = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(Ganesh);

const GaneshNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(GaneshNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


//control statement : if and else


if (age >= 18) {
    console.log('varun can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`varun is too young. Wait another ${yearsLeft} years`);
}



let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = '2001';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Ganesh'));
console.log(typeof NaN);

console.log(String(21), 21);



// Equality operation


if (age === 18) console.log('You just became an adult');

if (age == 18) console.log('You just became an adult');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');

//Assignment



const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy ');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
}

// Switch

const day = 'friday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Ganesh';
console.log(`I'm ${2037 - 1991} years old ${me}`);

//Assignment

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);