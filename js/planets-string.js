(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var stringOfPlanets1 = planetsArray.join("<br>");
    console.log(stringOfPlanets1);

    var stringOfPlanets2 = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    console.log(stringOfPlanets2);



    var anotherStringOfPlanets1 = "<ul><li>";
    anotherStringOfPlanets1 += planetsArray.join("</li><li>");
    anotherStringOfPlanets1 += "</li></ul>";
    console.log(anotherStringOfPlanets1);

    var anotherStringOfPlanets2 = "<ul>";
    planetsArray.forEach(function(planet) {
        anotherStringOfPlanets2 += "<li>" + planet + "</li>";
    });
    anotherStringOfPlanets2 += "</ul>";
    console.log(anotherStringOfPlanets2);

    var anotherStringOfPlanets3 = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>";
    console.log(anotherStringOfPlanets3);

})();

// (function () {
//     var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
//     function cleanPhoneNumbers(phoneNums) {
//         var phoneNumsArr = phoneNums.split("\n");
//         var cleanNumsArr = [];
//
//         phoneNumsArr.forEach(function(phoneNum){
//             var formattedNum = phoneNum.split("-").join("");
//             cleanNumsArr.push(formattedNum);
//         });
//
//         return cleanNumsArr;
//     }
//
//     var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);
//
//     for (var i = 0; i < cleanNumsArr.length; i += 1) {
//         console.log(cleanNumsArr[i]);
//     }
// })();