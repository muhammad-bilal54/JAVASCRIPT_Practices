let age = 40 ;

if(age >= 20) {
    console.log("you can Use this platform ");    
}else{
    console.log("you can't use this ");    
}

// Ternary operator 

let result = age >= 20 ? "yes you can perform tasks" : "No you can't perform " ;
console.log(result);

// Multiple conditions

if(age == 20) {
    console.log("your are is greater than and equal to 20 ");  
} else if(age == 30) {
    console.log("age is greater than 30 ");    
} else if(age == 40) {
    console.log("age is greater than 40 ");    
} 

// switch 
let num1 = 3 ;
let num2 = 4 ;
let operation = "+" ;

switch (operation) {
    case "+":
        console.log(num1 + num2);        
        break;
    case "-":
        console.log(num1 - num2);
        break;    
    default:
        console.log("wrong operation use ");        
        break;
}

// logical operator AND OR NOT
console.log("logical operators");


const UserAge = 2 ;
const gender = "male";

if(UserAge >= 20 && gender == "male"){
    console.log("Yes you are eligible to apply "); 
} else if(UserAge <= 22 || gender == "female"){
    console.log("yeah female are eligible for this position");    
}

let even = 5 ;

if(even % 2 == 0){
    console.log("even number");    
} else if(even % 2 != 0){
    console.log("odd number");    
}


// for loop if you already know how many iterations are required than use for 
// while loop if you not know how many iteration are needs than while 
// do while loop first print than condition check 

// guess user input
let number = 30 ;
let guess = 0 ;

do {
   guess = parseInt(prompt("guess input"));
   if(guess == number){
    alert("you win");
    break ;
   }
} while (guess!=0);