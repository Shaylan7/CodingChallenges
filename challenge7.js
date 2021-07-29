//Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, 
//return True if they have the same first element or they have the same last element. 
//Both arrays will be length 1 or more.


function common(array1,array2){
    if (array1[0] == array2[0]){
        return true
    } else if (array1[array1.length-1] == array2[array2.length-1]){
        return true
    } else {
        return false 
    }
}

console.log(common([1, 2, 3], [7, 3]));
console.log(common([1, 2, 3], [7, 3, 2]))