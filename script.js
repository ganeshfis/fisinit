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



// arrays


const friends = ['Ganesh', 'Ben', 'Jack'];
console.log(friends);


const y = new Array(1991, 1984, 2009, 2020
);

console.log(friends[0]);

console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['bbb', 'vfvdv'];

const firstname = "ganesh";
const ganesh = ['harry', 'pj', 2037 - 1991, 'teacher', friends];
console.log(ganesh);


/// exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2010];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years.length - 1);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge([years.length - 1])];
console.log(ages);
const friends = ['Ganesh', 'Ben', 'Jack'];

//add elements to array
const newL = friends.push('jay');
console.log(friends);
console.log(newL);


friends.unshift('Johnny');
console.log(friends);

//remove elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log([popped]);

friends.shift();
console.log(friends);

console.log(friends.indexOf('gorg'));

console.log(friends.includes('Ben'));
console.log(friends.includes('Gorg'));

if (friends.includes('Ganesh')) {
    console.log("vdfg gogd ");
}

// coding challenge 2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ?
        bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

//objects

const ganesh = {
    firstName: 'Ganesh',
    lastName: 'kunchi',
    age: 2000 - 2022,
    job: 'dev',
    friends: ['ganesh', 'varun', 'biju']
}

console.log(ganesh);

console.log(ganesh.firstName);

console.log(ganesh['firstName']);

const nameKey = 'Name';
console.log(ganesh['first' + nameKey]);

console.log(ganesh['last' + nameKey]);

const ask = prompt('What do you want to know about me choose bw firstName,lastName,age,job,and friends');
console.log(ganesh[ask]);

if (ganesh[ask]) {
    console.log(ganesh[ask]);
} else {
    console.log("wrong requst! choose bw firstName,lastName,age,job,and friends");
}

ganesh.location = "banglore";
ganesh['twitter'] = '@gaensj';
console.log(ganesh);

//challenge ganesh has 3 frinds

console.log(`${ganesh.firstName} has ${ganesh.friends.length} and his best friend is called ${ganesh.friends[2]}`);

const ganesh = {
    firstName: 'Ganesh',
    lastName: 'kunchi',
    birthyear: 2000,
    job: 'dev',
    friends: ['ganesh', 'varun', 'biju'],
    hasdriverslicense: false,

    calcAge: function () {
        this.age = 2037 - this.birthyear
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${ganesh.job}, and he has ${this.hasdriverslicense ? 'a' : 'no'} driver's license`
    }
};

console.log(ganesh.calcAge());

console.log(ganesh.calcAge());

console.log(ganesh.calcAge());


console.log(ganesh.getSummary());



const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

console.log("lifting weights repitition1");

for (let rep = 1; rep <= 10; rep++) {

    console.log(`lifting weights repitition${rep}`);
}
const types = [];

const ganesh = [
    'Ganesh',
    'kunchi',
    2000 - 2022,
    'dev',
    ['ganesh', 'varun', 'biju'],
    true
];
const types = [];

for (let i = 0; i < ganesh.length; i++) {
    console.log(ganesh[i], typeof ganesh[i]);
    types.push(typeof ganesh[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {

    ages.push(2037 - years[i]);
}

console.log(ages);



//continue and break
console.log("===only strings====")
for (let i = 0; i < ganesh.length; i++) {
    if (typeof ganesh[i] !== 'string') continue;
    console.log(ganesh[i], typeof ganesh[i]);
}


console.log("===break with ====")
for (let i = 0; i < ganesh.length; i++) {
    if (typeof ganesh[i] == 'number') continue;
    console.log(ganesh[i], typeof ganesh[i]);
}


let rep = 1;
while (rep <= 10) {
    console.log(`while lifting$${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`you roled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end');
}





*/






const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));