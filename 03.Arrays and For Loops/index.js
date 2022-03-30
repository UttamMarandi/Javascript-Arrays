//Arrays and for loops

let names = [
  "Uttam",
  "Tommy",
  "Mark",
  "Brown",
  "James Bond",
  "Mobius",
  "Skylark",
];
let lennames = names.length;
console.log("length of names", lennames);

//write out all items in names

console.log("log names forwards");
for (let i = 0; i < lennames; i++) {
  //for loop
  console.log(names[i]);
}
//iterate through each element of array

//write out all items in backwards

console.log("log names backwards");
for (let i = lennames - 1; i >= 0; i--) {
  console.log(names[i]);
}
