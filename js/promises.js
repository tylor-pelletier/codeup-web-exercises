"use strict";

function wait(number) {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(number)) {
                resolve(console.log("You'll see this after " + (number / 1000) + " seconds"));
            } else {
                reject("Error");
            }
        }, number)
    })
}
wait(1000);
wait(3000);