// CallBack Function


function num1() {
  return 5;
}
function num2() {
  return 10;
}

function sum(cb1, cb2) {
  return cb1() + cb2();
}
console.log(sum(num1, num2));



// Promises

// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example
//     let x = 15;
//     if (x > 10) {
//         resolve(x); // on success
//     } else {
//         reject("Too low"); // on error
//     }
// });
// promise.then(
//     function (value) {
//         console.log("Success:", value);
//     },
//     function (error) {
//         console.log("Error:", error);
//     }
// );


