//Define a function called calculateSum to calculate the sum all the digits from 0 to an input number.

function calculateSum(num){
    let result = 0; 
    for (let i = 1; i <=num; i++){
        result += i
        
    } return result 
}

console.log(calculateSum(5))