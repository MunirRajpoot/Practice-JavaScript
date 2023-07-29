// Currying is a technique in functional programming that involves transforming a function with multiple
// arguments into a sequence of functions, each taking only one argument. The curried function returns a
// new function for each argument, allowing partial application of arguments.

// This transformation allows for partial application of arguments, meaning you can provide some arguments
// upfront and later provide the remaining arguments when needed.

//Simple Functions

// function sum1(num1,num2,num3) {
//     return num1+num2+num3;
// }
// console.log(`Sum using simple function: ${sum1(2,3,5)}`);

// Curynig 
// There are Multiples forms of curying
//1.Manual Curying
//2.Arrow Functions
//3.Bind

//1.Manual Curying

function curry(num){
    return function(num2){
        return function(num3){
            return num+num2+num3;
        }
    }
}
// let nestedFunc1=curry(3);
// let nestedFunc2=nestedFunc1(2);
// let nestedFunc3=nestedFunc2(4);
// console.log(nestedFunc3);          //Output is 9

// console.log(curry(2)(3)(4));      //Output is 9

// Why use
//  let suppose if currently we have'nt all arguments to get actual result from a function
//  In future when we gets all arguments then we can all inner most function to get actual results

//2.Arrow Functions currying

// let sum=(num1)=>(num2)=>(num3)=>num1+num2+num3;
// // Method 1
// // sum is equal to : (num1) => (num2) => (num3) => num1 + num2 + num3;
// console.log(sum);

// let firstNestedFunc = sum(3);
// // firstNestedFunc is equal to : (num2) => (num3) => num1 + num2 + num3;
// console.log(firstNestedFunc);

// let secondNestedArrowFunc = firstNestedFunc(4);
// // secondNestedArrowFunc is equal to : (num3) => num1 + num2 + num3;
// console.log(secondNestedArrowFunc);

// let thirdNestedArrowFunc = secondNestedArrowFunc(5);
// // secondNestedArrowFunc is equal to :  num1 + num2 + num3;
// console.log(thirdNestedArrowFunc);

//3.Bind

// function multiply(num1,num2,num3){
// return num1*num2*num3
// }
// console.log(multiply);
// let bindFunc = multiply.bind(null,3);
// console.log(bindFunc);
// let bindFunc2=bindFunc.bind(null,2);
// console.log(bindFunc2);
// console.log(bindFunc2(4));


// function concatenate(a){
//     return function(b){
//         return a+" "+b;
//     }
// }
  
// let conFunc1=concatenate("Hello!");

// console.log(conFunc1("Muneer"));
// console.log(conFunc1("Rajpoot"));


// function logger(prefix){
//     return function(message){
//         console.log(`${prefix}: ${message}`);
//     }
// }
// let curryFunc1=logger("Info");
// curryFunc1("Logged In")
// curryFunc1("Data Saved")
















