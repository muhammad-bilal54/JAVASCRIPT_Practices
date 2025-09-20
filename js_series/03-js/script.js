// function
function sayHello() {
    console.log("Hello bilal!");    
}
// sayHello() ;

// function parameters and arguments
                // arguments
function multiply(a , b){
    console.log(a * b);    
}
multiply(2 , 9); // parameters
// multiply(2 , 4);

// funtion with return keyword
function sum(a , b){
    let sum = a + b ;
    return sum;
}

let total = sum(4 ,5);
// console.log("The sum function return ans" , total+4);

// Unlimited argument accept
function addNumber(){
    let ans = 0 ;

    for (let i = 0; i < arguments.length; i++) {         
        ans = ans + arguments[i];
    }     
    return ans ;
}

// let totalSum = addNumber(2 , 4 , 1 , 5);
// console.log(`sum of all value is ${totalSum}`);

// Unlimited argument accept using spread operator
function addNumber2(...num){
    let ans = 0 ;
    for (let i = 0; i < num.length; i++) {
        ans = ans + num[i];              
    }
    return ans ;
}

let totalSum = addNumber(2 , 4 , 1 , 5 ,6);
console.log(`sum of all value is : ${totalSum}`);

// arrow function 
const hey = () => {
    console.log("hey hello arrow funtion");    
}
// hey();

// argument keyword not work in arrow funtion 
const addnum = (...num) => {
    console.log(num);    
}
// addnum(3,43,23);

//hoisting is not work in arrow function only work in function declaration

// this keyword

const person = {
    fullName : "m bilal",
    userFun : function () {
        return this.fullName;     
    }
    // myfun : () => {
    //     return this.fullName ;
    // }
}

// console.log(person.userFun());


// high order function and callback

function  add(a , b , cb) {
    let result = a + b ;
    cb(result);

}

// add(10 , 23 , function (val) {
//     console.log(val);    
// })

// add(2 , 4 , (val) => console.log(val)
// )

function printsum(val) {
    console.log(val);    
}

// add(3 , 4 , printsum);