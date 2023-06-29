// block and function scope
// let name = 'anas'
// {
//     console.log(name);
// }

// {
//     let name ='hassan'
//     console.log(name);
// }

// Default Parameters


// const addTwoNumbers = (num1 = 2, num2 = 3) => {
//     let result = num1 * num2;
//     return result;
// }



// console.log(addTwoNumbers(undefined, 10));



// Rest Parameters

// function print(...rest){
//     console.log(rest);
    
// }

// let message = 'hello'
// print('anas', message, 23, 34, 34, 'remainaing');

// function form(...alert){
//     console.log(alert);
// }
// let userName='Munir';
// let age=25;
// form('Hello','I am ',userName,'Age=',age)


// Parameter Destructuring

// let person = {
//     name: 'Hassan',
//     age: 34,
//     country: 'Pakistan',
//     gender: 'Male',
//     running: function(){
//         console.log('running');
//     }
// }


// function printPersonDetails({name, age}){
//     console.log(name, age);
// }

// printPersonDetails(person)


// A very brief intro to callback functions


function fun2(){
    console.log("im function 2");
}

function fun1(fun2){
    console.log("im function1 ");
    fun2()
    
}

fun1(fun2)


