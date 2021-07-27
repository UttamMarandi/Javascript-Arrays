//Sorting complex objects in javascript

const people = [
    { id: 12, name: 'Billy', dob: '1998-10-05' },
    { id: 123, name: 'Bart', dob: '1993-02-15' },
    { id: 45, name: 'Belinda', dob: '1996-01-31' },
    { id: 67, name: 'Bonnie', dob: '1998-04-09' },
    { id: 89, name: 'Brenda', dob: '1996-07-08' },
    { id: 34, name: 'Bobby', dob: '1994-09-12' },
    { id: 234, name: 'Blake', dob: '2000-01-01' },
  ];

  console.log("use built-in sort on people", people.sort());
//nothing changes on people.sort() as people is an array of objects hence not iterable

//create custom sort to sort people by name
//sort() method can take function as parameter and we can define that function to sort our object in preferred way

function byName(a,b){ //a & b are objects inside array
    if (a.name > b.name){
        return 1
    }
    else if (b.name > a.name) {
        return -1
    }
    else {
        return 0
    }
}

console.log("sort people by name", people.sort(byName));
//logs all objects in array sorted alphabetically by name

//create custom sort to sort people by id i.e numeric value
function byId(a,b) {
    return parseInt(a.id) - parseInt(b.id) //we use parseInt so that if id is string we convert it to number first.
    //subtraction because then we return either postive , negative or zero values which makes the sort() work
}

console.log("sort people by Id", people.sort(byId));


//create custom sort to sort people byDate i.e the people happened first logged first
let mDate = new Date('1996-01-31').valueOf() //.valueOf() gives the timestamps of that date
let tDate = new Date().valueOf()
console.log("date in 1996",mDate);
console.log("date today", tDate);


function byDate(a,b){
    //sort chronologically by year, than month and than day
    return new Date(a.dob).valueOf() - new Date(b.dob).valueOf() //subtracting timestams
    //subtraction because then we return either postive , negative or zero values which makes the sort() work
}

console.log("sort people by dob", people.sort(byDate));


//diffrence between getMonth() & getUTCMonth()
//getMonth() , getDate() returns date in local time ,meaning time + GMT
//so getMonth and getDate are not consistent for comparision as time varies based on region
//that's why we use getUTCMonth() getUTCDate()

let month = new Date().getMonth()
console.log("Local month",month );

let UTCmonth = new Date().getUTCMonth()
console.log("UTC Month", UTCmonth);

//sort people by birthday

function byBirthday(a,b) {
    //sort by birthMonth
    let d1 = new Date(a.dob) //in order to access Date functions we have to instantiate a.dob using new 
    let d2 = new Date(b.dob)

    if(d1.getUTCMonth() > d2.getUTCMonth()){
        return 1
    }
    else if(d2.getUTCMonth() > d1.getUTCMonth()){
        return -1
    }
    else {
        return d1.getUTCDate() - d2.getUTCDate()
    }
}

console.log("sort by birthMont", people.sort(byBirthday));

