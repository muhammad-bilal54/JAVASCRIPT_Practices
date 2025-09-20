// Take two numbers as input and use an if...else statement to print the larger one.
let num1 = 11 ;
let num2 = 23 ;

if(num1 > num2){
    console.log(`num1 is greater ${num1}`);    
} else{
    console.log(`num2 is greater ${num2}`);    
}

// Area of Rectangle problem
function AreaOfRectangle (length , width) {
    if(length <= 0){
        throw console.error("length can't negitive");        
    }
    if (width <=0) {
        throw console.error("width can't negitive");           
    }
    const Area = length * width ;
    console.log("Area of rectangle is :" , Area);
    
}

AreaOfRectangle(20,10);

