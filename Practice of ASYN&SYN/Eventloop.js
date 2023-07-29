// JavaScript is a single-threaded
// language. A thread in this context means a path of execution. If there is only
// a single path, this means that tasks will have to wait for one another and
// only one thing can happen at a time.
// This single executor is the event loop.

// console.log("hello peeps");
// function somethingGreet() {
//   console.log("Hey, you are doing great!");
// }
// var x = 2;
// somethingGreet();
// console.log("X : ", x);

// console.log(`Before Execution`);
// setTimeout(()=>{
//     console.log(`Inside Execution`);
// },1000)
// console.log(`After Execution`);

// Call Stack and Call Back Queue
// Call Stack
// Works with Last In First Out (LIFO)


// function first() {
//     console.log("first...");
//     two();
//   }
//   function two() {
//     console.log("two...");
//     three();
//   }
//   function three() {
//     console.log("three...");
//     four();
//   }
//   function four() {
//     console.log("four...");
//     five();
//   }
//   function five() {
//     console.log("five...");
//   }
//   first();

//   function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   function sayHello() {
//     console.log('Starting...');
//     greet('Muneer');
//     console.log('Finished!');
//   }
  
// sayHello();
  
  // Thought Process of Stack (LIFO)
  
  //             //
  //             //
  //             //
  //   ball3     //
  //   ball2     //
  //   ball1     //
  // // // // // //

// callback queue (FIFO)
// Queue refers to First-IN-First-Out (FIFO)

// Thought Process of Queue (FIFO)

// // // // // // // //
//  man4 man3 man2 man1
// // // // // // // //

// Event Loop

// console.log("Person 1");
// setTimeout(() => console.log("Person 2"), 3000);
// console.log("Person 3");
// setTimeout(() => console.log("Person 4"), 2000);
// console.log("Person 5");

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late 5 seconds"), 5000);
// setTimeout(() => console.log("Sorry I'm late 2 seconds"), 2000);
// console.log(add(4, 5));
// function add(x, y) {
//  return x + y;
// }

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 0);
// console.log(add(4,5));
// function add(x, y) {
//  return x + y;
// }
