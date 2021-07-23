//String split and array join

//converting strings to arrays and arrays to strings
//string to array     string.split()
//array to string     array.join()

//string.split()
//split() method takes two parameters a. the character/str by which the sentence will be divided.


let sentence = "I am Iron Man"

let words = sentence.split(" ") //divide by single space
console.log(words);

let chalk = sentence.split("am")
console.log("divided by a", chalk); //also the divide character is omitted in resulting array. here "am" is removed
 
//combine with sort method

words = sentence.split(" ").sort() //to sort the words in alphabeticalorder
console.log("sorted words", words); 
//here resu;lt is [ I , Iron, Man, am] b.c am is smallcase . 
//so sort() prioritizes capital over small letters

words = sentence.toUpperCase().split(" ").sort() 

console.log("uppercase sorted" , words);

//pass empty string as parameter to split
console.log("pass empty string as parameter to split");

words = sentence.split("")
console.log(words); //as empty string is passed so no divide character..hence each letter gets splitted into single element


//array.join()
//basically opposite of string.split()
//join parameter adds the passed parameter instead of removing it
let hyphenated = words.join("")
console.log("join()");
console.log("original", hyphenated); //gets back to original string as empty string is passed
hyphenated = words.join ("-")
console.log("hyphenated", hyphenated); //hyphen is added bewteen letter of string including between spaces
console.log(typeof(hyphenated));

//sentence with no spaces
sentence = "I am Iron Man"
let owords = sentence.split(" ")
console.log("New word", owords);
console.log(sentence);
owords = owords.join("")
console.log("sentence with no spaces", owords);

//split then sort then join
console.log("split then sort then join");
sentence = "I am Iron Man"
let mission = sentence.split(" ").sort().join(" ") //join 
console.log(mission);
