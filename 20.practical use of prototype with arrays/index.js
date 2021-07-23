// Practical use of prototypes with arrays
        
let names = ['Sterling', 'Pam', 'Cyril', 'Lana', 'Mallory', 'Cheryl'];
//use the built-in Array.sort() method
let sorted = names.sort();
console.log("sorted array",sorted);
console.log("original array",names);
//both of the above logs reult the same value as both are reference to the same array

//Array prototype helps to create our own custom function that can be used just like default array function
//we cannot use arrow function while defining array prototypes

//create a shuffle function that randomises the array values and add it to array prototype

Array.prototype.shuffle = function() { //we are adding shuffle() method to array prototype
    let len = this.length //this represent the array on which shuffle() is used
    for (let i=0; i<len; i++) { 
        let temp = this[i]
        let pos = Math.floor(Math.random() * len)
        let other = this[pos]
        this[i] = other
        this[pos] = temp //we switched values in index
    }
    return this //shuffle() return the shuffled array

} //array prototype defined

//Doubt :- I have no idead why steve used "".concat(this [i]) instead of just this[i] , so I have used my way as it is more understandable and works


let shuffled = names.shuffle()
console.log("shuffled", shuffled);

//we can chain call  shuffle manu times
let shuffledM = names.shuffle().shuffle().shuffle()
console.log(shuffledM);