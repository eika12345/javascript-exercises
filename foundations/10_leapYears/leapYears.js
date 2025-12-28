const leapYears = function(year) {
    if (year % 400 === 0) {    // since 400 overwrites 100, it must be first 
        return true;
    } else if (year % 100 === 0) {
        return  false;
    } else if (year % 4 === 0 ) {
        return true ;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
