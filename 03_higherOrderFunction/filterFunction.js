/**
 * filter is also a higher order function
 * filter also loops over the arrays element
 * there is ne special thing about filter, i.e. the argument function which have to be pass inside filter should alwys return a boolen, otherwise output will be converted to boolean
 * 
 * filter loops over every element, passes that element in the argument function and then if the output of this function is true, then it will be stored in new array otherwise doesnt add this element to the array
 */

function even(x) {
    return (x % 2 == 0);
}
function odd(x) {
    return (x % 2 != 0);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let a = arr.filter(even);
let b = arr.filter(odd);

console.log(a);
console.log(b);

