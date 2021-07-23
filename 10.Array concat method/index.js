//Array concat method

//concat() method helps to combine multiple arrays

let a = [2,4,6,8]
let b = [1,3,5]

//combine using for loop

for(let i=0; i<a.length; i++) {
   b.push(a[i])
   
}
console.log(b);

//combine using for in loop

for (prop in a){
    b.push(a[prop]) //prop is index, a[prop] is value in that index
    console.log(b);
}
console.log(b);

//combine using forEach()

a.forEach(function(item){
    b.push(item)
})
console.log(b);

//combine using concat() method

a = [2,4,6,8]
b = [1,3,5]

let c = a.concat(b)
console.log("c", c);

//alternate ways
a = [2,4,6,8]
b = [1,3,5]

let d = [].concat(a,b)
console.log("d", d);

let e = [].concat(a,b,c)
console.log("d+c" , e);

//chain method use sort()
e = [].concat(a,b,c).sort()
console.log("sorted" , e);