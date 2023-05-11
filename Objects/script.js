// Lets Start Objects Practice
// Basic concept of Objects

let object = {
    key: "value",
}

// Example

let person={
    name:"Munir Rajpoot",
    age:"20",
    height:"5.7 inch",
    displayPersonInfo: function(x){
        console.log(x);
    },
}

// Accessing Objects Properties and Methods

// console.log(`Person Name:- ${person.name}`);
// console.log(`Person Age:- ${person.age}`);
// console.log(`Person Height:- ${person.height}`);
// console.log(person.age);

// person.displayPersonInfo(person)
// console.log(person);

// person.hobby="Sleeping"
// console.log(person);
// delete person.hobby;
// console.log(person);

// for (const key in person) {
//     console.log(typeof key)
//     console.log(key + person[key])
// }

for(const bell in person){
    console.log(typeof bell);
    console.log(`${bell }= ${person[bell]}`);
}

// check whether specific key included in object or not

let prop="name";
// for(const key in person){
//     if(key==prop){
//         console.log(`Property Exists...`);
//     }
//     else{
//         console.log(`Property Not Exists...`);
//     }
// }

// console.log("age" in person)


"name" in person ? console.log("exist"): console.log("not exist")

let num=5;
num > 5 ? console.log("number is greater than 5") : (num < 5) ? console.log("number is smaller than 5") :

(num == 5) && console.log("number is equal to 5")
