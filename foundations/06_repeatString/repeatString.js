const repeatString = function(str, times) {
    if (times < 0) {
        return "ERROR";
    }
    let result = "";
    for (let i = 0; i < times; i++) {
        result += str;
    }
     return result;

};

console.log(repeatString("hey", 3))

// Do not edit below this line
module.exports = repeatString;
