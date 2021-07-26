//Maps and Sets in Javascript
//Maps and Sets both data types are introduced in ES6

//Maps are like objects while Sets are like arrays

//MAPS
//Unlike objects, maps are iterable which means we can use array methods like .filter() , .map() ,.reduce() 
//Maps also have unique keys


//few mehtods for maps
//1. .size
//2. .set(key,value)
//3. .delete(key)
//4. .get(key)
//5. .has(key)
//6. .keys(key)
//7. .values() -  returns iterator with array of values
//7. .keys() - returns iterator with array of keys
//8. .entries() -return iterator with array of [key,value]
//9. .clear()
//10. .forEach()
//11. .set()

//SETS
//Sets are like arrays but have unique values
//sets can be used to remove non-unique values

//few sets methods
//1 .set
//2 .add(value) //same as .push() for array
//3 .delete(value) //
//4 .entries() - returns iterator with array of [value,value]
//5 .values() - returns iterator with array of values
//6 .has(value)
//7 .clear()
//8 .forEach

//CREATE A MAP
let obj = {
    prop1 : 123,
    prop2: "abc",
    prop2: "treen"
}
 
console.log("obj" , obj); //value of key "prop2" gets overwritten to "treen"

let myMap = new Map() //defining a new map
myMap.set("prop1",123)
myMap.set("prop2" , "abc")
myMap.set("prop2", "treen")

console.log("map", myMap); //same as pbject -> value of key "prop2" gets overwritten to "treen"

//CREATE A SET : Remove duplicates from an array

let names = ['Walter', 'Jesse', 'Walter', 'Gus', 'Skylar', 'Gus', 'Todd', 'Badger', 'Pete']; //names has two duplicate values

console.log("names array", names);
let setNames = new Set(names) //names array passed as parameter to while definig a new set
console.log("setNames set", setNames); //in set duplicate "walter" and "gus" are removed

//Both maps and sets are iterable objects