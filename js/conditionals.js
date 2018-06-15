"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

(function () {
    var enterANumber = confirm("Would you like to enter a number?");

    if (enterANumber) {

        var aNumber = prompt("Enter a number:");

        if (!isNaN(aNumber) && aNumber !== true && aNumber !== false) {

            if (aNumber % 2 !== 0) {
                alert("This number is odd.")
            } else if (aNumber % 2 === 0) {
                alert("This number is even.")
            }

            alert(aNumber + " + 100 = " + (parseFloat(aNumber) + 100));

            if (aNumber >= 0) {
                alert("The number is positive.")
            } else if (aNumber < 0) {
                alert("The number is negative.")
            }

        } else {
            alert("That's not a number...")
        }

    } else {
        alert("Well fine then...");
    }
}());

(function () {

    function confirmEnterANumber() {
        confirm("Would you like to enter a number?") ? enterANumber() : alert("Well fine then...");
    }

    function enterANumber() {
        var aNumber = prompt("Enter a number:");
        (!isNaN(aNumber) && aNumber !== true && aNumber !== false) ? threeTests() : alert("That's not a number...");
        function threeTests() {
            aNumber % 2 !== 0 ? alert("This number is odd.") : alert("This number is even.");
            alert(aNumber + " + 100 = " + (parseFloat(aNumber) + 100));
            aNumber >= 0 ? alert("The number is positive.") : alert("The number is negative.");
        }
    }

    confirmEnterANumber();

}());

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color) {
    if (color === 'red') {
        return "Stop signs are " + color;
    } else if (color === 'orange') {
        return "Carrots are " + color;
    } else if (color === 'yellow') {
        return "Bees are " + color;
    } else if (color === 'green') {
        return "Grass is " + color;
    } else if (color === 'blue') {
        return "The ocean is " + color;
    } else {
        return "I don't know anything about the color " + color;
    }
}
console.log(analyzeColor('red'));
console.log(analyzeColor('orange'));
console.log(analyzeColor('yellow'));
console.log(analyzeColor('green'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('indigo'));
console.log(analyzeColor('violet'));
console.log(analyzeColor('cyan'));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(color) {
    switch (randomColor) {
        case 'red':
            return "Stop signs are " + color;
        case 'orange':
            return "Carrots are " + color;
        case 'yellow':
            return "Bees are " + color;
        case 'green':
            return "Grass is " + color;
        case 'blue':
            return "The ocean is " + color;
        default:
            return "I don't know anything about the color " + randomColor;
    }
}
console.log(analyzeColorSwitch(randomColor));

// CREATE A VARIABLE TO ALLOW TO SET UP FOR BREAKS

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

alert(analyzeColor(prompt("Pick a color")));

// STEPS ARE DONE LIKE THIS:

// var userColor = prompt("Pick a color");
// var result = analyzeColor(userColor);
// alert(result);

// FULL PROBLEM

// function analyzeColorSwitch(color) {
//     var message;
//     switch (randomColor) {
//         case 'red':
//             message = "Stop signs are " + color;
//             break;
//         case 'orange':
//             message = "Carrots are " + color;
//             break;
//         case 'yellow':
//             message = "Bees are " + color;
//             break;
//         case 'green':
//             message = "Grass is " + color;
//             break;
//         case 'blue':
//             message = "The ocean is " + color;
//             break;
//         default:
//             message = "I don't know anything about the color " + randomColor;
//     }
//
//     return message;
// }
// console.log(analyzeColorSwitch(randomColor));

// (function() {
//     function analyzeColor(color) {
//         if (color === 'red') {
//             return alert("Stop signs are red");
//         } else if (color === 'orange') {
//             return alert("Carrots are orange");
//         } else if (color === 'yellow') {
//             return alert("Bees are yellow");
//         } else if (color === 'green') {
//             return alert("Grass is green");
//         } else if (color === 'blue') {
//             return alert("The ocean is blue");
//         } else {
//             return alert("I don't know anything about the color " + color);
//         }
//     }
//     analyzeColor(prompt("Pick a color"));
// }());


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

(function () {
    var originalTotal = prompt("How much is your total before discount?");
    var luckyNumber = Math.floor(Math.random() * 6);
    if (luckyNumber === 0) {
        var discount = 0;
    } else if (luckyNumber === 1) {
            discount = .10;
    } else if (luckyNumber === 2) {
            discount = .25;
    } else if (luckyNumber === 3) {
            discount = .35;
    } else if (luckyNumber === 4) {
            discount = .50;
    } else if (luckyNumber === 5) {
            discount = 1;
    }

    var totalOff = discount * originalTotal;

    function calculateTotal(originalPrice, discountOff) {
        var total = (originalPrice - discountOff);
        return total.toFixed(2);
    }
    alert("Your lucky number is " + luckyNumber + "!");
    alert("Your price was $" + originalTotal + " before the discount.");
    alert("Your new price is $" + calculateTotal(originalTotal, totalOff) + " after the discount!");
    console.log(luckyNumber);
    console.log(calculateTotal(originalTotal, totalOff));
}());


// TEN FUNCTIONS EXTRA EXERCISE

// function isTrue(input) {
//     if (input === true) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// isTrue(true);
//
// function isFalse(input) {
//     if (input === false) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// isFalse(false);
//
// function not(input) {
//     if (input === true) {
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// }
// not(1);
//
// function addOne(input) {
//     return parseInt(input) + 1;
// }
// console.log(addOne(5));
//
// function isEven(input) {
//     if (input % 2 === 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// isEven(4);
//
// function isIdentical(input1, input2) {
//     if (input1 === input2) {
//         console.log(true)
//     } else {
//         console.log(false)
//         }
//     }
//     isIdentical("1", "1");
//
// function isEqual(input1, input2) {
//     if (input1 == input2) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
//     }
//     isEqual("1", 1);
// function or(input1, input2) {
//     if ((input1 || input2) === true) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
//     }
//     or(true, 0);
// function and(input1, input2) {
//     if ((input1 && input2) === true) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
//     }
//     and(0, 1);
// function concat(input1, input2) {
//     console.log(input1 + input2)
// }
// concat("Hello, ", "Tylor");