/**
 * 1. Js is sync in nature.
 * 2. JS is a single threaded language.
 * 
 * sync -> js will execute line by line even if single line takes a lot of time and move to the next line
 * 
 * java is multi threaded -> 
 * 
 * single threaded -> 
 */

// console.log("hi");
// setTimeout(function () { console.log("time done") }, 5000);
// console.log("by"); 


function timeConsumingByLoop() {
    console.log("Loop starts");
    for(let i = 0; i < 100000000; i++) {
        // some task
    }
    console.log("Loop ends");
}

function timeConsumingByRunTimeFeature() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("Completed the timer");
    }, 5000);

}

console.log("hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();

console.log("by"); 