//javascript array forEach method

//forEach () method calls a function one time for each element of the array.

let tuts = [
  "charlie",
  "hugh",
  "Daniels",
  "Patience",
  "shane",
  "Leonard",
  "june",
  "freeman",
  "otis",
  "jarvis",
  "lane",
];

tuts.forEach(output); //output is a function which runs one time for each element of the array

function output(index, item, array) {
  console.log(item, index); //doubt - how do the function knows which passed element is index and other one is the element
  //doubt solved- the first parameter points to the element and second parameter points to the index..no matter the name
}

//use of anyonomous function
//convert to uppercase

tuts.forEach(function (tut, tusk, array) {
  //tut is each element , tusk is the index no and array is the entire array
  tut = tut.toUpperCase();
  console.log(tut);
});

tuts.forEach((item, index) => {
  console.log(item, index);
});
