// console.log("Hello-world!");
// variable using var keyword

var userName = "Ali khan" ;
var userEmail = "ali@gmail.com" ;
var age = 34 ;
var isactive = true ;

// console.log(userName,userEmail,age,isactive) ;
// hoisting in var

// console.log(x);
var x = 3 ;

// var global scope - function scope

function print() {
    var z = "bilal ali" ;
    if(isactive) {
        console.log(z);        
    }
}
// console.log(z);  create error because var is functional scope
// print();

// let
let userID = 34502 ;
userID = 34503 ;
let customerName = "raza khan" ;
// let block scope 
if(true) {
    let y = 23  ;
}
// console.log(y); error because let is block scope 

// hoisting let 

// console.log(b); error reference error 
let b = 3 ;

// const 

const price = 200 ; // must initailize when declare
// price = 330 ;  error assingnment to constant variable not allowed 
// console.log(price);


// Datatype in javascript

// Number 
let total = 400 ;
let pi = 3.1444 ;
const sum = pi + total ;
// console.log("total amount is :" , sum);

// String 
let lastname = "Bilal" ;
let firstName = "muhammad" ;
let fullName = firstName + " " + lastname ;
// console.log(fullName);

// booleans 
let isloggedIn = true ;
let logOut = false ;

// null
let seatReserve = null ;

// undefined 
let amount = undefined ;

// objects
const person = {
    personName : "ali" ,
    personAge : 23 ,
    personAmount : amount ,
    personLogOut : logOut,
}

// console.log(person)
// console.log(person.personName);
// console.log(person["personLogOut"]);

// console.log(typeof amount);

console.log("23" + 11);
console.log(11 + "2");  // concatenate into string 
console.log("23" * 2); // convert into number and multiply 
console.log("a" * 1); // NaN 


