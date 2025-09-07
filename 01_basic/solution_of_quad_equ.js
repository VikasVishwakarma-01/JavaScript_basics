let a = 2, b = 5, c = 3;

let d = b*b - 4*a*c;
if(d >= 0) {
    let x1 = (-b-Math.sqrt(d))/(2*a);
    let x2 = (-b+Math.sqrt(d))/(2*a);
    console.log(x1, x2);
}
else {
    console.log("No real root exits.");
}