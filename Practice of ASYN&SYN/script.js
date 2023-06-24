// Synchronous JS:-
// // - Blocking Behavior

// var x = 2;
// var y;


// y = fetch("url")    // let's suppose this API will take 2 seconds to execute
// console.log("something")    // something will print after 2 seconds

// Asynchronous JS:-
// Non Blocking Behaviour

// var x = 2;
// var y;


// y = fetch("url")    // let's suppose this API will take 2 seconds to execute

// console.log("something")    // something will print after 2 seconds

// // Concurency
//     // - multiple things happening at the same time 

// function fullName(name) {
//     return name
// }
// function greet(name) {
//     console.log(`Hello! ${name("Ahmad Sultan")}`)
// }


// greet(fullName);







// function doSomething(callback) {
//  callback();
// }
// function sayHi(callback) {
//  console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade){
// switch(true){
//     case grade=="A":
//     console.log(`You got an ${grade} :amazing!`);
//     break;
//     case grade=="B":
//     console.log(`You got an ${grade} :amazing!`);
//     break;
//     case grade=="C":
//     console.log(`You got an ${grade} :amazing!`);
//     break;
//     case grade=="D":
//     console.log(`You got an ${grade} :amazing!`);
//     break;
//     default:
//         console.log(`An ${grade} !What!`);
// }
// }
// function getGrade(score,callback)
// {
//     let grade;
//     switch (true) {
//         case score>=90:
//             grade="A";
            
//             break;
//         case score>=80:
//             grade="B";
            
//             break;
//         case score>=70:
//             grade="C";
            
//             break;
//         case score>=60:
//             grade="D";
            
//             break;
        
    
//         default:
//           grade="F";
//     }
//     callback(grade)
// }
// getGrade(85, judge);


// setInterval
// Two very important methods in JS
//  -1 setInterval

// Syntax:
// setInterval(callback, time)
    // Two things used in setInterval method
    //  1- callback (Just a function)
    //  2- time

//     var intervalIDOne = setInterval(callback1, 5000)
// setInterval(callback2, 2000)
// // console.log("THis will print in no time")

// function callback1() {
//     console.log("I am printing after 5 seconds!")
// }
// function callback2() {
//     console.log("I am printing after 2 seconds!")
// }

// setInterval(encourage, 5000);
// function encourage() {
//  console.log("You're doing great, keep going!");
// }


//  -2 setTimeOut

// var timeOutIDone = setTimeout(callback3, 21000)
// function callback3() {
//     clearInterval(intervalIDOne)
// }

// setTimeout(callback4, 25000)
// function callback4() {
//     clearTimeout(timeOutIDone)
// }

// function logoMessage(){
// console.log(`Hello world`);
// }

// var intervalId=setInterval(logoMessage,2000);

// setTimeout(function(){
//     clearInterval(intervalId)
// },10000)

// function greet() {
//     console.log("Hello!");
//   }
  
//   var timeoutID = setTimeout(greet, 2000);
  
  // Cancel the timeout
//   clearTimeout(timeoutID);




