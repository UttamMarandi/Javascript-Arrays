//Custom array sorts in Javascript

//Array custom sort() function

//sort the data
//STRINGS

let movies = [
  "Star Wars",
  "Star Trek",
  "Jaws",
  "Jurassic Park",
  "Gross Pointe Blank",
  "Eternal Sunshine of the Spotless Mind",
  "Memento",
  "Dog Soldiers",
  "The Host",
  "Gran Torino",
  "Close Encounters of the Third Kind",
  "Good Will Hunting",
  "Layer Cake",
  "Casino Royale",
  "Almost Famous",
];

let sortMovies = movies.sort();
console.log(sortMovies); //works great

//NUMBERS
let numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283];

let sortNum = numbers.sort();
console.log("sorted sortNum", sortNum);
//the problem with sorting numbers is that they get sorted based on their first digit value. so value with 1 in their first digit get listed first , then 2 and so on.
//why? - it's because sort() by default converts the numbers to strings and then sorts

//that's where custom sort jumops in..custom sort is like an extension of sort() that takes anyonyomous function as parameter which in turn takes the array values for comparision
//it returns three values 1, -1 and 0

// sort method can take a synonyomous function as parameter.

let sortedNum = numbers.sort(function (a, b) {
  //here a,b are not converted to strings. the actual numerical value is passed\
  console.log("sorting", a, b);
  if (a > b) {
    return 1;
  } else if (a < b) return -1; //one line if , so curly braces can be omitted
  else return 0;
});

console.log(sortedNum); //numerically sorted array

//OBJECTS

//sort the object based on "name" label

let people = [
  { id: 123, name: "Rick Deckard", email: "rick@bladerunner.org" },
  { id: 456, name: "Roy Batty", email: "roy@replicant.io" },
  { id: 789, name: "J.F. Sebastian", email: "j.f@tyler.com" },
  { id: 258, name: "Pris", email: "pris@replicant.io" },
];
console.log("unsorted people", people);

console.log("using default sort()", people.sort());
//defaul sort() can't sort the objects
//we need to use custom sort() method

let sortPeople = people.sort(function (a, b) {
  //a,b represents single object within the array
  if (a.name > b.name)
    return 1; //a.name because we are sorting based on name label
  else if (b.name > a.name) return -1;
  else return 0;
});

console.log("using custom sort()", sortPeople);

//Note:- if you check console after sorting the object , the unsorted object will also render as sorted b.c both are reference to the same object

//sort the object based on "id" label

people = [
  { id: 123, name: "Rick Deckard", email: "rick@bladerunner.org" },
  { id: 456, name: "Roy Batty", email: "roy@replicant.io" },
  { id: 789, name: "J.F. Sebastian", email: "j.f@tyler.com" },
  { id: 258, name: "Pris", email: "pris@replicant.io" },
];

let sortPeoplebyId = people.sort(function (a, b) {
  //a,b represents single object within the array
  if (a.id > b.id) return 1; //a.name because we are sorting based on name label
  else if (a.id < b.id) return -1;
  else return 0;
});

console.log("sort people by id", sortPeoplebyId);
