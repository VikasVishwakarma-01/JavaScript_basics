let a = ["abc", "abc", 'c', 'd', 'd'];

let obj = {};

for(const str of a) {
    if(!(obj[str])) obj[str] = 1;
}
// iterate of using for in loop
for(const key in obj) {
    console.log(key);
}