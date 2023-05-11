// let string="Hey! I am Munir Rajpoot";
// console.log(`${string}`);

// let dum="What are you doing?";
// console.log(`${dum.length}`);

// let dum="What are you doing?";
// console.log(dum.charAt(3));               
        // charAt(index) Returns the character at the specified
        // position in a string.
//  let dum="What are you doing?";
//  console.log(dum.charCodeAt(2));
//   charCodeAt() Returns the Unicode value of the character
// at the specified position in a string.


// indexof(){
//     Returns the index of the first occurrence of
// the specified value in a string, or -1 if it is
// not present.
// }
// var greet = "Hey man you are doing great!a";
// console.log(greet.indexOf("man"));

// lastIndexOf(){
//     Returns the index of the last occurrence of
// the specified value in a string, or -1 if it is
// not present.

// }

// var greet = "Hey man you are doing great man!a";
// console.log(greet.lastIndexOf("man"));

// var count = 0;
// var secondAIndex;
// for (let index = 0; index < greet.length; index++) {
//       let ch = greet.charAt(index);      // Hey man you a
//       if (ch == 'a') {
//         count++;     // 1,2
//       }
//       if (count == 2) {
//         secondAIndex = index;
//         break;
//       }
// }

// console.log("Index of a stored second time is", secondAIndex)

// var greet = "Hey man you are doing great!a";

// var man = greet.slice(4,7);
// console.log(man);

// var greet = "Hey man you are doing great!a";

// var man = greet.replace("man", "rajput");
// console.log(man);

// var firstHalfGreet="Hey! man you";
// var secondHalfGreet="are doing great.";
// var greet=firstHalfGreet.concat(" " + secondHalfGreet);
// console.log(greet);

// var greet=firstHalfGreet + " " + secondHalfGreet;     //Another method Concat
// // console.log(greet);

// console.log(greet.toUpperCase());

// var greet = "Hey,man,you,are,doing,great!a";
// console.log(greet[1])

// var greet = "Hey man you are doing great!a";
// console.log(greet.split("e"));
// console.log(greet.split(""));

// var x = "Hey Man how are you"
// for(let i = 0; i < x.length; i++){
//     if(i == 0){
//         x[i] = x.charAt(i).toUpperCase();
//     }
//     if(x[i] == " "){
//         x[i + 1] = x.charAt(i + 1).toUpperCase();
//     }
    
// }
// console.log(x)



// Practice String Methods

//1 {length
// Returns the length of the string}
// let x="Hello World";
// console.log(x.length);

// 2{slice()
//         Extracts a portion of a string and returns a
//         new string.}

// let x="Hello World";
// console.log(x.slice(3,8));

// 3{
//         sub()
// Extracts a portion of a string and returns a
// new string. Deprecated in favor of
// substring().
// }

// 4{
//         // Extracts a portion of a string and returns a
// // new string. Deprecated in favor of
// // substring
// }
// let x="Hello World Munir";
// let y=x.substring(6,11);
// console.log(y);

// let str="Munir is great person";
// let newStr=str.replace("great","good");
// console.log(newStr);


// let str="Munir is great person";
// let newStr=str.replaceAll("e","a")
// console.log(newStr);

// let str="Munir is great person";
// console.log(str.toUpperCase());

// let str="Munir is great person";
// console.log(str.toLowerCase());


// let str="Munir is great person";
// let newStr=str.concat(" ","and good teacher");
// console.log(newStr);

// trim()
// Removes whitespace from both ends of a
// string.
// let str="     Hello I am Muneer Rajpoot. ";
// let newStr=str.trim();
// console.log(newStr);


// trimStart()
// Removes whitespace from the beginning
// of a string.

// let str="     Hello I am Muneer Rajpoot  .";
// let newStr=str.trimStart();
// console.log(newStr);

// trimEnd()
// Removes whitespace from the end of a
// string

// let str="     Hello I am Muneer Rajpoot.  ";
// let newStr=str.trimEnd();
// console.log(newStr);

// let str="Hello i";
// let newStr=str.padStart(10,"@");
// console.log(newStr);

// let str="Hello i";
// let newStr=str.padEnd(10,"@");
// console.log(newStr);

// charAt()
// Returns the character at the specified
// position in a string.

// let str="Hello World";
// console.log(str.charAt(2));


// let str="Hello World";
// console.log(str.indexOf("o"));

// let str="Hello Munir";
// console.log(str.search("Munir"));

// let str="Hello I am Munir.";
// let newStr=str.includes("Munir");
// console.log(newStr);

