//includes() method for arrays

//includes() method checks if the element is present in array or not
//return a boolear true if element is present
//includes can take two parameter: a.the element that needs to be searched b.the index from which we start the search

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

let hasMission = movies.includes("Mission");
console.log(hasMission);
//returns false ..as icludes() require the entire element to be equal not a part of it

let hasMissionM = movies.includes("Mission Impossible");
console.log(hasMissionM);
//returns true

let hasMissionS = movies.includes("Mission Impossible", 3);
console.log(hasMissionS);
//returns false as after index 3 there is no element that matches the passed string

let caseSensitive = movies.includes("mission Impossible");

console.log("check if includes() is caseSensitive", caseSensitive);

// includes() is case sensitive
