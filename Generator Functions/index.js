// Generator Functions
// function* generatorFunc(){
//     console.log(`Hello`);
//     yield 20;
//     let arr=[1,2,3];
//     yield arr;
//     console.log(`hello World`);
// }

// let sG=generatorFunc();
// console.log(sG.next());
// console.log(sG.next().value);
// console.log(sG.next());



// function* simpleGener () {
//if no yield include inside functions then output value is "undefined" and done is "true".
// }

// let sG=simpleGener();
// console.log(sG.next());


// Regular Function

// function sum(num1, num2) {
//     console.log(num1 + num2);
//     return num1 + num2;
//     console.log(num1+num2);
// }
// console.log(sum(5,2));


// Generator Function
//  This is special type of function in javascript that used for pause and resume the function execution.
//  Mostly this is used when we have to get values in sequence over time

// function* generatorFunc() {
//     let x = 1;
//     yield x;

//     // Statement 1 Execute;

//     yield ++x;

//     // Statement 2 Execute;

//     yield ++x;
// }

// const sG=generatorFunc();
// console.log(sG.next());
// console.log(sG.next());
// console.log(sG.next());
// console.log(sG.next());


//Important Note:
// Yield keyword is just like return statement in simple function but it's behavior is different
  // Common thing b/w return and yield is:
  //                                    Both returns values
  // Difference b/w return and yield is :
  //                                    Return statement terminates the functions execution when it is executed
  //                                    Yield statement paused the functions execution when it is executed.


//   function* generatorFunc() {
//     let x = 1;
//     yield x;


//     yield ++x;



//     yield ++x;
// }

// const iterator=generatorFunc();
// let check=false;
// let lastValue;
// while (!check) {
//     let obj=iterator.next();
//     console.log("obj : ", obj);
//     check=obj.done;
//     if (check == false) {
//         lastValue = obj.value;
//       }
// }
// console.log(lastValue);



function* fibonacciGenerator() {
    let current = 0;
    let next = 1;
  
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  // Creating an instance of the generator
  const generator = fibonacciGenerator();
  
  // Generating Fibonacci numbers
  console.log(generator.next().value); // 0
  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2
  console.log(generator.next().value); // 3
  console.log(generator.next().value); // 5
  // ...
  
  // Using the generator in a loop
  for (let i = 0; i < 10; i++) {
    console.log(generator.next().value);
  }
  