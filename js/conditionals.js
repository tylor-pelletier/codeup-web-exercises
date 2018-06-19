"use strict";

// Bonus 1
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case

function dayOfTheWeek() {
    var favoriteDay = prompt("What is your favorite day of the week?");
    if (favoriteDay === "Sunday") {
        alert("Sunday is a day for resting");
    } else if (favoriteDay === "Monday") {
        alert("Monday is the start of the work week");
    } else if (favoriteDay === "Tuesday") {
        alert("Tuesday is a day class gets out early");
    } else if (favoriteDay === "Wednesday") {
        alert("Wednesday is half way through the week");
    } else if (favoriteDay === "Thursday") {
        alert("Thursday is the day lunch is longer in class");
    } else if (favoriteDay === "Friday") {
        alert("Friday is the end of the work week")
    } else if (favoriteDay === "Saturday") {
        alert("Saturday is a day to have fun");
    } else {
        alert("That is not a valid input");
        dayOfTheWeek();
    }
}
dayOfTheWeek();

function anotherDayOfTheWeek() {
    var anotherFavoriteDay = prompt("What is your favorite day of the week?");
    switch (anotherFavoriteDay) {
        case "Sunday":
            alert("Sunday is a day for resting");
            break;
        case "Monday":
            alert("Monday is the start of the work week");
            break;
        case "Tuesday":
            alert("Tuesday is a day class gets out early");
            break;
        case "Wednesday":
            alert("Wednesday is half way through the week");
            break;
        case "Thursday":
            alert("Thursday is the day lunch is longer in class");
            break;
        case "Friday":
            alert("Friday is the end of the work week");
            break;
        case "Saturday":
            alert("Saturday is a day to have fun");
            break;
        default:
            alert("That's not a valid input");
            anotherDayOfTheWeek();
    }
}
anotherDayOfTheWeek();

//     Bonus 2
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
// - refactor to use a ternary operator

function isANumberOrNot() {
    var userInput = prompt("Enter a value and I will tell you if it is a number or not:");
    if (!isNaN(userInput) === true) {
        alert("That is a number!");
    } else {
        alert("That is not a number.");
    }
}
isANumberOrNot();

// Bonus 3
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter).
// The function then alerts the months available in that season and then asks the user to pick a given month.
// After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months

function seasons() {
    var favoriteSeason = prompt("What is your favorite season?");
    favoriteSeason = favoriteSeason.toLowerCase();
    if (favoriteSeason === "spring") {
        alert("March, April and May are in Spring");
        var selectAMonthForSpring = prompt("Select one of those months");
        selectAMonthForSpring = selectAMonthForSpring.toLowerCase();
        if (selectAMonthForSpring === "march") {
            alert("St. Patrick's Day is in March!");
        } else if (selectAMonthForSpring === "april") {
            alert("Easter is in April!");
        } else if (selectAMonthForSpring === "may") {
            alert("Cinco de Mayo is in May!");
        } else {
            alert("That is not a valid input");
            seasons();
        }
    } else if (favoriteSeason === "summer") {
        alert("June, July and August are in Spring");
        var selectAMonthForSummer = prompt("Select one of those months");
        selectAMonthForSummer = selectAMonthForSummer.toLowerCase();
        if (selectAMonthForSummer === "june") {
            alert("Father's Day is in June!");
        } else if (selectAMonthForSummer === "july") {
            alert("Independence Day is in July!");
        } else if (selectAMonthForSummer === "august") {
            alert("There are no major holidays in August :(");
        } else {
            alert("That is not a valid input");
            seasons();
        }
    } else if (favoriteSeason === "fall") {
        alert("September, October and November are in Fall");
        var selectAMonthForFall = prompt("Select one of those months");
        selectAMonthForFall = selectAMonthForFall.toLowerCase();
        if (selectAMonthForFall === "september") {
            alert("Labor Day is in September!");
        } else if (selectAMonthForFall === "october") {
            alert("Halloween is in October!");
        } else if (selectAMonthForFall === "november") {
            alert("Thanksgiving is in November!");
        } else {
            alert("That is not a valid input");
            seasons();
        }
    } else if (favoriteSeason === "winter") {
        alert("December, January and February are in Winter");
        var selectAMonthForWinter = prompt("Select one of those months");
        selectAMonthForWinter = selectAMonthForWinter.toLowerCase();
        if (selectAMonthForWinter === "december") {
            alert("Christmas is in December!");
        } else if (selectAMonthForWinter === "january") {
            alert("Martin Luther King Jr Day is in January!");
        } else if (selectAMonthForWinter === "february") {
            alert("Valentine's Day in February!");
        } else {
            alert("That is not a valid input");
            seasons();
        }
    } else {
        alert("That is not a valid input, try again");
        seasons();
    }
}
seasons();

