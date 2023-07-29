// Destructring W.R.T Arrays
// Traditional way to get elements and subArray from origional array

// const arr=[2,5,6,8,9];
// let elements=arr[0];
// let elements1=arr[1];
// let elements2=arr[2];
// let elements3=arr[3];
// let elements4=arr[4];
// console.log(elements);
// console.log(elements1);
// console.log(elements2);
// console.log(elements3);
// console.log(elements4);

// let subArray=[];
// const arr=[2,5,6,8,9];
// for(let i=0;i<arr.length;i++){
// subArray.push(arr[i]);
// console.log(subArray[i]);
// }


// Latest way to get elements and subArray from origional array

// const arr=[2,5,6,8,9];
// let [elements1,elements2,...remainingArr]=arr;

// console.log(elements2);

// console.log(remainingArr);

// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Get individual elements
// const element1 = originalArray[0];    // 1
// const element2 = originalArray[3];    // 4
// const element3 = originalArray[originalArray.length-1];   // 10 (last element)


// console.log(element1, element2, element3);

// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Get a subarray
// const subarray1 = originalArray.slice(2, 5);   // [3, 4, 5]
// const subarray2 = originalArray.slice(0, 7);    // [1, 2, 3, 4, 5, 6, 7]
// const subarray3 = originalArray.slice(5);       // [6, 7, 8, 9, 10]

// console.log(subarray1, subarray2, subarray3);


// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Destructuring
// const [element1, element2,...element5] = originalArray;
// console.log(element1, element2, element5);   // 1, 2, 5


// This operator used in two places
// 1- In destructuring
// 2- In functions parameters
// Rest operators actually used when we don't know how many elements to store in variable

// Destructuring w.r.t Objects

// Traditional way to get propertie's values and subObject from origional array
// let obj = {
//     name: "Muneer Rajpoot",
//     age: 22,
//     qualification: "Undergraduate",
//     skills: "Frontend Developer",
//   };

//   let property1 = obj.name;
//   let property2 = obj.age;


// const person = {
//     name: "Muneer Rajpoot",
//     age:19,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   };

//   person.greet(); // Output: Hello, my name is Muneer Rajpoot and I am 19 years old.


// function Car(make, model) {
//     this.make1 = make;
//     this.model1 = model;
//   }

//   const myCar = new Car("Toyota", "Camry");
//   console.log(myCar.make1); // Output: Toyota
//   console.log(myCar.model1); // Output: Camry


// Latest way to get propertie's values and subObject from origional array
// let obj = {
//     name: "Muneer Rajpoot",
//     age: 22,
//     qualification: "Undergraduate",
//     skills: "Frontend Developer",
//     city:"Faisalabad",
//     location:()=>{
//         console.log(`City: ${this.city}`);
//     }
// };


// let { qualification, age, ...subObject } = obj;
// console.log(qualification);
// console.log(age);
// console.log(subObject);

// Latest way to get characters and subArray from origional String
// const [ch1, ch2, ...remChArr] = "Muneer Rajpoot";
// console.log(ch1);
// console.log(ch2);
// console.log(remChArr);


// Spread Operator w.r.t Arrays
// Spread Operator actually spreads all elements of array

// let names = ["Ali", "Ahmad", "Rehman", "Hamza"];
// console.log(names);
// console.log(...names);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]


// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(...originalArray);

// console.log(copiedArray); // Output: [1, 2, 3]
// console.log(originalArray ===copiedArray); // Output: false


// Spread Operator w.r.t objects
// Spread Operator actually spreads all elements of array

// const obj1 = {
//     name: "Ahmad",
//     age: 22,
//     qualification: "Undergraduate",
//     skills: "Full Stack Engineer",
//   };
//   const wholeInfo = {
//     name1: "Hammad",
//     age1: 20,
//     qualification1: "undergraduate",
//     skills1: "Front-end developer",
//   };
//   let wholeInfo1 = { ...wholeInfo, ...obj1 };
//   console.log(wholeInfo1);


// const originalObj = { name: "Munir", age: 20 };
// const copiedObj = { ...originalObj };

// console.log(copiedObj); // Output: { name: "Munir", age: 20 }
// console.log(originalObj === copiedObj); // Output: false


// const person = { name: "Alice", age: 25,city:"Faisalabad",education:"undergraduate" };
// const updatedPerson = { ...person, age: 26, city: "New York" };

// console.log(updatedPerson); 


// const defaults = { theme: "light", fontSize: 14 };
// const userPreferences = { theme: "dark" };

// const combinedSettings = { ...defaults, fontFamily: "Arial", ...userPreferences };

// console.log(combinedSettings);
// Output: { theme: "dark", fontSize: 14, fontFamily: "Arial" }


