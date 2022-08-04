'use strict';

// function calCage(bYear) {
//   const age = 2037 - bYear;
//   function printAge() {
//     let output = `${firstName} You are ${age},born in ${bYear}`;
//     console.log(output);
//     if (bYear >= 1981 && bYear <= 1996) {
//       //  creating new variable
//       const firstName = 'seven';
//       const str = `Oh, and you are a milenial, ${firstName}`;
//       output = 'newoutput';
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }
// const firstName = 'Ganesh';
// calCage(1991);
// // console.log(age);
// // printAge();

//  variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Ganesh';
// let job = 'teacher';
// const year = 1991;

// // functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// console.log(undefined);
// if (!numProducts) deleteShoopingCart();

// var numProducts = 10;
// function deleteShoopingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);
// console.log(this);
// const matilda = {
//   year: 2017,
// };

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Ganesh',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // const self = this; //self of that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// // console.log(this.firstName);
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5, 4, 6);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// // addArrow(2, 3, 4);
// // matilda.calcAge = jonas.calcAge;
// // matilda.calcAge();

// // const f = jonas.calcAge;
// f();
