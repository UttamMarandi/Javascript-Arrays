//Object keys() , values(), entries() methods

//Object.keys(obj)
//Object.values(obj)
//Object.entries(obj)

//The above methods create an iterable object from the object
//An object or doesn't have index or length property

//Few iterable objects:
//1. Array
//2. Strings
//3. Node List
//4. Typed Array
//5. Maps
//6. Sets
//7. arguments of a function

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
    ramsay: 'Bolton'
}

// for of loop
//for of loop works only for iterable objects

let names = ['Bob', 'Louise', 'Tina', 'Linda', 'Gene'];
console.log("log all names");
for (prop of names) {
    console.log(prop);
}

//forEach() , filter(), map(), reduce all works for iterable objects. That's why we need to convert Objects to iterable objects

//Object.keys(obj)

//Object.keys() gives an iterable array for all the keys present in the object
let keys = Object.keys(westeros) //keys is an array
console.log("Keys array from obj",keys);

//Object.values(obj)

//Object.values() gives an iterable array for all the values present in the object
let values = Object.values(westeros) //values is an array
console.log("Values from obj",values);

//Object.entries(obj)

//Object.entries() gives an iterable arrays of array for both the keys and values
let entries = Object.entries(westeros) //entries is an array of array. O index is key and 1 index is value
console.log("All entries in obj",entries);

//access Snow using entries
console.log("access Snow using entries");
console.log(entries[2][1]);