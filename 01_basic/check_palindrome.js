function checkPalindrome(num) {

    let str = "" + num;
    let n = str.length;

    for(let i = 0; i < n/2; i++) {
        if(str[i] != str[n-i-1]) return false;
    }


    return true;
}

let n = 434;
console.log(checkPalindrome(n));
