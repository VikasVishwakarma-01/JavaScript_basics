/**
 * reduce is a higher order function available for arrays
 * reduce also takes a function f as an parameter 
 * what reduce does it, it one by one goes to every element of the arrays
 * say curr element is arr
 * reduce will pass this element to the function, and accumulate the result of further function calls
 * with this particular result
 * 
 *  
 * */

let a = [1, 2, 3, 4, 5, 6];

function sum (presult, cval) {
    return presult + cval;
}

const result = a.reduce(sum);
console.log(result);

/**
 * 1 2
 * 3 3
 * 6 4
 * 10 5
 * 15 6
 * 21
 */

/**
 * cart -> [iphone-100000, case-500, tempered-200]
 * 
 */
