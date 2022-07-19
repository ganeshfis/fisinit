// const users = {
//     varun:{
//   name: 'varun',
//   age: 20,
//   },
//     ganesh:{
//         name:'ganesh',
//         age:20
//     }
// };

//   function getage(){
//        console.log(this.age1=="varun");
//   function getAge2()
//         console.log(this.age2=="ganesh");
// }
//  getage();
//  getage2();

//  if(varun[age]){
//   console.log(varun[age]);
//   }
// else if(ganesh[age]){
//   console.log(ganesh[age]);
//   }
//   else{
//       console.log[null];
//   }

// const users = {
//   varun: {
//     name: "varun",
//     details: {
//       age: 20,
//     },
//   },
//   ganesh: {
//     name: "ganesh",
//     details: {
//       age: 20,
//     },
//   },
//   satish: {},
// };

// for (var key in users) {
//   if (users.hasOwnProperty(key)) {
//     var val = users[key];
//     console.log(val.name);
//     if (val.details) console.log(val.details);

//     // console.log("Printing val: ", val);
//     // if (!Array.isArray(val) && typeof val === "object") console.log(val);
//     {
//       //   console.log("printing", val.name);
//       //   console.log("printing", val.details);

//       if (val === null || val === undefined || val === "") {
//         console.log(val);
//       }
//       console.log(null);
//     }
//   }
// }

// // for (const [key, value, type] of Object.entries(users)) {
// //   console.log(key, value, type);
// // }
// // for (let key in users) {
// //   console.log(users[key]);
// // }
// // function get_users(type, key) {
// //   console.log(type, key);
// //   const user = users[key];
// //   if (type == "age") {
// //     return user.details[type];
// //   } else {
// //     return user[type];
// //   }

// //   //   if (user[type] && user) {
// //   //     return user[type];
// //   //   } else return null;
// // }

// // console.log(get_users("age", "varun"));

// // console.log(get_users("name", "ganesh"));

// // console.log(get_users("name", "satish"));
// // console.log(get_users("name", "anoop"));
