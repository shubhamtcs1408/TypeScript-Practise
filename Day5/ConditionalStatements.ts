// if condition
//Example 1

let age1:number = 19;
if(age1 >= 18){
    console.log("1. Eligible to vote.");
}

//Example 2
let age2:number = 8;
if(age2 >= 18){
    console.log("2. Eligible to vote.");
}else{
    console.log("2. Not eligible to vote.");
}

//Example 3 : Odd even
let num = 26;
if(num % 2 == 0){
    console.log(`3. ${num} : Number is even: ` + num)
}else{
    console.log(`3. ${num} : Number is odd: ` + num)
}

//Example 4 : Nested if else
let percentage:number = 66;
if(percentage > 75){
    console.log("4. Grade A: " + percentage + " %");
}else if(percentage > 70){
    console.log("4. Grade B: " + percentage + " %");
}else if(percentage > 65){
    console.log("4. Grade C: " + percentage + " %");
}else if(percentage > 60){
    console.log("4. Grade D" + percentage + " %");
}else if(percentage > 55){
    console.log("4. Grade E" + percentage + " %");
}else if(percentage > 40){
    console.log("4. Grade F" + percentage + " %");
}else{
    console.log("4. Failed " + percentage + " %");
}

//Example 5
let browser:string = 'edge';
if(browser === "chrome"){
    console.log("5. Browser is chrome");
}else if(browser === "firefox"){
    console.log("5. Browser is firefox");
}else if(browser === "safari"){
    console.log("5. Browser is safari")
}else{
    console.log("5. Other browser is used: " + browser);
}

//Switch case statements
let day:number = 5;
switch(day){
    case 1:
        console.log("6. Monday");
        break;
    case 2:
        console.log("6. Tuesday");
        break;
    case 3:
        console.log("6. Wednesday");
        break;
    case 4:
        console.log("6. Thursday");
        break;
    case 5:
        console.log("6. Friday");
        break;
    case 6:
        console.log("6. Saturday");
        break;
    case 7:
        console.log("6. Sunday");
        break;
    default :
    console.log("6. Invalid week")
}

//Example 7
let x:number=20, y:number=11;
switch(x-y){            // x-y is a statement which can be used in switch statement too apart from values too
case 0:
    console.log("7. Result is Zero");
    break;
case 5:
    console.log("7. Result is Five");
    break;
case 10:
    console.log("7. Result is ten");
    break;
default: console.log("7. Result is something else")
}