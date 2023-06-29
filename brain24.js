// Let start Array


// let age = [5, 3, 34, 3, 342]

// for(let i = 0; i < age.length; i++){
//     console.log(age[i]*2);
// }

// find max from age
// console.log(Number.MIN_SAFE_INTEGER);

// let age = [2131235, -323, 34, 3, 342]
// let maximum = Number.MIN_SAFE_INTEGER;
// for (let index = 0; index < age.length; index++) {

//     if(maximum < age[index]){
//         maximum = age[index];
//     }
// }

// console.log(maximum);

// let marks=[45,67,87,98,45,39];
// let maximumMarks=Number.MIN_SAFE_INTEGER;
// for (let index = 0; index < marks.length; index++) {

//    if (maximumMarks<marks[index]) {
//     maximumMarks=marks[index];

//    }

// }
// console.log(maximumMarks);

// find minimum

// let marks = [45, 67, 87, 98, 45, 39];

// let minimum = Number.MAX_SAFE_INTEGER;
// for (let index = 0; index < marks.length; index++) {

//     if (minimum > marks[index]) {
//         minimum = marks[index];
//     }
// }

// console.log(minimum);


// let cars = ["Mehran", "Civic", "Corolla"];
// // console.log(cars);

// cars[0] = "Suzuki";
// console.log(cars)

// let cars = ["Mehran", "Civic", "Corolla"];
// // cars.push("Cultus");
// // console.log(cars);

// cars.pop();
// console.log(cars);

// let integers=[23,34,56]
// console.log(integers);

// integers.push(true);
// console.log(integers);


// let cars = ["Mehran", "Civic", "Corolla"];
// cars.unshift("Cultus");
// console.log(cars)

// cars.shift();
// console.log(cars);


// let name = "Hassan";
// console.log(name);
// name[0] = "A";
// console.log(name);

// Permitive vs Reference Datatypes

// let num1 = 13;
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num1++;

// console.log(num1);
// console.log(num2);

// let fruits1 = ["Mango", "Banana", "Orange"];
// let fruits2 = fruits1;

// console.log(fruits1);
// console.log(fruits2);

// fruits1.push("Pineapple");
// console.log(fruits1);
// console.log(fruits2);

// let fruits = ["Mango", "Banana", "Orange", "Pineapple","Apple","Gratefruit"];
// let someFruits = fruits.slice(1,5);
// console.log(someFruits)

// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// fruits.splice(0, 1,"Har");
// console.log(fruits)


// let name = "Hassan";
// let newName = name.slice(1, 3);
// console.log(newName);

// name.splice(1, 1, "B");
// name.pop();
// console.log(name);

// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// let newFruits = fruits.slice(0).concat("abc");

// // let newFruits = [].concat(fruits, "abc", "an");
// // let newFruits = [...fruits, "newElements"];
// console.log(newFruits);
// // fruits.push("Fruits");
// // console.log(fruits);
// // console.log(newFruits);


// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];

// let i = 0;
// while(i < fruits.length){
//     console.log(fruits[i]);
//     i++;
// }
// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//         console.log(element);
        
//     }

// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// fruits = ["Dates", "Mango"];
// fruits.push("Dates");
// console.log(fruits);

// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];

// for(let fruit of fruits){
//     console.log(`Fruits name ${fruit}`);
// }


// let name=["Munir" ,"Rasool"]
// for(let char of name ){
//     console.log(`Characters of my name is ${char}`);
// }

// let myLuckyNumbers=[1,2,3,4,5,6,7,8,9]
// for(let num of myLuckyNumbers){
//     console.log(`Numbers ${num}`);
// }



// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// for(let index in fruits){
//     console.log(index, fruits[index]);
// }



// let laptops = ["HP", "MAC"];

// let hp,mac;

//  [hp, mac] = laptops;


// console.log(`hp is ${hp} `);
// console.log(`mac is ${mac} `);

// let name=["Munir","Saif","Naseer","Talha","Moiz"]
// let a,b,c,d,e;
// [a,b,c,d,e]=name;
// console.log(`a is ${a}`);
// console.log(`b is ${b}`);
// console.log(`c is ${c}`);
// console.log(`d is ${d}`);
// console.log(`e is ${e}`);

// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
// console.log(`$`);
