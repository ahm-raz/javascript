// var -> declaration, initialization, hoisting, scope, and other pitfalls

// Syntax/declaration
var x; // declaration
var y = 5; // declaration + initialization
var x = "hello"; //redeclaration allowed

//Re-declaration & re-assignment
var a = 1;
var a = 2; // a==2
a = 3; // a==3

// hoisting
// var declarations are hoisted: the JavaScript engine creates a binding for the name during the creation phase before executing code.

// Important: only the declaration is hoisted, not the assignment. The variable is initialized to undefined at creation time.

console.log(z); // -> undefined   (not ReferenceError)
var z = 10;
console.log(z); // -> 10

var g = 10;
console.log(g);

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

//3
//3
//3

for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 0);
  })(i);
}

let name = "Raza";
{
    // console.log(name); // "Ali"
    let name = "Ali"; // ✅ new variable, different scope
    console.log(name); // "Ali"
}
console.log(name); // "Raza"