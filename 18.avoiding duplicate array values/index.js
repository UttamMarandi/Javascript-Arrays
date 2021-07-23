//Avoiding duplicate array values
//1.removing duplicate values from the array
//2. generating an array without duplicates


//STRING
let names = ["John" , "Paul", "Uttam", "Hennesy"]


// render names in random order
console.log("render names in random order");
for(let i=0; i< names.length; i++){
    let rn = Math.floor(Math.random()*names.length)
    console.log(names[rn]);
}
//we are getting the same name multiple times
//what we want is to get the names in random order without duplicates

console.log("get the names in random order without duplicates");


for (let i=0,tempNames = names; i< names.length; i++) { //we can define multiple variable in for loops
    let rn = Math.floor(Math.random()*tempNames.length) //generates random no. between 0 & 3
    console.log(names.length);
    console.log(tempNames[rn]);
    tempNames.splice(rn,1)
}

//so i ran into a problem with the above code. we are not actually copying "names" array to "tempNames" while doing tempNames = names;
//we are actually creating a reference/alias name of the same array. so any changes made to tempNames will affect the names array.
//Everything is copied by reference except primitive data types (strings and numbers IIRC).
//solution :- we need to actually copy instead of pass by reference. there are many ways ,, I will be using Array.from()

console.log("2nd attempt");

names = ["John" , "Paul", "Uttam", "Hennesy"]
let tempN = Array.from(names) //from(arrayname) is a method of Array object that copies one array to the array.


for(let i=0; i<names.length; i++) {
    let rn = Math.floor(Math.random() * tempN.length)
    console.log(tempN[rn]);
    tempN.splice(rn,1)
}


//NUMBERS
//given 8 values in array , add 8 more random values and make sure that non of them duplicates
console.log("given 8 values in array , add 8 more random values and make sure that non of them duplicates");
let nums = [23,45,74,85,12,90,45,89]

//generate random values between a range let's say 50 & 100

let max= 100
let min = 50
let range = max-min
 
for (let i=0; i<9; i++){ // 0 to 9 b.c we need 8 digits
    let rnd = Math.floor(Math.random() * range) + min //geneeates random number between 50 and 100
    console.log(rnd);
    nums.push(rnd)
}
console.log(nums);

//the above method do get duplicates
//we dont need that

//another logic using includes() and while()
console.log("using while() and includes()");
nums = [23,45,74,85,12,90,45,89]
console.log(nums);

while (nums.length < 16) { //nums length after adding 8 values will become 16
    let rnd = Math.floor(Math.random() * range) + min //geneeates random number between 50 and 100
    if(!nums.includes(rnd)) { //if rnd is not present in num push the number
        
        nums.push(rnd)
    }
    else {
        console.log("skipped");
    }
}
console.log(nums);

//another logic using includes() and for()
console.log("using for() and includes()");
nums = [23,45,74,85,12,90,45,89]

for(i=nums.length; i<16; i++){
    let rnd = Math.floor(Math.random() * range) + min //geneeates random number between 50 and 100
    if(!nums.includes(rnd)) { //if rnd is not present in num push the number
        
        nums.push(rnd)
    }
    else {
        console.log("skipped");
    }
}
console.log(nums);