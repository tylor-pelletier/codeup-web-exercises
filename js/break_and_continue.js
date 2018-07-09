"use strict";

var random = Math.floor(Math.random() * 50) + 1;
console.log("Random number to skip is: " + random);
for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === random) {
        console.log("Yikes! Skipping number: " + random);
    } else {
        console.log("Here is an odd number: " + i);
    }
    if (i > 49) {
        break;
    }
}