//Treat strings as arrays

let str = "Uttam Marandi"

//create a copy of str

let arr = str.split("")
let arr2 = Array.from(str)

console.log("copy of str using .split()",arr);
console.log("copy of str using Array.from()", arr2); //both logs an array with characters as elements

//access R in array and in string

console.log("access R in string",str[8]); 
console.log("access R in array",arr[8]); //both logged r , meaning strings act purely like arrays

//access R using charAt()
console.log("access R in string using charAt", str.charAt(6)); //logs M

//.concat() - combine two arrays or combine two strings

//use concat on string
str = str.concat(" good")
console.log("concated string", str);

//indexOf lastIndexOf - same for arrays and strings //both are case sensitive
//indexOf starts at the beggining and goes towards the end whereas lastIndexOf starts at the end and goes towards the beginning

//use indexOf and lastIndexof for strings

console.log("indexof of a", str.indexOf("a"));
console.log("lastindexof of a", str.lastIndexOf("a"));

//includes() same for array and strings

console.log("check if U is present using includes()", str.includes("U"));

//use slice on str
console.log("give me only Uttam using slice", str.slice(0,6));

//we can also use array methods with strings, like for of loop
for(let prop of str) {
    console.log("each char in str",prop);
}

