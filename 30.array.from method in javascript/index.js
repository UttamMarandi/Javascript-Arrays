//Array.from() method in javascrit

//.from() create a shallow copy of an array containing primitive data types
//changes made in copied array will not affect the original array and vice-versa

let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar', 'Marie', 'Todd', 'Badger', 'Pete'];

let fnames = Array.from(names)
console.log("original names", names);
console.log("from() names", fnames);

names.push("Tommy")
fnames.push("Hayato")

console.log("original names", names);
console.log("from() names", fnames);

//using from with arrays of objects or arrays containing arrays
let stuff = [123, 'Apu', //primitive 
             {Smithers: 'Mr. Burns'}, //object
             ['Futurama', 'Disenchantment'] //array
            ];


let fstuff = Array.from(stuff) //create a shallow copy of stuff meaning changes in primitive data type will not affect the orignal "stuff" but changes in objects and array within "stuff" will affect both original and duplicated
fstuff[3].push("Uttanm")
console.log("from fstuff", fstuff);
console.log("original stuff", stuff); //both fstuff and stuff contains the pushed item