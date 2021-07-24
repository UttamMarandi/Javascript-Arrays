//JSON.stringify()

let obj = {name: "Walter", 
           last: "Sobchak",
           age: 50, 
           angry: true, 
           bestscore: 200, 
           armed: true
        };

//convert the object into a string

//1.passing only object
console.log("//convert the object into a string");
console.log("one parameter");
let str = JSON.stringify(obj)
console.log(str);

//JSON.stringify() method can take multiple parameters , a. the element- array/object that needs to be converted to string b. an array that takes the labels that needs to be converted

//2.passing the object and an array
console.log("two parameter");
let str1 = JSON.stringify(obj,["name","last","age"]) //only the passed labels in array and their values are converted to strings
console.log(str1); 

//3.passing the object and a function

let str2 = JSON.stringify(obj , replace)

function replace(key,value) { //replace() is method that check the type of value for each key , and returns "STRING" for the the value if it's a string
    if(typeof value === "string"){
        return "STRING"
    }
    else {
        return value
    }
}
console.log(str2);

//create a function that removes number values from the object and pass it to JSON.stringify so that only string values are stringified
 
console.log("create a function that removes number values from the object and pass it to JSON.stringify so that only string values are stringified");

function replaceRemove(key,value) {
    if(typeof value === "number") { //checks whether the value is number
        return undefined //if return undefined as the value means that key:value pair does not exist in the obkect
    }
    else {
        return value
    }
}

let str3 = JSON.stringify(obj , replaceRemove)
console.log(str3);

//4.passing object , null function and a value for "no.of spaces"
console.log("passing object , null function and a value for 'no.of spaces")
//the third parameter is used to prettify the render, It takes numercial value for no. of spaces, but also can take any string value which gets print out before each key:value pair , upto 10 characters

let str4 = JSON.stringify(obj , null, 5)
console.log("adding 5 spaces",str4);

let str5 = JSON.stringify(obj , null, "s")
console.log("adding s before each key:pair",str5); 