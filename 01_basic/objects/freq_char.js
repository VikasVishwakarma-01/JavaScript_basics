let str = "javascript";


let freq = {};
for(const [char] of str) {
    if(freq[char]) freq[char]++;
    else freq[char] = 1;
}

console.log(freq);