let a = 1242;

let sum = 0;
while(a > 0) {
    let digit = a % 10;
    sum += digit;
    a = Math.floor(a/10);
}

console.log(sum);

// function Math.floor()
// 6.3---6
// 7-----7