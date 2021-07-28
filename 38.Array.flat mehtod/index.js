//Array flat method

let numbers = [
    1,
    2,
    [3, 4, 5],
    [6, 7],
    8,
    9,
    [
      [10, 11],
      [12, 13],
    ],
  ];

//Array.flat() method flattens the given nested array into a simple array
//given above is a numbers array, containinng two array of arrays i.e 1 level deep and one array which contains two more array i.e 2 levels deep

//by default array.flat removers 1 level deep arrays and make the content single values
//array.flat() takes numeric parameter depicting how many levels array should be flattened

let arr = numbers.flat()
console.log("array flat 1 level", arr);

//flatten 2 levels
let arr2 = numbers.flat(2)
console.log("array flat 2 level", arr2); //all array element converted into elements of one array