// GOLD STAR BONUS
// Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.

//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units

function inchesToFeet(inches) {
    return console.log(inches / 12);
}

function inchesToYards(inches) {
    return console.log((inches / 12) / 3);
}

function inchesToCentimeters(inches) {
    return console.log(inches * 0.39370);
}

function inchesToMeters(inches) {
    return console.log((inches * 0.0254);
}

function feetToInches(feet) {
    return console.log(feet * 12);
}

function feetToYards(feet) {
    return console.log(feet / 3);
}

function feetToCentimeters(feet) {
    return console.log(feet * 30.48);
}

function feetToMeters(feet) {
    return console.log(feet * 0.304878);
}

function yardsToInches(yards) {
    return console.log((yards * 3) * 12);
}

function yardsToFeet(yards) {
    return console.log(yards * 3);
}

function yardsToCentimeters(yards) {
    return console.log(yards * 91.44);
}

function yardsToMeters(yards) {
    return console.log(yards * 1.0936);
}

function centimetersToInches(centimeters) {
    return console.log(centimeters / 0.39370);
}

function centimetersToFeet(centimeters) {
    return console.log(centimeters / 30.48);
}

function centimetersToYards(centimeters) {
    return console.log(centimeters / 91.44);
}

function centimetersToMeters(centimeters) {
    return console.log(centimeters * 100);
}

function metersToInches(meters) {
    return console.log(meters / 0.0254);
}

function metersToFeet(meters) {
    return console.log(meters / 0.304878);
}

function metersToYards(meters) {
    return console.log(meters / 1.0936);
}

function metersToCentimeters(meters) {
    return console.log(meters / 100);
}



function unitConversionApp() {
    var unitOfMeasurement = prompt("Enter a unit of measurement: inches, feet, yards");
    unitOfMeasurement = unitOfMeasurement.toLowerCase();
    switch (unitOfMeasurement) {
        case "inches":
            var enterAValue = prompt("Enter a value:");
            switch (!isNaN(enterAValue)) {
                case true:
                    var anotherUnitOfMeasurement = prompt("Enter a unit of measurement to convert to: inches, feet, yards, centimeters and meters");
                    switch (anotherUnitOfMeasurement) {
                        case "feet":
                            console.log(inchesToFeet(enterAValue));
                            break;
                        case "yards":
                            console.log(inchesToYards(enterAValue));
                            break;
                        case "centimeters":
                            console.log(inchesToCentimeters(enterAValue));
                            break;
                        case "meters":
                            console.log(inchesToMeters(enterAValue));
                            break;
                        default:
                            alert("That was an invalid input");
                            unitConversionApp();
                    }
                    break;
                case false:
                    alert("That was an invalid input");
                    unitConversionApp();
                    break;
            }
            break;

        case "feet":
            var enterAValue = prompt("Enter a value:");
            switch (!isNaN(enterAValue)) {
                case true:
                    var anotherUnitOfMeasurement = prompt("Enter a unit of measurement to convert to: inches, feet, yards, centimeters and meters");
                    switch (anotherUnitOfMeasurement) {
                        case "yards":
                            console.log(feetToYards(enterAValue));
                            break;
                        case "inches":
                            console.log(feetToInches(enterAValue));
                            break;
                        case "centimeters":
                            console.log(feetToCentimeters(enterAValue));
                            break;
                        case "meters":
                            console.log(feetToMeters(enterAValue));
                            break;
                        default:
                            alert("That was an invalid input");
                            unitConversionApp();
                    }
                    break;
                case false:
                    alert("That was an invalid input");
                    unitConversionApp();
                    break;
            }
            break;

        case "yards":
            var enterAValue = prompt("Enter a value:");
            switch (!isNaN(enterAValue)) {
                case true:
                    var anotherUnitOfMeasurement = prompt("Enter a unit of measurement to convert to: inches, feet, yards, centimeters and meters");
                    switch (anotherUnitOfMeasurement) {
                        case "feet":
                            console.log(yardsToFeet(enterAValue));
                            break;
                        case "inches":
                            console.log(yardsToInches(enterAValue));
                            break;
                        case "centimeters":
                            console.log(yardsToCentimeters(enterAValue));
                            break;
                        case "meters":
                            console.log(yardsToMeters(enterAValue));
                            break;
                        default:
                            alert("That was an invalid input");
                            unitConversionApp();
                    }
                    break;
                case false:
                    alert("That was an invalid input");
                    unitConversionApp();
                    break;
            }
            break;

        case "centimeters":
            var enterAValue = prompt("Enter a value:");
            switch (!isNaN(enterAValue)) {
                case true:
                    var anotherUnitOfMeasurement = prompt("Enter a unit of measurement to convert to: inches, feet, yards, centimeters and meters");
                    switch (anotherUnitOfMeasurement) {
                        case "inches":
                            console.log(centimetersToInches(enterAValue));
                            break;
                        case "feet":
                            console.log(centimetersToFeet(enterAValue));
                            break;
                        case "yards":
                            console.log(centimetersToYards(enterAValue));
                            break;
                        case "meters":
                            console.log(centimetersToMeters(enterAValue));
                            break;
                        default:
                            alert("That was an invalid input");
                            unitConversionApp();
                    }
                    break;
                case false:
                    alert("That was an invalid input");
                    unitConversionApp();
                    break;
            }
            break;
        case "meters":
            var enterAValue = prompt("Enter a value:");
            switch (!isNaN(enterAValue)) {
                case true:
                    var anotherUnitOfMeasurement = prompt("Enter a unit of measurement to convert to: inches, feet, yards, centimeters and meters");
                    switch (anotherUnitOfMeasurement) {
                        case "inches":
                            console.log(metersToInches(enterAValue));
                            break;
                        case "feet":
                            console.log(metersToFeet(enterAValue));
                            break;
                        case "yards":
                            console.log(metersToYards(enterAValue));
                            break;
                        case "centimeters":
                            console.log(metersToCentimeters(enterAValue));
                            break;
                        default:
                            alert("That was an invalid input");
                            unitConversionApp();
                    }
                    break;
                case false:
                    alert("That was an invalid input");
                    unitConversionApp();
                    break;
            }
            break;
        default:
            alert("That was an invalid input");
            unitConversionApp();
    }
}
unitConversionApp();

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

// USING SWITCH AND HARD NUMBERS

function calculatedTotal(luckyNumber, total) {
    var discountedPrice = 0;

    switch (luckyNumber) {
        case 0:
            discountedPrice = total;
            break;
        case 1:
            discountedPrice = total * (0.9);
            break;
        case 2:
            discountedPrice = total * (0.85);
            break;
        case 3:
            discountedPrice = total * (0.75);
            break;
        case 4:
            discountedPrice = total * (0.5);
            break;
        case 5:
            discountedPrice = total * (0);
            break;
        default:
            discountedPrice = "Invalid lucky number"
    }

    return discountedPrice;
}

var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);
console.log(calculatedTotal(luckyNumber, 50));

luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);
console.log(calculatedTotal(luckyNumber, 100));

// MAKING A FUNCTION TO BE USED IN MULTIPLE PLACES

function genRandNum() {
    Math.floor(Math.random() * 6);
}

luckyNumber = genRandNum();
console.log(luckyNumber);
console.log(calculatedTotal(luckyNumber, 200));

luckyNumber = genRandNum();
console.log(luckyNumber);
console.log(calculatedTotal(luckyNumber, 300));

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
    } else {
        discount = "Invalid lucky number"
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