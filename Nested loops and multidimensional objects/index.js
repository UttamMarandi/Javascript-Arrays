//Nested Loops and multidimensional Objects
//array inside of arrays , objects inside of arrays, arrays inside of objects

let twoD = [ //arrays inside an array
    [1,2,3,4,5,6,7,8],
    [8,10,5,7,3,22,6,42],
    [123,54,12,11,9,15]
]

//nested for loops
//loop through each element in twoD

let rows = twoD.length; //access length of twoD to get the no. of arrays inside twoD

for (let i = 0; i<rows; i++) {
    let items = twoD[i].length; //access length of each array inside of twoD
    console.log(twoD[i]);
    for (let k=0; k<items; k++) {
        console.log(twoD[i][k]); //for each i array access all the k elements
    }
   
}

//object inside an array which is inside an object
console.log("object inside an array which is inside an object");
let bigHero = { 
    characters : [
        {name : "Hiro", voice : "Ryan Potter"},
        {name : "baymax", voice : "Ryan Gosling", tense: "high"},
        {name : "Harry", voice : "Daniell Radcliff"},
        {name : "Tony", voice : "R.J Junior"}
    ]
}

let chars = bigHero.characters //access all object inside characters
//let chars = bigHero["characters"] //this will work too
console.log("length",bigHero.characters.length); //also chars.length

for (let i=0; i< bigHero.characters.length; i++) {
    console.log(bigHero.characters[i]); 

    for (item in bigHero.characters[i] ) { //use for in loops for objects, forEach loop for arrays
        console.log(item);
        console.log(bigHero.characters[i][item]);
    }
}

