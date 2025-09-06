function isPrime(x) {
    for(let i = 2; i <= x-1; i++) {
        if(x % i == 0) return false;
    }
    return true;
}

let n = 2;
console.log(isPrime(n));


