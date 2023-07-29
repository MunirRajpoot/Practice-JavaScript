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


const p = new Promise((resolve, reject) => {
  let x = 12;
  if (x > 100) {
    resolve("Something done!");
  } else {
    reject("Something rejected!");
  }
})
  .then((value) => {
    console.log(value);
    console.log(value);
    return "Something done2!";
  })
  .then((value) => {
    console.log(value);
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
    console.log(error);
    throw new "Something done3 from first catch"();
  })
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

