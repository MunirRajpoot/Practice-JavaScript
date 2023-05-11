// let p1={
//     name: "Munir Rajpoot",
//     age: "19",
//     profession: "Software Developer",
//     teaching: function(){
//         console.log("Munir is very good teacher.");
//     }
// }
// let p2={
//     name: "Munir Rajpoot",
//     age: "19",
//     profession: "Software Developer",
//     teaching: function(){
//         console.log("Munir is very good teacher.");
//     }
// }

class person{
    constructor(n,a){
     //constructor fuction is similar to other function  is automayically call when an object is created.Initialized properties of class.
     this.name = n;
     this.age = a;
    }
    age(){
        
    }
}

let personObject1= new person("Munir","19")
let personObject2= new person("Saif","18")

console.log(personObject1);
console.log(personObject2);