"use strict";

// EXERCISE NUMBER 1

console.log("Hello from external JavaScript");

alert("Welcome to my website!");

// EXERCISE NUMBER 2

var userInput = prompt("What's your favorite color?");

alert("Great," + " " + userInput + " " + "is my favorite color too!");

// EXERCISE NUMBER 3

// 1

var pricePerDay = 3;

var littleMermaidDays = prompt("How many days do you want to rent The Little Mermaid?");
var brotherBearDays = prompt("How many days do you want to rent Brother Bear?");
var herculesDays = prompt("How many days do you want to rent Hercules?");

alert("You will pay" + " " + "$" + ((parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays)) * pricePerDay));

prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay? (littleMermaidDays + brotherBearDays + herculesDays) * pricePerDay = $9 + $15 + $3 =");

alert("You will have to pay" + " " + "$" + ((parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays)) * parseInt(pricePerDay)) + ".");

// 2

var googleRate = 400;
var googleHours = prompt("How many hours did you work at Google?");

var amazonRate = 380;
var amazonHours = prompt("How many hours did you work at Amazon?");

var facebookRate = 350;
var facebookHours = prompt("How many hours did you work at Facebook?");

alert("You will receive" + " " + "$" + ((facebookRate * facebookHours) + (googleRate * googleHours) + (amazonRate * amazonHours)) + " " + "for this week.")

var totalPayment;

prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon. How much will you receive in payment for this week? ((facebookRate * facebookHours) + (googleRate * googleHours) + (amazonRate * amazonHours)) = $3,500 + $$2,400 + $1,520 =");

alert("You will receive" + " " + "$" + ((facebookRate * facebookHours) + (googleRate * googleHours) + (amazonRate * amazonHours)) + " " + "this week.");

// ((facebookRate * facebookHours) + (googleRate * googleHours) + (amazonRate * amazonHours));
// THESE ARE THE SAME
// totalPayment = facebookHours * facebookRate;
// totalPayment += googleHours * googleRate;
// totalPayment += amazonHours * amazonRate;

// 3

var classIsFull; // boolean
var classScheduleWorks; //boolean

var enrolledInClass = classIsFull && classScheduleWorks;

var classFull = confirm("Is the class open?");
var classSchedule = confirm("Is your schedule free?");
var enrollStatus = (classFull && classSchedule);
console.log(enrollStatus);

if (enrollStatus === true) {
    alert("You are enrolled!")
}
else if (enrollStatus === false) {
    alert("Tough luck.")
}

// 4

var itemsForDiscount; //boolean
var discountStillActive; //boolean
var premiumAccount; //boolean

var discount = itemsForDiscount && discountStillActive || premiumAccount;

var overTwoItemsSold = confirm("Do they have over two items for purchase?");
var offerStillGood = confirm("Is the offer still good?");
var premiumMember = confirm("Are they a premium member?");
var discountStatus = ((overTwoItemsSold && offerStillGood) || premiumMember);
console.log(discountStatus);

if (discountStatus === true) {
    alert("Discount applied!")
}
else if (discountStatus === false) {
    alert("No discount.")
}

// 5

var username = "codeup";
var password = "notastrongpassword";

var passMinLength;
var userNameNotInPass;
var userNameMaxLength;
var passTrim;
var userNameTrim;

var usernameValid = userNameMaxLength && userNameTrim;
var passValid = passMinLength && userNameNotInPass && passTrim;