//Chaining objects and methods

//create a object with a funciton

let myObj = function(nm) {
    this.name = nm
    //when used with new it will return an instance
}

console.log("typeof myObj",typeof myObj); //returns 'function'

let bob = new myObj('My name is bob') //bob is an instance object of  myObj
let cole = new myObj("I am cole") //cole is an instance object of myObj
//Note:- here function(nm) is not returning anything , still it does not return undefined b.c we are using new keyowrd with myObj which create an instance of the function instead of assigning it

console.log("typeof bob",typeof bob); // returns object

//also we can create custom function for myObj

myObj.prototype.getName = function() {
    console.log(this.name);
}
//above function is not returning anything that means if we want to store .getName in a value , it will be undefined

//calling the custom function
bob.getName() 
cole.getName()

//create custom capitalize function
myObj.prototype.capitalize = function() {
    this.name = this.name.substring(0,1).toUpperCase() + this.name.substring(1)
    return this
}

//create custom uppercase functoin
myObj.prototype.upper = function() {
    this.name = this.name.toUpperCase()
    return this //return this ..returns the object which helps us to chain the functions
}

//chain both methods
bob.capitalize().upper()
console.log("bob after capitalize and upper",bob); //returns myObj {name:MY NAME IS BOB}

console.log("name in bob",bob.name); 
let nameInBob = bob.capitalize().upper().getName()
console.log(nameInBob); //returns undefined as getName() does not return anything

bob.capitalize().upper().getName() //getName() logs bob in console

// chaining of built in methods
let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar', 'Marie', 'Todd', 'Badger', 'Pete'];

//log out each item in reverse sorted order
names.sort().reverse().forEach(function(item){
    console.log("item in names ",item);
})