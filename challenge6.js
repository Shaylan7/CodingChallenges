//Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: 
//The parameter weekday is True if it is a weekday, and the parameter vacation is True if 
// we are on vacation. We sleep in if it is not a weekday or we're on vacation. 
//Return True if we sleep in.

function sleep_in(weekday, vacation){
    //sleep in = when weekday = false and vacation = true 

    switch(weekday){
        case true:
            return false;
        case false:
            return true;
    }
    switch(vacation){
        case true:
            return false;
        case false:
            return true;
    }

}

console.log(sleep_in(true,false)); 
console.log(sleep_in(false,false)); 