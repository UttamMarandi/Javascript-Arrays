//some() method for arrays
//Array some()
//functional approach like map, filter and forEach
//returns Boolean when first match is found
//the some() method runs one time for each element of the array, and stop when finds the element
// the function inside some () can take three paramenters : a.each element of array b.index of element c.array itself

let movies = [
  "The last samurai",
  "Edge of tomorrow",
  "Mission Impossible",
  "Rain Man",
  "Collateral",
  "Top Gun",
  "Risky Business",
  "Tropic Thunder",
  "Last Mission",
];

let keyword1 = "Mission"; //appears more than once
let keyword2 = "Rain"; //appears once
let keyword3 = "Dead"; //appears none

let test1 = movies.some(function (name, index, array) {
  console.log("test 1");
  console.log(name, index);

  return true; //it returns The last samurai 0 , as soon as the some() finds true it stops and returns all the element iterated through
  //   returns 2 values , the element and the index of the found element
});
console.log("test 2");
let test2 = movies.some(function (name, index, array) {
  console.log(name, index);
  return false; //it returns the entire array as it never becomes true for any element of the array.
});

//check if keyword1 is present in array

console.log("test 3");
let test3 = movies.some(function (name, index) {
  console.log(name, index);
  return name.indexOf(keyword1) > -1;
  //indexOf(item) searches for item and returns the index on which the item is found. return -1 f item is not found. so it will return true if item is found and return false if item is not found
});
//movie name and index are logged out till the point where "mission" is found

console.log("test 4");

let test4 = movies.some(function (name, index) {
  console.log(name, index);
  return name.indexOf(keyword2) > -1;
  //loggs name & index until keyword2 is found
});

console.log("test 5");

let test5 = movies.some(function (name, index) {
  console.log(name, index);
  return name.indexOf(keyword3) > -1;
  //loggs al name & index as keyword3 is not present in array
});
