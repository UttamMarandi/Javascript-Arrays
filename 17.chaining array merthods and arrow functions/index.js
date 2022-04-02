//Chaining array methods and Arrow functions

let people = [
  { id: 123, name: "Rick Deckard", email: "rick@bladerunner.org" },
  { id: 456, name: "Roy Batty", email: "roy@replicant.io" },
  { id: 789, name: "J.F. Sebastian", email: "j.f@tyler.com" },
  { id: 258, name: "Pris", email: "pris@replicant.io" },
];

//TWO STEP PPROCESS
//find all name whose email ends wih @replicant.io

let replicants = people.filter(function (person) {
  console.log(person.email); //returns all the email values

  if (person.email.indexOf("@replicant.io") > -1) {
    //indexOf searches for the text that is passed in it's parameter and returns the index at which the text is found. if text is not found it return -1
    console.log("person.email", person.email);
    console.log("person.email.indexOf", person.email.indexOf("@replicant.io"));
    return true;
  }
});

console.log("replicants", replicants);

//the problem with replicants is that it stores all the object whose email contains @replicant.io , but we need the "name" value of each object
let names = replicants.map(function (person) {
  return person.name;
});

console.log("list of names whose email contains @replicant.io", names);

//CHAIN PROCESS
//find all name whose email ends wih @replicant.io

console.log("using chain arrow methods");
let chainnames = people
  .filter(function (person) {
    return person.email.indexOf("@replicant.io") > -1; //if index found then true , which means person is passed as returned value, if index not found then false, so person is not passed.
    //Note:- it's not the value of the comparision that is passed but the person element is passed based on whether the comparision is true or false
  })
  .map(function (person) {
    return person.name;
  });
console.log(chainnames);

//USING ARROW FUNCTION //yet to be learned
let rn = people
  .filter((person) => person.email.indexOf("@replicant.io") > -1)
  .map((person) => person.name);

console.log("list of replicant names using arrow fuctions", rn);
