// Practice exercise 13.2
// In this exercise, you will create a counter that will output the values in
// sequence using Promises.
// 1. Set up a Promise that resolves with a value of Start Counting .
// 2. Create a function named counter() that has one argument that gets
// the value and outputs it into the console.
// 3. Set up the next function in the Promise with four then() instances,
// which should output a value into the counter function, and return a
// value which will provide input for the subsequent then() instance.
// The returned values should be one , then two , then three . The
// screen output in the console should be the following:

// let promise=new Promise((resolve,reject)=>{
//     resolve("Start Counting")
// })

// // function counter(value) {
// //     console.log(value);
// // }
// .then(value=>{
//     console.log(value)
//     return "One"
// })
// .then(value=>{
//     console.log(value)
//     return "Two"
// })
// .then(value=>{
//     console.log(value)
//     return "Three"
// })
// .then(value=>{
//     console.log(value)

// })
// .catch(error=>{
//     console.log(value)
//     console.log(`Error ${error}`);
// })


// Step 1: Set up a Promise
const startCountingPromise = new Promise((resolve, reject) => {
    resolve("Start Counting");
});

// Step 2: Define the counter function
function counter(value) {
    console.log(value);
}

// Step 3: Use the Promise with multiple then() instances
startCountingPromise
    .then((result) => {
        counter(result);
        return 1;
    })
    .then((result) => {
        counter(result);
        return 2;
    })
    .then((result) => {
        counter(result);
        return 3;
    })
    .then((result) => {
        counter(result);
    })
    .catch((error) => {
        counter(error)
    })

