//Assignment 1 : Check the character is uppwercase or lowercase
console.log("Assignment 1 : Check the character is uppwercase or lowercase")
let char:string = "H";
if(char >= "A" && char <= "Z"){
    console.log(char + ": Character is Uppercase")
} else if(char >= "a" && char <= "z"){
    console.log(char + ": Character is Lowercase")
} else{
    console.log(char + ": Character is Undefined character")
}

//Assignment 2 : Check if number is multiple of 10
console.log("Assignment 2 : Check if number is multiple of 10");
let z:number = 50;
if(z%10 == 0){
    console.log(z + ": Number is multiple of 10")
}else{
    console.log(z + ": Number is not multiple of 10")
}

//Assignment 3 : Check if a number is positive and even
console.log("Assignment 3 : Check if a number is positive and even");
let m:number = -101;
if(m > 0 && m % 2 == 0){
    console.log(m + ": Number is positive and even number")
} else if(m < 0 && m % 2 == 0){
    console.log(m + ": Number is negative and even number")
} else if(m > 0 && m % 2 != 0){
    console.log(m + ": Number is positive and odd number")
} else if(m < 0 && m % 2 != 0){
    console.log(m + ": Number is negative and odd number")
}

//Assignment 4 : Check if a character is an uppercase vowel or consonants
console.log("Assignment 4 : Check if a character is an uppercase vowel or consonants");
let l:string = "A";
if(l >= "A" && l <= "Z" && (l == 'A' || l == 'E' || l == 'I' || l == 'O' || l == 'U')){
    console.log(l + ": Letter is uppercase and is vowel")
} else if(l >= "a" && l <= "z" && (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u')){
    console.log(l + ": Letter is lowercase and is vowel")
} else if(l >= "A" && l <= "Z" && (l != 'A' && l != 'E' && l != 'I' && l != 'O' && l != 'U')){
    console.log(l + ": Letter is uppercase and is consonants")
} else if(l >= "a" && l <= "z" && (l != 'a' && l != 'e' && l != 'i' && l != 'o' && l != 'u')){
    console.log(l + ": Letter is lowercase and is consonants")
} else {
    console.log(l + ": Letter is undefined.")
}

//Assignment 5 : Check which of three number is highest
console.log("Assignment 5 : Check which of three number is highest");
let a:number = 10, b:number = 20, c:number = 25;
if(a > b && a > c){
    console.log(a + ": value is highest of all three")
} else if(b > a && b > c){
    console.log(b + ": value is highest of all three")
}else{
    console.log(c + ": value is highest of all three")
}
