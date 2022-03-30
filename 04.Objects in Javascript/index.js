//Objects in Javascript

//1.Arrays are numbered list but objects are "key" list
//object has label and values

let dog = {
  name: "tommy",
  type: "dog",
};

let cat = {
  name: "pussy",
  type: "cat",
};

console.log("Dog object", dog);
console.log("Cat Object", cat);

let pets = [dog, cat];
console.log("'array' pets storing dog and cat 'objects'", pets);

//2.push into objects

//a.using single object
let newPet = {
  name: "bob",
  type: "cat",
};

pets.push(newPet);
console.log("push using single object");
console.log(pets);

//b. using object literals

pets.push({ name: "dylane", type: "dog" });
console.log("push using object literals");
console.log(pets);

//3. access single object within array
console.log("access single object within array");
console.log(pets[2]);

//4. access a label of an object in array
console.log("access a label of an object in array");
console.log(pets[2].name); //use . operator

//5. add new label to objects
//a. using . operator
cat.age = 2; //use . operator
console.log("add new label to object using . operator");
console.log(cat);
//b. using object["label"] = value
console.log("add new label to object using ['label'] operator");
cat["breed"] = "Persian";
console.log(cat);

console.log("pets array", pets);

//6. add label to a object using array
console.log("add label to a object using array");
pets[1].hungry = true;
console.log(pets);
