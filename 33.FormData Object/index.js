//Form Data Object in javascript
//Form data was created to bundle data to send it to the server
//it contains key value pair and can also contain a file
//form data is similar to array of arrays

//creating form data
let myData = new FormData()

myData.append("name", "Uttam"); //adding content to myData
myData.append("id",123) 
myData.append("Date", Date.now())

console.log("myData formdata", myData); //returns only formdata type but no content
console.log("Mydata converted to array", Array.from(myData)); //returns the content too, as it is converted to array
//Array.from() can take formdata as parameter b.c formdata is an iterable data type

//use of for of loop
for(prop of myData) {
    console.log("mydata content using for of", prop); //for of works b.c formdata is iterable
}

//Steve's code
document.addEventListener('DOMContentLoaded', () => {
    let fd = new FormData();
    fd.append('name', 'Bubba');
    fd.append('id', 1234);
    fd.append('created_dt', Date.now());

    console.log(Array.from(fd));

    for (let obj of fd) {
        console.log(obj)
    }

    document.querySelector('#output pre').textContent = JSON.stringify(Array.from(fd), '\t', 2);

    //code to send data to the sever

    // let url = 'http://www.example.com/';
    // let req = new Request({
    //     url: url,
    //     body: fd
    // })
    // fetch(req)
    // .then(response => response.json() )
    // .then( data => {})
    // .catch( err => {})

});
