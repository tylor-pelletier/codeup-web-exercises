"use strict";

// ================ SIMPLE FUNCTION DRILLS

(function () {

// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())
    function returnTwo(example) {
        return example;
    }
    console.log(returnTwo(2));

// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())
    function returnName(name) {
        return name;
    }
    console.log(returnName("Tylor"));

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))
    function addThree(number) {
        var total = number + 3;
        return total;
    }
    console.log(addThree(5));

// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())
    function sayString(string) {
        var saying = string;
        return saying;
    }
    console.log(sayString("Why hello there."));

// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value
    function sayHowdy(howdy) {
        console.log(howdy);
    }
    sayHowdy("Howdy!");

// ================ CHALLENGE FUNCTION DRILLS

// Write a function called `identity(input)` that takes in an argument called input and returns that input.
    function identity(input) {
        return input;
    }
    console.log(identity("Me"));

// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.
    function getRandomNumber(min, max) {
        var x = Math.floor(Math.random() * max + min);
        return x;
    }
    console.log(getRandomNumber(0, 10));

// Write a function called `first(input)` that returns the first character in the provided string.
    function first(firstLetter) {
        var string = firstLetter;
        return string.charAt(0);
    }
    console.log(first("This is a string."));

// Write a fuction called `last(input)` that returns the last character of a string
    function last(lastCharacter) {
        var string = lastCharacter;
        return string.slice(-1);
    }
    console.log(last("This is a string"));

// Write a function called `rest(input)` that returns everything but the first character of a string.
    function rest(takeOutFirstLetter) {
        var string = takeOutFirstLetter;
        return string.slice(1);
    }
    console.log(rest("This is a string"));

// Write a function called `reverse(input)` that takes a string and returns it reversed.
    function reverse(reverseString) {
        return reverseString.split('').reverse().join('');
    }
    console.log(reverse("This is a string"));

// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.


// Write a function called `count(input)` that takes in a string and returns the number of characters.
    function count(numberOfCharacters) {
        var string = numberOfCharacters;
        return string.length;
    }
    console.log(count("This is a string"));

// Write a function called `add(a, b)` that returns the sum of a and b
    var ab = prompt("Pick a number:");
    var bc = prompt("Pick a number to add to the first number:");
    function add(a, b) {
        var total = (a + b);
        return total;
    }
    console.log(add(parseInt(ab), parseInt(bc)));
    alert(parseInt(ab) + " + " + parseInt(bc) + " = " + (parseInt(ab) + parseInt(bc)));

// Write a function called `subtract(a, b)` that return the difference between the two inputs.
    var c = prompt("Pick a number:");
    var d = prompt("Pick a number to subtract from the first number:");
    function subtract(a, b) {
        var sub = (a - b);
        return sub;
    }
    console.log(subtract(c, d));
    alert(c + " - " + d + " = " + (c - d));

// Write `multiply(a, b)` function that returns the product
    var e = prompt("Pick a number:");
    var f = prompt("Pick a number to multiply the first number:");
    function multiply(a, b) {
        var product = (a * b);
        return product;
    }
    console.log(multiply(e, f));
    alert(parseInt(e) + " * " + parseInt(f) + " = " + (parseInt(e) * parseInt(f)));

// Write a divide(numerator, denominator) function that returns a divided by b
    var g = prompt("Pick a number:");
    var h = prompt("Pick a number to divide the first number:");
    function divide(numerator, denominator) {
        var outcome = (numerator / denominator);
        return outcome;
    }
    console.log(divide(g, h));
    alert(parseInt(g) + " / " + parseInt(h) + " = " + (parseInt(g) / parseInt(h)));

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
    var number2 = prompt("Pick a number:");
    var divisor = prompt("Pick a number to divide the first number:");
    function remainder(original, dividing) {
        var whatIsLeft = (original % dividing);
        return whatIsLeft;
    }
    console.log(remainder(number2, divisor));
    alert(parseInt(number2) + " % " + parseInt(divisor) + " = " + (parseInt(number2) % parseInt(divisor)));

// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
    var multiplyItself = prompt("Pick a number to multiply by itself:");
    function square(a) {
        var repeat = (a * a);
        return repeat;
    }
    console.log(square(multiplyItself));

// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//     function sumOfSquares(i, j) {
//
//     }
//     console.log(sumOfSquares());

// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
//     function doMath(operator, a, b) {
//
//     }
//     console.log(doMath());
}());

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

(function () {

function sayHello(name) {
    return "Hello, " + name + "!";
}

console.log(sayHello(prompt("What is your name?")));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Tylor");

console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Tylor";

console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(number) {
    if (number === 2) {
        console.log(true)
    } else {
        console.log(false)
    }
    return number;
}

console.log(isTwo(random));

function isTwo(number) {
    return 2 === number;
}

console.log(random);
console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var billDollars = prompt("How much was your bill?");
var tip = prompt("What decimal of a tip would you like to leave?");

function calculateTip(billAmount, tipAmount) {
    tipAmount *= billAmount;
    return tipAmount.toFixed(2);
}

console.log(calculateTip(billDollars, tip));
alert("You should leave a $" + calculateTip(billDollars, tip) + " tip.");

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

(function () {
    var originalPrice = prompt("How much is the original price of the item?");
    var discount = prompt("What is the decimal of the discount off?");
    discount *= originalPrice;

    function applyDiscount(originalPriceDollars, discountPercent) {
        var priceTotal = originalPriceDollars - discountPercent;
        return priceTotal.toFixed(2);
    }

    console.log(applyDiscount(originalPrice, discount));
    alert("Your total after the discount is $" + applyDiscount(originalPrice, discount) + ".");
}());
}());