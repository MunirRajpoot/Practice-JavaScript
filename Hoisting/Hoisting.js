// Hoisting
// This is the by-default behavior of javascript
// hoisting takes all declartions to top, not initilization
// console.log(num1);



// let num1 = 10;
// let num2 = 20;


// console.log(sum(num1, num2));
// function sum(n1, n2) {
//       // function declarations
//   return n1 + n2;
// }


// var sum2 = (n1, n2) => n1 + n2;
// console.log(sum2(3, 4));
// let sum3 = function (n1, n2) {
//   return n1 + n2;
// };
// console.log(sum3(3, 4));

//example:
// let suppose javascript file controls begin here

//console.log(greet); //  error

// function greetSomething(message){
//     console.log(greet); //  undefined
//     var greet = message;
//     console.log(greet); // Hello, you are doing good.
//     return greet;
// }

// greetSomething("Hello, you are doing good.")


// (const, let)  VS Var     w.r.t Hoisting
// Var
// 1) - Var declarations can be hoisted to the top
// 2) - variable declared with var can be accessed before where it is actually written.
// let & const
// 1) - let & const declarations can be hoisted to the top
// 2) - variable declared with let & const can't be accessed before where it is actually written (initialized)
//      because of "temporal dead zone".





console.log(sum); // error

let num1 = 5;
let num2 = 5;

var sum = num1 + num2;

