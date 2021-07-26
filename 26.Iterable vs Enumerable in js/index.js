//Iterable vs Enumerable in JS
//for of loops vs for in loops



let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar', 'Marie', 'Todd', 'Badger', 'Pete'];

names.elf = "Leagolas" //adding elf key to array
console.log(names);
//when we add keys to array or object using above method , it is enumerable true

Object.defineProperty( //another way of adding keys to an array/object ..."ent" is the key "value" is value
    names, 'ent',
    {
        value : "Treebeard",
        enumerable: false
    }
)
console.log("After adding ent",names);

//use for in loop
for (prop in names) {
    console.log("for in loop", prop); //logs out the index for simple element , and keys for key -value pairs
}

//for "ent" key , enumerable is set to false that's why "ent" is not displayed in for in loop
// for in loop loops through all the enumerable true properties of an array

//use for of looop
for (prop of names) {
    console.log("for of loop", prop);// for of logs out the values for each index. Note:- values for key-value pair is not logged
    
}

let movies = {
    fiction : ['Star Wars', 'Star Trek', "Jaws"],
    horror :  ['Jurassic Park', 'Gross Pointe Blank']
}

movies.best = "Interstellar"
Object.defineProperty(movies, "latest", {value: "Black widow", enumerable: false})

//use for in loop
for (prop in movies) {
    console.log("movies for in",prop); //loggs all the enumerable true keys for movies. so it does not logs out "latest" key
                                    //if enumerable set to true for "latest" then , "latest" also get logged out
}

// for of loop are designed to use the built in iterators i.e index to access the values present in each index.
//that's why for of loop can't access values for key:value pairs

//use for of loop in movies
// for(prop of movies) {
//     // console.log("movies for of", prop); //logs an error ..movies is not iterable b.c there is no iterator/index to access the valued for movies object
// }

//use for of loop in movies.fiction
for(prop of movies.fiction) {
    console.log("Movies.fiction for of",prop); //logs all the values in movies.fiction as it is an array
}
//use for of loop in Star Wars i.e movies.fiction[0] ie. on a string
for(prop of movies.fiction[0]){ 
    console.log("for of on Star Wars",prop);  //log each character in Star Wars.as string is an iterable object with in built index
}


//objects are by default not iterable , we have to covert objects using ..Object.keys() or Object.values() to make it iterable

//Summary
//enumerable means traversing through all the index and key pairs for key:value pairs
//iterable mean traversing through all the values stored in the index but not the values stored in key:value pairs

//for in loop access the index and keys for key:value pair //can be used with both arrays and objects
//for of loop access the values stored in index //can be used only with arrays