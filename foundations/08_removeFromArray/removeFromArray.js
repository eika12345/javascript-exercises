
//const removeFromArray = function(array, ...valueToRemove) {
//   for (let i = 0; i < valueToRemove.length; i++) {
//   let value = valueToRemove[i];
   

//   let index = array.indexOf(value);

//   for (each value in valueToRemove) {
//   if (index !== -1) {
//    array.splice(index, 1);

//    return array
//   }
//   }
//   }
//};

const removeFromArray = function(array, ...valueToRemove) { // array parameters ([1,2,3,4], 2 ,3) etc

    for (let i = 0; i < valueToRemove.length; i++) {
         let value = valueToRemove[i]; // goes through each value in valueToRemove to find what value to remove (2,3) 
    
    while (array.indexOf(value) !== -1) {
        let index = array.indexOf(value);   
        array.splice(index, 1);
    }
}

     return array;

}



// Do not edit below this line
module.exports = removeFromArray;
