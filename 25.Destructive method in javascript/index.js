//Destructive method in javascript  in-place

//Few Destructive methods

//1. Array.prototype.sort
//2. Array.prototype.reverse
//3. Array.prototype.splice

//destructive methods change the original array when they run.

//Non-destructive method

// Array.prototype.map
// Array.prototype.filter
// Array.prototype.map

//non-destructive methods doesn't change the original array , instead they give a new version of array. The original one is not touched

let names = ['bob', 'Louise', 'Tina', 'Linda', 'Gene'];

let filtered = names.map(function(item){
    return item.toLocaleUpperCase()
})

console.log("Original",names);
console.log("Uppercase", filtered); //filtered is new array

let sorted = names.sort()
console.log("Original",names); //original array chaneged
console.log("Sorted array",names); //destructive method