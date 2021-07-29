//A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.

function factorial(num){
    let result = 1; 
    for (let i = num; i > 0; i--){
        result*=i
    } return result 
}


console.log(factorial(4))