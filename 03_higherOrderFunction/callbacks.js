/**
 * 
 * fun -> hof it takes fn
 * x -> no
 * fn -> function
 */
function fun(x, fn) {
    for(let i = 0; i < x; i++) {
        console.log(1);
    }
    fn();
}

fun(10, function exe() { // callback
    console.log("I am executes also");
});

setTimeout(function exec() {
    console.log("Running after somtime");
}, 400);

