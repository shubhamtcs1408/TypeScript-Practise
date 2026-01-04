//3 different keywords to create variable : var, let, const

var age:Number = 20;    // Actual syntax
var aAge = 30;          // Data type is not mandatory, it is optional


console.log(age)

/*
var vs let vs const(when to use)

var is not recoemmended to use in typescript
so normally only let & const is used

let: when values needs to be changed afterwards then let is used
const: when value need not to change afterwards 
*/

/*
1. Scope: Accessible area:Functional(var) and block scope(let & const)
*/
function scopeAccess(){
    if(true){
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;
        console.log(num2);  //can't be accessed outside the block
        console.log(num3);  //can't be accessed outside the block
    }
    console.log(num1);      //can be accessed inside the whole function
}

scopeAccess();

/*
 2. Declaration/ Value Assignment
 var can be declared without initialization
 
var x;                  //Declaration
console.log(x);         //Undefined
x = 22;                 //Initialization
console.log(x);         //22


let y;                  //Declaration
console.log(y);         //Undefined
y = 35;                 //Initialization
console.log(y);         //35


const z = "Testing";    //Declaration & initialization must be done
console.log(z);         //Undefined
*/

/*
3. Re-declaration:
var allows redeclaration
let, const does not


var city = "Mumbai";
var city = "Nagpur";    //Can declare another time, which is not a proper thing. Typesafety issue
console.log(city);

let state = "Maharashtra";
//let state = "Gujarat";      //Not allowed
console.log(state);

const country = "India";
// const country = "USA";       //Not allowed
console.log(country);
*/


/*
4. Reinitialization or Reassignment

// var & let : allowed
//const : not allowed

var num = 25;
console.log(num);
num = 52;
console.log(num);

let num4 = 40;
console.log(num4);
num4 = 44;
console.log(num4);

const num5 = 50;
console.log(num5);
// num5 = 55;           //Not allowed
console.log(num5);
*/

/*
5. Hoisting

//For var
console.log(test);      //Output will be undefined
var test = "Hello";
console.log(test);

//For let
console.log(test1);      //Will throw the error for initialization
let test1 = "Hello";
console.log(test1);

console.log(test2);          //Will throw the error for initialization
const test2 = "Hello constant";
console.log(test2);
*/