//Every method for arrays

//array ever()
//every() checks if every element in the array returns true
//every method takes an anyonyomous function as parameter. This function can take 3 parameters. a. the array element , b. the index of the element, c. the array itself

let numbers = [40,16,57,807,78,23,63,59]

let greater20 = numbers.every(function(num){
    return num > 20 //returns true or false
})

console.log(greater20);
//it returns false as not every number in the array is greater than 20

let greater10 = numbers.every(function(num){
    return num > 10
})

console.log(greater10);
//returns 10 as all number in the array is greater than 10