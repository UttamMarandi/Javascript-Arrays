//For in Loops in JS

let monsters = {
    "Canada" : "Sasquatch" ,
    "Nepal" : "Yeti" ,
    "Scotland" : "Locj Ness Monster"
}

//There is no length property for object
console.log(monsters.length); //This code not works

//If there is no length property , then how do we loop through each element of an object like we did for arrays
//That's where for in loop comes 

for (let prop in monsters) {
    console.log(prop); //single label
    console.log(monsters[prop]); //value for the label
} 

//for in loops for array

let pets = ["woody" , "tommy" , "rocky"]

for(let pet in pets) {
    console.log(pet); //returns index
    console.log(pets[pet]); //returns value fot the index
}