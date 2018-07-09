"use strict";

(function () {
    var i = 1;

    while (i < 65536) {
        i *= 2;
        console.log(i);
    }
}());

(function () {
    var i = 0;
    var totalCones = Math.floor(Math.random() * 50) + 50;
    console.log("At the start of the day I have " + totalCones + " cones");

    do {
        var shouldISellMore = Math.floor(Math.random() * 5) + 1;
        i += 1;

        if (shouldISellMore <= totalCones) {
            if (shouldISellMore === 1) {
                console.log("I sold " + shouldISellMore + " cone to customer number: " + i);
            } else {
                console.log("I sold " + shouldISellMore + " cones to customer number: " + i);
            }
            console.log("I have " + (totalCones -= shouldISellMore) + " cones left");
        } else if (totalCones === 0) {
            console.log("I have sold all my cones")
        } else {
            console.log("I don't have enough cones to sell to this customer")
        }

    } while (totalCones !== 0);
}());