//Array.flatMap() Method

//Understanding Array.prototype.flatMap()
//   myArray.map().flat(1) - equivalent

//.flatMap() like .flat() is useful to convert objects with strings, array of objects to convert into a single list of strings

let movies = [
    'Dog Soldiers',//string
    ['In Bruges', 'From Paris with Love', 'Layer Cake'], //array of strings
    'The Big Lebowski',
    '', //empty
    '    ', //string with spaces only
    'Memento, The Platform,Fight Club, ', //string separated by commas
    'Hotel Rwanda, Moon, Under the Skin',
    'Lady Bird',
    ['Platoon', 'Wall-E'],
  ];
 
  let arr = movies.flatMap(function(entry){
      if(Array.isArray(entry)){ //is entry is array than return the array
          return entry 
      }
  })

  console.log("flatMap() only checking if entry is an array", arr);

  //above logs all the strings within array in single list and rest undefined. We have two array within the movies array and the strings within that two strings are converted into single list item of movies array, rest undefined

  //deal with empty values
  
  let arr2 = movies.flatMap(function(entry){
    if(Array.isArray(entry)){ //is entry is array than return the array
        return entry 
    }
    else if (typeof entry === "string" && entry.trim() === ""){ //if the entry is of string type and on .trim we get empty values , return an empty array
        return [] //we return empty array b.c .flatMap() will return undefined for empty values. We are not filtering rather mapping. so we need to specify empty array in order to not get empty values
    }
    else{
        return entry.split(",") ////any other string is splitted separated by commas
        .map(function(txt){
            txt.trim() //this is to remove extra spaces before and after strings
            return txt //
        })
        .filter((txt) => txt != ' ');
    }
})

console.log("flatMap() checking if entry is an array and whether it is empty", arr2);
//all the empty 

//these are custom ways to list complex nested data into a simple list of strings