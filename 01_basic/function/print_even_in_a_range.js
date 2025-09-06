function isEven(num) {
    if(num % 2 == 0) {
        return true;
    }
    else false;
}

for(let i = 1; i <= 50; i++) {
    if(isEven(i)) {
        console.log(i);
    }
}

