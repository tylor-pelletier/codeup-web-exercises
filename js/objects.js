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
            alert("You did not spend over $200. You need to buy $" + (200 - shopper.amount) + " more to get the discount, no discount applied")
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
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName)
    // });

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