//map() method for arrays

let names = ["Uttam", "Tommy", "Mark", "Brown", "James Bond", "Mobius", "Skylark"]



//syntax very similar to forEach method

//map() and forEach() are very similar to each other , they call a function single time for each element of the array.
//the main difference is in forEach we manipulate the original array, whereas in map() we only access the original array , modify it's data and always return an array . In this way original array is not affected
//map() can do all the functionalities of forEach()

//determine the length of each name and save it in a array

let newName = names.map(function(item,index,array){ //three parameter passed, a- sigle item , b - index of the item , c-entire array
    let length = item.length
    return length
})

console.log(newName);