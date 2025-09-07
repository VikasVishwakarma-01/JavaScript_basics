let a = 10, b = 5;
let ans = 1;

for(let i = 2; i <= Math.min(a, b); i++) {
    if(a % i == 0 && b % i == 0) ans = i;
}
console.log(ans);

// for two prime no gcd is always 1

// Approach 2

let x = 105, y = 36;

let r = Math.max(x, y) % Math.min(x, y);
let result = Math.min(x, y);
while(r > 0) {
    x = Math.min(x, y);
    y = r;
    r = Math.max(x, y) % Math.min(x, y);
    result = Math.min(x, y);
}
console.log(result);

