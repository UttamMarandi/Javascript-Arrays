//Searching through arrays

//find an element in an array

//there are many ways --
//1. array.includes() :- takes two parameter, default is searchelement , and other is the starting index from which search will start, it returns a boolean value
//2. array.indexOf() :- takes two parameter, default is searchelement , and other is the starting index from which search will start, it returns -1 if element is not found or index of the first matched element
//3. Array.some() :- some() calls a callback function , returns boolean : true if found, false if not found
//4. Array.find() :- fins() also calls a callback function, returns the searched value from array or undefined
//5. Loop and return a single value


let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar', 'Marie', 'Todd', 'Badger', 'Pete'];

//1. Find out if 'Todd' or 'Steve' is in the Array
console.log("Find out if 'Todd' or 'Steve' is in the Array");
let findA = names.includes("Todd");
console.log("Todd",findA);
console.log("Steve",names.includes("Steve"));

//2. Find out what positions in the Array are 'Gus' or 'Tuco'
console.log("Find out what positions in the Array are 'Gus' or 'Tuco'");
let findB = names.indexOf("Gus")
console.log("Gus" , findB);
console.log("Tuco",names.indexOf("Tuco")); //returns -1 as "Tuco" is not present in array

//3. Find out whether anyone in the list has a capital letter 'M' in their name
console.log("3. Find out whether anyone in the list has a capital letter 'M' in their name");

//use of some()

let some = names.some(function(item){ 
    if (item.indexOf("M") > -1){
        return true //cannot return item , I checked it ..some always return boolean : true or false
                    //cannot use only indexOf("M") for this purpose as it searches for element of array , while indexOf() within some() takes each element as its parameter and searches within that element
    }
    return false
})
console.log("Check for M using indexOf",names.indexOf("M")); //will always return -1 , as there is nos such element as -1
console.log(some);

//4. Find the first name in the list that is more than 5 characters 

let find = names.find(function(item) {
    if(item.length > 5) {
        return item //find() returns the actual object instead of boolean as in some()
    }
},2)

console.log("first name in the list that is more than 5 characters :-",find);