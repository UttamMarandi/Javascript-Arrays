//filter() method in javacript

//filter() element iterates through each element of the array and runs a anyonymous function on each element.It returns a boolean variable.If true the element is stored in the new array , if false... element is discarded
//the anynyomous function can has 3 parameters ..  a.the elemente b.the index of element c.the copy of the array

let numbers = [23,45,14,66,94,33,4,9]
let breakPoint  = 30;

//return the entire array using filter
console.log("return the entire array using filter");
let numbersA = numbers.filter(function(item){
    return true
})
console.log(numbersA); //the entire array is shown as we returned true for each element , if return false , than numbersA would be empty

//find numbers that are less than breakPoint
console.log("find numbers that are less than breakPoint");
let smallNumbers = numbers.filter(function(item){
    if(item < breakPoint) {
        return item
    }
})
console.log(smallNumbers);

//find numbers that are greater than breakPoint
console.log("find numbers that are greater than breakPoint");
let bigNumbers = numbers.filter(function(item) {
    return item > breakPoint //returns true if item > breakPoint
})
console.log(bigNumbers);


//extract odd numbers from the array
console.log("extract odd numbers from the array");
let oddNumbers = numbers.filter(function(item) {
    // return item%2===1 //using modulus operator
    return item & 1 //using bitwise & operater //in binary form the odd naumber always has 1 on its last bit
})

console.log(oddNumbers);
