//Iterators vs Generators

//An iterator often called index is a built in object in sevearble data types like Arrays, Strings, Sets, Maps, NodeList
//Iterator is an object that gives content from some other object in some predetermined order
//{Object} => Iterator => Generator
//Objects do not have a built in iterator


//generator are defined using function*
//generator are functions that can create custom iterators

function* genny() {
    yield 'a'
}

let iter = genny() 
console.log("iter", iter);
//genny() is generator function which create iterators
//iter has function called .next()

console.log("iter next",iter.next());
//iter.next gives an object with value set to yeild value , and done key with false value
// {value:a, done:false}

//function in js by default return undefined
//so by default genny() has another line of code -> return undefined
//thst's the object the iter.next will log next

console.log("iter next 2nd time",iter.next());
// returs {value:undefined , done:true}


function* genny2() {
    yield 'a'
    return 10
}
let iter2 = genny2()
//if we return 10 from genny then 2nd iter.next will log {value:10. done:true}
console.log("iter2 next",iter2.next());
console.log("iter2 next 2nd time",iter2.next());

//the key done becomes true the moment it reasches the return statement

//multiple yield 

function* genny3() {
    yield 'a'
    yield 'b'
    yield 'c'
    yield 'd'
    return 10
}
let iter3 = genny3()
console.log("iter2 next",iter3.next()); //each call of .next() returns the yield for "value" key and false for "done" key until the it reaches the return statement   
console.log("iter3 next 2nd time",iter3.next());
console.log("iter3 next 3rd time",iter3.next());
console.log("iter3 next 4th time",iter3.next());
console.log("iter3 next 5th time",iter3.next()); //in this .next() call reaches return statemet and value for done key becomes true

//return statement in middle
function* genny4() {
    yield 'a'
    yield 'b'
    return 10
    yield 'c'
    yield 'd'
    
}
let iter4 = genny4()
console.log("iter4 next",iter4.next()); 
console.log("iter4 next 2nd time",iter4.next());
console.log("iter4 next 3rd time",iter4.next()); //on third iter4.next() onwards done becomes true. the rest yield will result undefined as function never runs those statement. Once a function is returned the rest code never returns
console.log("iter4 next 4th time",iter4.next());
console.log("iter4 next 5th time",iter4.next());

//we have use simple characters for yield values on above generator function but we can also use other data types as yield values

let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar','tommy'];

function* genny5(){
    yield names[0]
    yield names[4]
    yield names[2]
    yield names[3]
    yield names[5]
}

let iter5 = genny5()
console.log("iter5 next",iter5.next()); 
console.log("iter5 next 2nd time",iter5.next());
console.log("iter5 next 3rd time",iter5.next()); 
console.log("iter5 next 4th time",iter5.next());
console.log("iter5 next 5th time",iter5.next());
console.log("iter5 next 6th time",iter5.next());

//each iter5.next returns an object with value key set to yield value and done key set to false until the return statement where value is set to return value or undefined and done key is set to true
//Note :  the order in which names[] values are accessed entirely depends on us depending on the order in which we specify them in yield

//CREATING CUSTOM ITERATOR FOR AN OBJECT

let westeros = {
    cersei: 'Lannister',
    arya: 'Stark',
    jon: 'Snow',
    brienne: 'Tarth',
    daenerys: 'Targaryen',
    theon: 'Greyjoy',
    jorah: 'Mormont',
    margaery: 'Tyrell',
    sandor: 'Clegane',
    samwell: 'Tarly',
    ramsay: 'Bolton',
    yearRelease: "2014"
}

let count = -1; //count is our increment variable
let wtGenerator = { // wtGeneretor is the object that store the generator function
    [Symbol.i]: function(obj){ //Symbol is a keyword and i can be any any variable name ,this is the syntax to define a custom generator function for object
        return {
            next: ()=>{ //here we define the custom iterator function next() for our iterator
                count++; 
                switch(count) { //we are using a switch case statement for assigning value and done keys for each count value 
                    case 0:
                        return {
                            value: westeros.cersei, 
                            done: false}
                    case 1:
                        return {
                            value: westeros.brienne,
                            done: false
                        }
                    case 2:
                        return {
                            value: westeros.samwell,
                            done: false
                        }
                    case 3 :
                        return { value: westeros.ramsay, done: false}
                    case 4 :
                        return {
                            value : westeros.yearRelease,
                            done : false
                        }
                    default:
                        return { value: undefined, done: true} //default
                }
            }
        }
    }
}

let wtdata = wtGenerator[Symbol.i]()
console.log("wtdate",wtdata); //logs a function

console.log("wtdata next() for 1st time", wtdata.next());
console.log("wtdata next() for 2nd time", wtdata.next());
console.log("wtdata next() for 3rd time", wtdata.next());
console.log("wtdata next() for 4th time", wtdata.next());
console.log("wtdata next() for 5th time", wtdata.next());
console.log("wtdata next() for 6th time", wtdata.next()); //done becomes true

//when iterating through the object we are not concerned how the objects are written down , but how it is defined in our generator function 