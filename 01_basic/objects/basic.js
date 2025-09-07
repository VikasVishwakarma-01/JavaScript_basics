// obj --- key, value pair


// create
let x = {
    name:"Vikas",
    age: 21
}

let y = {
    name:"Shivam",
    age: 21
}

// access 
console.log(x["name"]);
console.log(x.name);
console.log(y["name"]);
console.log(y.name);

// obj is mutable

// add new property

x.marks = 100;
y.marks = 90;

// x["marks"] = 100 ----
console.log(x);

// delete a key value pair

delete x.marks; 
console.log(x);

// Object.keys array of keys
// Object.values---array of values
// Object.entries array of arrays

 

