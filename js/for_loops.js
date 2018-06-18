function showMultiplicationTable(a) {
    for (var i = 1; i <= 10; i += 1) {
        console.log(a + " x " + i + " = " + (a * i));
    }
}
showMultiplicationTable(7);

(function () {
    for (var i = 1; i <= 10; i += 1) {
        var a = Math.floor(Math.random() * 200) + 1;
        if (a % 2 === 0) {
            console.log(a + " is even");
        } else {
            console.log(a + " is odd");
        }
    }
}());

(function () {
    for (var i = 1; i <= 9; i += 1) {
        for (var j = 0; j < i ; j++) {
            console.log(i);
        }
    }
}());

(function () {
    for (var i = 100; i >= 5; i -= 5) {
        console.log(i)
    }
}());

// OR

// (function () {
//     for (var i = 104; i >= 5; i -= 1) {
//         console.log(i -= 4);
//     }
// }());