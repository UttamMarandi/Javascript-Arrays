//Manipulating and Sorting of Arays in JS

let characters = ["Iron Man", "Hulk", "Spiderman", "Ant Man"];

//splice() -> removes element from any position of array , can take three parameters
//a. starting index from which items to be removed b. no.of items to be removed c. any replacement values

console.log("splice() with no parameter", characters.splice()); //no parameter
//if no parameters given than original array is not manipulated
console.log("Array Change 1", characters);

console.log("splice() with one parameter", characters.splice(0)); //only starting index
//above console returns the entire array i.e it removed all the element from array
console.log("Array Change 2", characters); //array is now empty

characters = ["Iron Man", "Hulk", "Spiderman", "Ant Man"];

console.log("splice() with two parameter", characters.splice(0, 2));
//returns the first two items i.e Iron Man and Hulk. That means these two items are removed
// 2 is the number of elements to be removed.
console.log("Array Change 3", characters);
//only two items remaining in array

characters = ["Iron Man", "Hulk", "Spiderman", "Ant Man"];
console.log(
  "splice() with three paramters ",
  characters.splice(0, 2, "Anakin")
);
//again return two elements Iron Man and Hulk ..as they are removed
console.log("Array Change 4", characters);
//But now Anakin is also added to the start of array..characters right now has 3 items
console.log("Array length -> ", characters.length);

characters = ["Iron Man", "Hulk", "Spiderman", "Ant Man"];
console.log(
  "splice() passing a string as parameter",
  characters.splice("black widow")
);
// (Wrong ..array is empty now)
console.log("Array Change 5", characters);
console.log("Array length c5 -> ", characters.length);
//that means black widow is not added to the array ...interesting

characters = ["Iron Man", "Hulk", "Spiderman", "Ant Man"];
characters.splice(1, 2, "Hans");
console.log("splice() removing  two things from middle", characters);

characters.splice(0, 1, "Old Man", "Titans");
console.log("splice() remove 1 and add 2 item", characters);

//SORTING OF ARRAYS
characters.push("balck panther");
console.log("Array Now", characters);

//We have two methods for sorting
//1. array.reverse() 2. array.sort()

characters.reverse();
console.log(".reverse()", characters);
//array.reverse reverse all the elements in array

characters.sort();
//array.sort() sorts the array in alphabetical order
console.log(".sort()", characters);

characters.push(5); //what if we add a number
console.log("Array after adding a number", characters);
characters.sort();
console.log("sort()", characters);
// so numbers first than character

let data = {
  id: 123,
  address: "BPD",
  name: "Uttam",
};
let isHot = true;
let tommy; //undefined variable
characters.push(data);
characters.unshift(isHot);
characters.push(tommy);
console.log("Array after adding an object", characters);
characters.sort();
console.log("sort() after adding an object", characters);
//okay so it's a bit confusing , object element was sorted based on the "name" key(doubt)

//overall sort() order
//1. Numbers
//2. Characters
//3. Object depending on order of string value for a key within object
//4. Boolean
//5. undefined, null

//indexof()
//indexof(element) //returns the index of the element in array
//if element not present than return -1
console.log("Array Now: indexof()", characters);
let position = characters.indexOf("Ant Man");
console.log("index of Ant Man", position);

//lastindexOf()
//returns the index of element but searches from backwards...return value is same as indexof for most cases except when same element is present twice
//if element not present returns -1
position = characters.lastIndexOf("Ant Man");
console.log("last index of Ant Man", position);

//same element case
let fruits = ["banana", "apple", "oranges", "apple", "guava"];
let positionf = fruits.indexOf("apple"); //returns 1
console.log("index of apple", positionf);
positionf = fruits.lastIndexOf("apple");
console.log("last index of apple", positionf); //returns 3
