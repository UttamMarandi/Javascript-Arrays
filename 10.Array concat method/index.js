//Array concat method

//concat() method helps to combine multiple arrays

// 4 ways
// for loop
//for in loop
// for each loop
//a.concat(b) or [].concat(a,b)

let a = [2, 4, 6, 8];
let b = [1, 3, 5];

//combine using for loop

for (let i = 0; i < a.length; i++) {
  b.push(a[i]);
}
console.log("b outside for 1st", b);

//combine using for in loop

for (prop in a) {
  // prop represent the keys ... in this cases numbered indices
  b.push(a[prop]); //prop is index, a[prop] is value in that index
  console.log("b inside for", b);
}
console.log("b outside for 2nd", b);

//combine using forEach()

a.forEach(function (item) {
  b.push(item);
});
console.log("b after forEach", b);

//combine using concat() method

a = [2, 4, 6, 8];
b = [1, 3, 5];

let c = a.concat(b);
console.log("a after concat", a);
console.log("b after concat", b);
console.log("c after concat", c);

//alternate ways
a = [2, 4, 6, 8];
b = [1, 3, 5];

let d = [].concat(a, b);
console.log("d after concat", d);

console.log("a before concat", a);
console.log("b before concat", b);
console.log("c before concat", c);

let e = [].concat(b, a, c);
console.log("d+c", e);

//chain method use sort()
e = [].concat(b, a, c).sort();
console.log("sorted", e);
