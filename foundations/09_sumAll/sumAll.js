// 1 - create a function that sums every integer inbetween 2 integers etc (1,4 ==> 1 + 2 + 3 + 4 = 10)
// 2 - since there are 2 intigers, function should have 2 parameters (min and max etc)
// 3 - create a sum variable i = 0
// 4 - create the for loop where i goes through every number 
// 5 - return sum 

// test 4 - validation questions: is a number, integer or negative?



// ========= structure 
// 1 - validation 
// 2 - min and max
// 3 - loop and sum 
// 4 - result


const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" ||
       !Number.isInteger(a) || !Number.isInteger(b) ||
       a < 0 || b < 0) {
       return "ERROR";
    }

//    (Number.isInteger(a)) &&
//    (Number.isInteger(b)) &&
//    (isNaN(a) || isNaN(b))

    const min = Math.min(a, b);
    const max = Math.max(a, b);
    

    let sum = 0

    for (let i = min; i <= max; i++) {
        sum += i;
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
