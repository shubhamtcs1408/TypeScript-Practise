/*
1. Premitive(Built in data types)
Number
String
Boolean
Null
Undefined
Any
Union Type
Void

2. Non-Premitive
Array
Class
Function
Interface
Touple etc.
*/
/*
let fname:string = "Shubham";
let lname:string = "Selokar";

let greeting:string = `Hello ${fname} ${lname}`;        //for concatenation use `` not +, in console.log use ,
console.log(greeting);

console.log("Hello Mr",fname,lname);
*/

/*Null & Undefined
let emptyValue:null = null;

let notAssigned:undefined;
console.log(emptyValue);        //null
console.log(notAssigned);       //undefined

let price:number;
console.log(price);     //undefined
*/

/*any type - loses typescript benefits of "type safety" - VVIMP

let value:any = "Testing";
console.log(typeof(value));
value = 100;
console.log(typeof(value));
value = true;
console.log(typeof(value));
console.log(value);
 */


/*
Union type : union is not a keyword

let id:number | string | boolean;       //Union of multiple data types
id = "ABC123";
console.log(id);

id = 12345;
console.log(id);

id = false;
console.log(id);
 */

/*
void: it is used only for functions

function show():void         //void means function does not return anything, void is optional
{
    console.log("Welcome");
}
show();
 */

/* function with return type  
function sum(a:number, b:number): number
{
    console.log(a + b);
    return(a + b);
}

let eg:number = sum(30, 40);
console.log(eg);
console.log(`"Example:" ${eg}`);
*/