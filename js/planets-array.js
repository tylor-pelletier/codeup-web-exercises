(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('Sun');
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf('Earth'));

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);

})();

// BONUSES 1:
// Write a program to toggle all characters in a string: in a given string, toggle all characters to their opposite case.
// Special characters will not change.
//     Example input: "aBc12#""
// Example output: "AbC12#"

console.log("aBc12#".replace(/([a-z]+)|([A-Z]+)/g, function(_, low, up) {
    return low ? low.toUpperCase() : up.toLowerCase()
}));

// BONUS 2:
// Write a program that takes a given string appended with a number at the end. The program will check the length of the
// string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes".
// if the number appended does not equal the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"

