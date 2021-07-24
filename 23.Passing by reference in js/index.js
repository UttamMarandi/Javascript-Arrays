//Javacript passes by reference not by value. 
//except primitive data types


//for arrays
let names = ['Bob', 'Louise', 'Tina', 'Linda', 'Gene'];

let f = function(arr) { //the "arr" is a reference to original array names. so any changes made to "arr" will reflect in "names" 
    //we can create duplicate arrays using .from() and .concat() , these arrays are original in itself ...and changes made will not affect the "names array"
    let a = Array.from(arr) 
    let r = [].concat(arr)
    arr.push("Mort")
    a.push("Belcher")
    a.push("Horty")
    console.log("passed by reference array",arr);
    console.log("original array",names);
    console.log("copy of array using Array.from",a);
    console.log("copy of array using [].concat()",r);
}

f(names);

//for objects
//in order to create brand new object from original object we use .. Object.assign({} , objectName)
//.assign() only create a shallow copy of object , meaning is there is another object within the object or array within object than those objects and arrays are still pass by reference

let archer = {
    characters: ['Sterling', 'Pam', 'Lana', 'Mallory'],
    info:{inner:true,nums:[1,2,3]}
    }

let newObj = g(archer)

function g(obj) { //obj is a reference of archer
    let o = Object.assign({} , obj)
    console.log("Original Obj", archer);
    console.log("Pass by reference Obj", obj);
    console.log("Duplicated array using .assign()", o);

    console.log("After pushes");
    obj.characters.push("Hana")
    obj.info.inner = false
    obj.info.nums = [4,5,6]
    

    console.log("Original Obj", archer);
    console.log("Pass by reference Obj", obj);
    console.log("Duplicated array using .assign()", o);

    //all object has the changes
    //.assign() only create a shallow copy of object , meaning is there is another object within the object or array within object than those objects and arrays are still pass by reference

    //what we can do is reassign its deep values
    obj.characters = ["uttam","sunendu", "tarun"]  //characters point to whole new array 
    console.log("Original Obj", archer);
    console.log("Duplicated array using .assign()", o); //characters in o is still pointing to the old array

    obj.characters.push("Sanjay")
    //this push() will not be shown in o b.c we changed the array that obj points to
    console.log("Original Obj", archer);
    console.log("Duplicated array using .assign()", o);

    //but the other keys i.e info: , nums[] of archer, obj and o are still pointing to the same values ...they are still connected and passed by reference
}

//HOW TO DEEP COPY INSTEAD OF SHALLOW COPY
console.log("HOW TO DEEP COPY INSTEAD OF SHALLOW COPY");

//in order to copy entire object use
// let newObject = JSON.parse(JSON.stringify(objectName))
//the above line first changes the object to string and then converts back to object using parse. the entire is stored in newObject
//best to use if size of object below 1kb

let newArcher = JSON.parse(JSON.stringify(archer))

archer.characters.push("Hema")
newArcher.characters.push("Malini")

console.log("Original Obj", archer);
console.log("Deep Copy Obj", newArcher);

//"Hema" and "Malini" are added to their respective arrays. newArched is a deep copy of archer

//also we can use assign() on inner objects i.e objects within object to create duplicate object

