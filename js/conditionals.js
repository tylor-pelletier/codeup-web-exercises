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

(function startOver() {
    var enterANumber = confirm("Would you like to enter a number?");

    if (enterANumber === true) {
        var aNumber = prompt("Enter a number:");
        if (aNumber % 2 === 1) {
            alert("This number is odd.")
        } else if (aNumber % 2 === 0) {
            alert("This number is even.")
        } else {
            alert("I told you to enter a number...");
            startOver();
        }
        alert(aNumber + " + 100 = " + (parseInt(aNumber) + 100));
        if (aNumber >= 0) {
            alert("The number is positive.")
        } else if (aNumber < 0) {
            alert("The number is negative.")
        } else {
            alert("Should of entered a number like I said...")
        }
    } else if (enterANumber === false) {
        alert("I didn't want you to enter a number anyway...")
        startOver();
    }
}());


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

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
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

(function() {
    function analyzeColor(color) {
        if (color === 'red') {
            console.log("Stop signs are red")
        } else if (color === 'orange') {
            console.log("Carrots are orange")
        } else if (color === 'yellow') {
            console.log("Bees are yellow")
        } else if (color === 'green') {
            console.log("Grass is green")
        } else if (color === 'blue') {
            console.log("The ocean is blue")
        } else {
            console.log("I don't know anything about the color " + color)
        }
    }

    analyzeColor(randomColor);
}());

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

(function() {
    switch (randomColor) {
        case 'red':
            console.log("Stop signs are red");
            break;
        case 'orange':
            console.log("Carrots are orange");
            break;
        case 'yellow':
            console.log("Bees are yellow");
            break;
        case 'green':
            console.log("Grass is green");
            break;
        case 'blue':
            console.log("The ocean is blue");
            break;
        default:
            console.log("I don't know anything about the color " + randomColor)
    }
}());

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
(function() {

    function analyzeColor(color) {
        if (color === 'red') {
            alert("Stop signs are red")
        } else if (color === 'orange') {
            alert("Carrots are orange")
        } else if (color === 'yellow') {
            alert("Bees are yellow")
        } else if (color === 'green') {
            alert("Grass is green")
        } else if (color === 'blue') {
            alert("The ocean is blue")
        } else {
            alert("I don't know anything about the color " + color)
        }
    }

    analyzeColor(prompt("Pick a color"));
}());

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

(function () {
    var originalTotal = prompt("How much is your total before discount?");
    var luckyNumber = Math.floor(Math.random() * 6);
    if (luckyNumber === 0) {
        var discount = 0;
    } else if (luckyNumber === 1) {
        var discount = .10;
    } else if (luckyNumber === 2) {
        var discount = .25;
    } else if (luckyNumber === 3) {
        var discount = .35;
    } else if (luckyNumber === 4) {
        var discount = .50;
    } else if (luckyNumber === 5) {
        var discount = 1;
    }

    var totalOff = discount * originalTotal;

    function calculateTotal(originalPrice, discountOff) {
        var total = (originalPrice - discountOff);
        return total;
    }
    alert("Your total is $" + originalTotal + " before the discount.");
    alert("Your lucky number is " + luckyNumber + "!");
    alert("Your total is now $" + calculateTotal(originalTotal, totalOff) + "!");
    console.log(luckyNumber);
    console.log(calculateTotal(originalTotal, totalOff));
}());

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
