//for of loop in javascript

let supernatural = { 
    "actors":['Jared Padelecki', 'Jensen Ackles', 'Mark Sheppard', 'Misha Collins'],
    "characters":['Sam Winchester', 'Dean Winchester', 'Crowley', 'Castiel'],
    "seasons": 12 
};

//for in loop on supernatural

for(prop in supernatural) {
    console.log("keys in sipernatural",prop);
}

//for of loop in supernatural

// for (prop of supernatural) {
//     // console.log("values for keys", prop) //wrong as objects are not iterable
// }

//check the type of each keys

for (prop in supernatural) {
    console.log(prop, typeof supernatural[prop]); //typeof prop also works but logically it should be typeof supernatural[prop]
}
    
//check if keys of the object have array value or not
//Array.isArray(element) checks whether the element is an array or not 

for (prop in supernatural) {
    console.log("is array or not", prop, Array.isArray(supernatural[prop]));

    console.log("values",supernatural[prop] ); //only logs 12 as it is an primitive data hence iterable
}

//use for in loop on actors

for (prop in supernatural.actors){
    console.log("index in actors", prop);
    //logs built in iterator // 0,1,2,3
}
    
//for of loop
//for of loop returns the values provided that the object is iterable

//for of on supernatural will not work as it is not iterable
//but it will work on supernatural.actors

for(prop of supernatural.actors) {
    console.log("all actor names", prop);
}
