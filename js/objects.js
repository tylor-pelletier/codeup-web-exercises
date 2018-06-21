(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {};
    person.firstName = "Rick";
    person.lastName = "Sanchez";

    // var person = {
    //     firstName: "Rick",
    //     lastName: "Sanchez"
    // };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + this.firstName + " " + this.lastName)
    };

    person.sayHello();



    person.logFirstAndLastNames = function () {
        console.log("First and last name is: " + this.firstName + " " + this.lastName);
    };
    person.logFirstAndLastNames();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            alert("Shopper " + shopper.name);
            alert("Your total was $" + shopper.amount);
            alert("The discount off is $" + (shopper.amount * 0.12));
            alert("Your new total is $" + (shopper.amount - (shopper.amount * 0.12)));
        } else {
            alert("Shopper " + shopper.name);
            alert("You did not spend over $200. You need to spend at least $" + (200.01 - shopper.amount).toFixed(2) + " to get the discount, no discount applied")
        }
    });

    // function discountForShoppers(total, name) {
    //     if (total > 200) {
    //         alert("Shopper " + name);
    //         alert("Your total was $" + total);
    //         alert("The discount off is $" + (total * 0.12));
    //         alert("Your new total is $" + (total - (total * 0.12)));
    //     } else {
    //         alert("Shopper " + name);
    //         alert("You did not spend over $200. You need to buy $" + (200 - total) + " more to get the discount, no discount applied")
    //     }
    // }
    // discountForShoppers(shoppers[0].amount, shoppers[0].name);
    // discountForShoppers(shoppers[1].amount, shoppers[1].name);
    // discountForShoppers(shoppers[2].amount, shoppers[2].name);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var books = [
    //     {title: "Harry Potter", author: {firstName: "J.K.", lastName: "Rowling"}},
    //     {title: "The Lord of the Rings", author: {firstName: "R.R.", lastName: "Tolken"}},
    //     {title: "1984", author: {firstName: "George", lastName: "Orwell"}},
    //     {title: "A Game of Thrones", author: {firstName: "George", lastName: "Martin"}},
    //     {title: "The Giver", author: {firstName: "Lois", lastName: "Lowry"}}
    // ];
    //
    // console.log(books[0].title);
    // console.log(books[3].author.firstName);
    // console.log(books[1].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(book, index) {
    //     console.log("Book #" + (index + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("---")
    // });

    // OR

    // for (var i = 0; i < books.length; i += 1){
    //     console.log("Book #" + (index + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("---")
    // }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // function createBook(bookTitle, authorFirstName, authorLastName) {
    //     return {title: bookTitle, author: {firstName: authorFirstName, lastName: authorLastName}};
    // }
    // createBook("Harry Potter", "J.K.", "Rowling");
    //
    // function showBookInfo(bookObject) {
    //     return console.log([bookObject]);
    // }
    // showBookInfo(createBook("Harry Potter", "J.K.", "Rowling"));

    function createABook(bookTitle, authorFirstName, authorLastName) {
        return {title: bookTitle, author: {firstName: authorFirstName, lastName: authorLastName}};
    }
    createABook("Harry Potter", "J.K.", "Rowling");
    createABook("The Lord of the Rings", "R.R.", "Tolken");
    createABook("1984", "George", "Orwell");
    createABook("A Game of Thrones", "George", "Martin");
    createABook("The Giver", "Lois", "Lowry");

    function showBookInfo(bookObject1, bookObject2, bookObject3, bookObject4, bookObject5) {
        var books = [bookObject1, bookObject2, bookObject3, bookObject4, bookObject5];
        books.forEach(function(book, index) {
            console.log("Book #" + (index + 1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName)
        });
    }
    showBookInfo(createABook("Harry Potter", "J.K.", "Rowling"), createABook("The Lord of the Rings", "R.R.", "Rowling"), createABook("1984", "George", "Orwell"), createABook("A Game of Thrones", "George", "Martin"), createABook("The Giver", "Lois", "Lowry"));

})();

(function () {
    "use strict";
// ================================= OBJECTS BONUSES
//     BONUS 1 (create a dog object):
//     The dog object should have properties for:
//     breed (string),
//         weightInPounds (number),
//         age (number),
//         color (string),
//         sterilized (boolean),
//         shotRecords (array of objects with properties for date and typeOfShot)
//     The dog object should have methods to:
//         bark() - will console.log "Woof!"
//     getOlder() - will increase age by 1
//     fix() - will set sterile to true if dog sterilized property is false
//     vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

    var dog = {
        breed: "German Shepherd",
        weightInPounds: 80,
        age: 3,
        color: "Tri-color",
        sterilized: false,
        shotRecords: [
            {date: "December 28th, 2015", typeOfShot: "Rabies"},
            {date: "December 30th, 2015", typeOfShot: "DA2PP"},
            {date: "January 1st, 2016", typeOfShot: "Canine Parvovirus"}
        ],
        bark: function () {
            console.log("Woof!");
        },
        getOlder: function () {
            dog.age += 1;
        },
        fix: function () {
            dog.sterilized = true;
        },
        vaccinate: function (date, typeOfShot) {
            dog.shotRecords.push({date: date, typeOfShot: typeOfShot});
        }
    };
    console.log(dog);
    dog.bark();
    dog.getOlder();
    dog.fix();
    dog.vaccinate("January 5th", "Heartworm Disease");
    console.log(dog);

//     BONUS 2 (expanding on the books object exercise):
//     Add a property "keywords" that contains an array of possible genres the book may be categorized by
//     Add a boolean property "available" and set it to true
//     Add a dateAvailable property that has a string of the date/time when the book will be available
//     Add a method lend() that...
//     - changes the available property to false if it is not already false
//     - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
//     (to do this, research the JS Date object and use methods from it in your code)
//     Add a method receive() that...
//     - changes the available property to true
//     - changes the dateAvailable property to the string "now"

    var booksBonus = [
        {title: "Harry Potter", author: {firstName: "J.K.", lastName: "Rowling", keywords: ["Science Fiction", "Fantasy"]}},
        {title: "The Lord of the Rings", author: {firstName: "R.R.", lastName: "Tolken"}},
        {title: "1984", author: {firstName: "George", lastName: "Orwell"}},
        {title: "A Game of Thrones", author: {firstName: "George", lastName: "Martin"}},
        {title: "The Giver", author: {firstName: "Lois", lastName: "Lowry"}}
    ];

//     BONUS 3 (expanding on the books object exercise):
//     Create an application to take in user input to build the books array of objects.
//         Allow the user to continue adding books or to finish adding books.
//         Once the books have been added, output the books array in the console.
//         Allow a user to delete a book or a group of books by title or author last name
//     Allow a user to edit a book by index number in the books array



})();