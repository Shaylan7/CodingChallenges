//Write a function named loopThrough that takes an argument that is a 
// number and loops through and displays a message “Hello World” that number of times.


function loopThrough(num){
    let string = "Hello World ";
    return string.repeat(num);
}

console.log(loopThrough(3))