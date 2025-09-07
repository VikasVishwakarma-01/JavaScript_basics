let obj = {
    name: "vikas",
    age: 21
}

// for of loop to loop over obj
for(const entry of Object.entries(obj)) {
    console.log(entry);
}

// for in loop over obj

for(const keys in obj) {
    console.log(keys, obj[keys]);
}