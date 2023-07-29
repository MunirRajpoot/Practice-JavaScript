//Closures JavaScript
// In JavaScript, closures are a fundamental concept that arises from the language's lexical scoping rules.
// A closure is a function that retains access to variables from its containing (enclosing) scope even
// after the scope has finished executing. In simpler terms, a closure "closes over" its surrounding
// environment, preserving the state of variables that were in scope when the closure was created.

// Closures are powerful because they allow functions to maintain their own private data and encapsulate
//  behavior. They are commonly used in functional programming and can be applied to achieve various
//  patterns and functionalities in JavaScript.


//Closures
//Basic Closures
let num1=5;
function outerFunction(){
    let num2=4;
    console.log("Something going on...");
    function innerFunction(){
        console.log(`Num: ${num1+num2}`);
    }
    return innerFunction;
}
let innerFunc=outerFunction();
innerFunc();