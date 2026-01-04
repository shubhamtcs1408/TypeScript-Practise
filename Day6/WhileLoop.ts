/*Loop: Iterative action or iteration
To perform same action multiple times
*/

// print 10 numbers 1 2 3 4 5
/*
Syntax:
initialization: 1, then increment: +1 or +2 etc, Stopping point: 5
*/
let i:number = 1;       //Initialization
console.log("Example 1")
while(i <= 5){         //Condition
    console.log(i);
    i++;                //Increment or decrement statement
}

//Print even numbers between 1 to 10 
let k:number = 2;
console.log("Example 2")
while(k <= 10){
    console.log(k);
    k+=2;               // k = k+2 will also work the same
}

//Print even numbers between 1 to 10 
let j:number = 1;
console.log("Example 3")
while(j <= 10){
    if( j%2 == 0){
        console.log(j)
    }    
    j++;
}

//Print odd numbers between 1 to 10 
let m:number = 1;
console.log("Example 4")
while(m <= 10){
    if( m%2 != 0){
        console.log(m)
    }    
    m++;
}