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
     this.nam = n;
     this.age = a;
    }
    a_g_e(nam){
        console.log(`${nam} is ${this.age} years old`);
    }

    static qualification="undergraduate";
    static method(){
    console.log(this.age);
    console.log(this.nam);    
    }
}

let personObject1= new person("Munir","19")
let personObject2= new person("Saif","18")

// personObject1.a_g_e("sabtain");

// console.log(personObject2);
// personObject2.a_g_e("Saif");
console.log(personObject1);
person.method();
