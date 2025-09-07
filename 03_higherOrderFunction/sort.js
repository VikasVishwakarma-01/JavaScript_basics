let b = [1, 4, 6, 3, 7, 6, 9];

// increasing
b.sort(function (a, b) {
    return a - b;
});

console.log(b);

// decreasing
b.sort(function (a, b) {
    return b - a;
});

console.log(b);