let characters = []; //defining an empty array
console.log("empty array", characters);

characters = ["uttam", "home", "town", "bask"]; //array with elements
console.log("array with elements", characters);

let length = characters.length; //shows length of array
console.log("length of array", length);

console.log("access array element", characters[0]);

//The index of the last element of an array is always 1 less than the length of array

console.log("access last element", characters[characters.length - 1]);

//add, remove item from array

characters.push("anakin"); //push() adds element to the end of array
characters.push("obiwan");
console.log("push() ", characters);

characters.pop(); //pop() remove the last element of the array
console.log("pop()", characters);

characters.unshift("anakin"); //unshift() adds element at the start of array
console.log("unshift()", characters);
characters.shift(); //shit() removes element from the start of arrray
console.log("shift()", characters);

//shift() and pop() do not take parameters but they return the element that is being removed

console.log("What shift() returns->", characters.shift());
let named = characters.pop();
console.log("What pop() returns->", named);
