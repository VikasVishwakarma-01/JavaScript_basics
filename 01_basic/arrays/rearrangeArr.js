let a = [1, 0, 0, 1, 1, 0, 1, 0, 0, 1];

let n = a.length
let i = 0, j = n-1;

while(i < j) {
    if(a[i] == 0) i++;
    if(a[j] == 1) j--;
    if(a[i] == 1 && a[j] == 0) {
        a[i] = 0;
        a[j] = 1;
        i++;
        j--;
    }
}
console.log(a);