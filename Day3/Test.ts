// TypeScript is statically typed programming language : type can be changed

let date:number = 30;       //age is a number typed
console.log(typeof(date));       //number

date = "Thirty";     //Can't change the type of the variable, gives compile-time error
// date = 50;
console.log(typeof(date));       //string

console.log(date);   //Thirty