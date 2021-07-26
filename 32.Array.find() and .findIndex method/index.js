//Array.find() and .findIndex method
//Array.find() is a method that takes a function as it's parameter which searches for an item until it is found. after the item is found it stops executing
//Array.find() returns the search element
//.find() callback function can take three parameters a.the element b.the index of element c.the array

let names = ['Walter', 'Jesse', 'Saul', "Lima",'Gus', 'Skylar', 'Marie', 'Todd', 'Badger', 'Pete'];

let snames = names.find(function(item){
    if(item === "Walter") {
        return true //it returns the item if true
    }
})
//find is same as forEach ...just that find stops once the item is reached
console.log(snames);

//findIndex()
//findIndex returns the index of the item if it's callback function returns true
let finames = names.findIndex(function(item){
    if(item.indexOf("u") > -1){
        return true
    }
     //indexOf returns -1 if item is not found and if found , returns the index of parameter
     //if the callback function returns true , findIndex() returns the index of the item at which our searched element is found
})

//findIndex() is slightly more efficient than filter as findIndex returns a number instead of an array.
//but if you want multiple index , than filter is the better option
console.log("letter s is find in index",finames);

//findIndex() can take two parameters a.the callback function b.this argument - an object that will be treated as this ,so that we can access it's keys within the findIndex
//this is a bit confusing , basically it is used in place object name to access it's keys so that functions can stay dynamic instead of hard coding the object name (just a gist)

//check if the 

let lima = {
    id : 123,
    names : "Lima",
    town : "Istanbul"
}

let checkName = names.findIndex(function(item){
    if(item ===this.names) {
        return true
    }
},lima)

console.log("Checking the index of Lima in names array",checkName);

//we accesed lima object within findIndex using this
//if using an object than callback function for findIndex() should not be defined using arrow funciton as it would not understand "this" keyword