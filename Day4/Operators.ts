let a:number = 10, b:number = 30;

//Arithmetic operators
console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(b / a);

console.log(b % a);

console.log(5 ** 3);


//Assignment operators
a=10, b=5;
a = a + b;          //a+=b = 15 : Same as a+b
console.log("Assignment operators")
console.log(a);     //15
console.log(a+=b);      //20
console.log(a-=b);      //a=a-b
console.log(a*=b);      //a=a*b
console.log(a/=b);      //a=a/b
console.log(a%=b);      //a=a%b


//Relational operator : return boolean value: true/false
// < , > , <= , >= , == , != , ===(strict equality)

console.log("Relational operators")
a=10, b=20;
console.log(a > b);       //false
console.log(a < b);       //true
console.log(a <= b);       //true
console.log(a >= b);       //false
console.log(a == b);       //false
console.log(a != b);       //true

console.log(a === b);       //false

/*
// Difference between == and ===
*/
console.log("Difference between == and ===")
let num1:any = 10;      //number type
let num2:any = "10"     //String

console.log(num1 == num2);      //Compares value - true
console.log(num1 === num2);     //Compares values and type - false

/*
Logical operators : && || !
Only boolean values are returned
*/
console.log("Logical operators : AND, OR, NOT")
let x:boolean = true;
let y:boolean = false;

console.log(x && y);        //false
console.log(x || y);        //true
console.log(!x);            //false 
console.log(!y);            //true


/*
Combination of logical and relational
*/
console.log("Cobination of logical and relational");
console.log(20>10 && 10>5);     //true && true = true
console.log(20<10 || 10>5);     //false || true = true