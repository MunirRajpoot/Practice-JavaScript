// Promise
//      promise is an object that connects the code that produce the result and the code 
//      that use the result

// States in promises are as follows:
// 1) Resolve
// 2) Rejection
// 3) pending

// // Method 1

// // Any thing that you create with the help of new keyword in JS called object.

// let promise = new Promise(function (resolved, rejected) {
//     let x = 14;
//     if(x < 15){
//         rejected(x);
//     }
//     resolved(x);
// });

// promise.then(function (value) {  // will handle resolve state
//         console.log(value + " is resolved!");
//     },
//     function (error) {  // will handle reject state
//         console.log(error + " is rejected!")
//     },
// );

// let prom=new Promise(function(resolved,rejected){
// let a=false;
// if(a===true){
//     resolved(a);
// }
// rejected(a);
// });
// prom.then(function(value){
//     console.log(`${value} is resolved.... `)
// },
// function(error){
//     console.log(`${error} is rejected`);
// },
// );


// // Method 2

// let promise = new Promise(function (resolved, rejected) {
//     let x = 14;
//     if(x < 15){
//         rejected(x);
//     }
//     resolved(x);
// })
// .then(function (value) {    // Then is it self a promise
//     console.log(value + " is resolved!");
// })
// .catch(function (error) {
//     console.log(error + " is rejected!")
// })


// let promise=new Promise(function(resolved,rejected){
//     let x=20;
//     if(x>10){
//         resolved(x)
//     }
//     else{
//         rejected("Two Low..")
//     }
// });
// promise.then(
//     function(value){
//         console.log(`Success ${value}`);
//     },
//     function(error){
//         console.log(`Error ${error}`);
//     }
//     );


// const promise=new Promise((resolved,rejected)=>{
//     rejected("Success..")
// })
// .then(value=>{
//     console.log(value);
//     return "Hello";

// })
// .then(value=>{
// console.log(value);
// return "I";

// })
// .then(value=>{
//     console.log(value);
//     return "am"
// })
// .then(value=>{
//     console.log(value);
//     return "Munir" 
// })
// .then(value=>{
//     console.log(value);
// })
// .catch(error=>{
//     console.log(`Error ha ${error}`);
// })




// Promise chaining (Chaining the then() methods)


// let promise = new Promise((resolve, reject) => reject("Let's don't start counting something! "))
// .then((value) => {      // Then is itself a promise
//     console.log(value);
//     return "One"    // If this then simple returning something means that returns resolve state
// })
// .then((value) => {
//     console.log(value)
//     return "Two"
// })
// .then((value) => {
//     console.log(value)
//     return "Three"
// })
// .then((value) => {
//     console.log(value)
// })
// .catch((error) => { // catch is itself a promise
//     console.log("Error : " + error)
// })