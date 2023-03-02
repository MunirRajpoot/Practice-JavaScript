// let fruits = ['kivi', 'Mango', 'Carrot'];

// for (let i = 0; i < 5; i++){
//     console.log(fruits[i]);
// }

// let str = 'hassan';

// // str[0] = '';
// console.log(str);
// for (let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }


// dot vs bracket notation
// const person = {
//     name: 'Muneer',
//     gender: 'Male',
//     age: 23,
//     hobbies: ['Cricket', 'Sleeping'],
//     "my height": 6,
// };


// console.log(person["my height"]);
// console.log(person.gender);
// person.name = 'Saif';
// person = {
//     name: 'Saif'
// }
// console.log(person.name);



// let person={
//     fullName:'Munir',
//     lastName:'Rasool',
//     email:'munirrasool7@gmail.com',
//     age:'18',

// }

// console.log(person['fullName']);


// let key = 'email';
// let value = 'anas@gmail.com';

// let user = {
//     [key]: value,
// }

// console.log(user);

// itrate objcts
// const person = {
//     name: 'Anas',
//     gender: 'Male',
//     age: 23,
//     hobbies: ['Cricket', 'Sleeping'],
//     "my height": 6,
//     // i: 'test'
// };

// for(let i in person){
//     console.log(person[i]);
// }

// console.log(Object.keys(person));
// for (let i of Object.keys(person)){
//     console.log(person[i]);
// }

// spread operators in array (revise)

// let cars = ['mehran', 'civic'];
// let bikes = ['honda', 'yamaha'];

// let vehicles = [...cars, ...bikes];
// console.log(vehicles);

// let laptop = {
//     company2: 'hp',
//     ram: 4,
//     rom: 1000,
// }

// let mobile = {
//     company1: 'Qmobile',
//     ram1: 2,
//     rom1: 16,
// }

// let gadgets = {
//     company: 'abc',
//     ...laptop,
//     ...mobile,
// };
// console.log(gadgets);


// destruction

// let fruits = ['Muneer', 'Saif', 'Sabtain', 'Naseer'];
// let [fruit1, fruit2, ...remaining] = fruits;
// console.log(fruit1, fruit2, remaining);

// let person = {
//     name: 'muneer',
//     age: 23,
//     email: 'muineer@gmail.com',
//     hobbies: ['sleeping', 'cricket']
// };

// let { name: newname , email, hobbies } = person;
// console.log(newname, email, hobbies[0]);

// let array = [
//     {
//         uid: 1,
//         title: 'learn python in 5 minutes',
//         thumbnail: 'https://',
//         video: 'askldsljd',
//     },
//     {
//         uid: 2,
//         title: 'learn python in 5 minutes',
//         thumbnail: 'https://',
//         video: 'askldsljd',
//     },
//     {
//         uid: 3,
//         title: 'learn python in 5 minutes',
//         thumbnail: 'https://',
//         video: 'askldsljd',
//     },
// ];

// let [{video},{title},{uid}] = array;
// console.log(uid, video,title);