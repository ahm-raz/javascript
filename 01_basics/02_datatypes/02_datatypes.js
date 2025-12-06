// classes, modules etc.
// old js dont include class, module, arrow
// new code was intro with new features
// so ecma standard was introduced
"use strict"; // treat all js code as newer version of JS

alert("Hello, Welcome to JS Datatypes"); //throws the error inside NodeJS

// try it in inspect in browser
// all inside browser is inside document 
// there is different syntax of using alert in NodeJS

// avoid semicolon in React, Node. 
// for readability, use semi-colon 

// console.log(3+3) console.log();  causes error
console.log(3+3); console.log("Ahmad"); // thats correct

// go for alert mdn on google
// or javascript doc on https://tc39.es/


// not more datatypes/primitive datatypes
let name = "ahmad"; //string datatype
let age  = 22; //number
let isLoggedIn = true; //boolean

//range
//number => 2^53
// string => ""
// bool => true/false
// null => stand-alone value
// undefined => variable declared but not assigned
// null is not undefined, it is empty
// symbol => unique (used in react) (figma use it)


//object
let objDataType = {
  name: "ahmad",
  age: 22,
};

console.log(typeof age); //int
console.log(typeof name); //string
console.log(typeof "string"); //string
console.log(typeof null); //is an object, not the error of language
console.log(typeof undefined); //undefined
