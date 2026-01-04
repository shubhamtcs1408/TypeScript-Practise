/*
Increment operator : ++
Decrement operator : --
*/

let a:number = 10;
a++;                    //a = a+1 : Post increment
console.log(a);         //11

let b:number = a++;
console.log(b);         //11: why 11, why not 12?, first value will be stored then increment happens

let c:number = 20
let d:number = ++c;     //Pre increment : First increment then store in d
console.log(d);