let x = 2, y = 4, z = 3;

if(x == y && y == z) {
    console.log("Equilateral triangle.");
}
else {
    if((x + y) > z && (y + z) > x && (z + x) > y){
        if(x == y || y == z || z == x) {
            console.log("Isosceles triangle.");
        }
        else {
            console.log("Scalene triangle.");
        }
    }
    else {
        console.log("Not a triangle.");
    }
}