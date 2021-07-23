//reduce() method in javascript
//reduce() method reduces all values in an array into a single result
//uses a callback function just like map, forEach, filter etc

//array.reduce(callback () , initial value )

//also has a second parameter which is initial value


//find sum of all the numbers

let numbers = [12,45,78,24]

let sum = numbers.reduce(function(passedIn , item){ //passedIn is the inital value that also act as "processing" variable and item is each element of the array
    console.log("adding" , passedIn, "to" , item);
    return passedIn + item
},0)

console.log("total is ",sum);


//find the first movie alphabetically
let movies = [ "The last samurai", "Edge of tomorrow","Mission Impossible", "Rain Man", "Collateral", "Top Gun", "Risky Business", "Tropic Thunder", "Last Mission"]

let firstMovie = movies.reduce(function(passedIn, item){

    console.log("comparing", passedIn, "to", item );

    return (passedIn < item) ? passedIn : item  // we check if the passedIn item is smaller than each element of array in terms of their ASCII valuse and return either passedIn or item based on it. if item is return , then it becomes the next "passedIn" element. 
},"\u005A") // \u0434 is unicode character is russian letter for D
// \u005A is unicode character for z

console.log("first movie", firstMovie);