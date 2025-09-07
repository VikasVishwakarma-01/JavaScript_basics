// arrays are objects---> where index is key 
// and elements are values

// map fuction
// map is a higher order functiion available with arrays
// it takes fuction as aurgument-> F
// it return an array
// function f with original array elenement as argument
// map internally iterates/ loops over every element of the given original array pass that element in the argument function f and then store the retured value inside an array

function square(el) {
    return el*el;
}

function cube(el) {
    return el*el*el;
}

function isOddOrEven(x) {
    if(x % 2 == 0) return "Even";
    else return "Odd";
}

const arr = [1, 2, 3, 4, 5];

const result = arr.map(square);
const result2 = arr.map(cube);
const result3 = arr.map(isOddOrEven);


console.log(result);
console.log(result2);
console.log(result3);

/**
 * when to use maps ?
 * in any situation when we have to do an operation on every element of the array and the result of each operation is to be stored
 * map can be a good option
 * for example :
 * array oof products
 * 
 */

const newArr = [9, 8, 7, 6, 5];


