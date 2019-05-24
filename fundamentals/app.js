//DOM
let h = document.getElementsByTagName('h1');
h[0].style.textAlign="center";
h[0].style.margin="40px";

//CHALLENGES

// 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one. 

  //OPTION 1
let user1 = { nome: "victor", idade: 34 };
let user2 = { nome: "victor", idade: 34 };

const objComparador = (user1 , user2) => {
  return JSON.stringify(user1) === JSON.stringify(user2) ? true : false;
}

//console.log(objComparador(user1, user2));

  //OPTION 2

const matches = (obj, source) =>
                                  //here checks for length    here for same key name
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches(user1, user2));

//
//------------------------
//

// 2. Write a JavaScript program to target a given value in a nested JSON object, based on the given key.
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const jsonRufus = (obj , target) => {
  //Brings back Values from Objs
  const stock = Object.values(obj);
  console.log(stock);
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return jsonRufus(val, target);
    }, undefined);
}

console.log(jsonRufus(data, 'level3'));
// console.log(jsonRufus(data, 'level4'));


//
//------------------------
//

// 3. Write a JavaScript program to converts a specified number to an array of digits.
const numToArr = str => [...`${str}`].map( n => parseInt(n));

console.log(numToArr(1234));

//
//------------------------
//

// 4. Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values.
const arrFilter = (arr , ...args) => arr.filter( values => args.every(ael => ael !== values));

const arrFilterII = (arr, ...args) => arr.filter(values => !args.includes(values));

const test = ['a', 'b', 'c', 'd', 'e'];

console.log(arrFilter(test, 'a'));
console.log(arrFilterII(test, 'a'));


// ---------------------------


// 5. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations. 
const combinator = args => args.reduce((acc, el) => [...acc , ...acc.map( v => [...v , el])], [[]] )

console.log(combinator(test));


// --------------------------


// 6. Write a JavaScript program to extract out the values at the specified indexes from an specified array.
const idxSearch = (arr, args) => args.map(el => arr[el]);

console.log(idxSearch(test, [0,3]));


//-----------------------------------


// 7. Write a JavaScript program to remove specified elements from the left of a given array of elements.
const left = (arr , n=1) => {
  return arr.slice(n);
}
console.log(left(test, 2));


//------------------------------------


// 8. Write a JavaScript program to remove specified elements from the right of a given array of elements. 
const right = (arr , n = 0) => {
  return arr.slice(-n)
}

console.log(right(test, 2));


//-------------------------------------


// 9. Write a JavaScript program to filter out the non-unique values in an array.
const filterUnique = arr => arr.filter(i => { 
  return arr.indexOf(i) === arr.lastIndexOf(i)
});

console.log(filter(['a', 'a', 'b', 'b', 'c']));


//---------------------------------------





