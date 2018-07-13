"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// 1
const moreThanThreeLang = users.filter( user => user.languages.length >= 3);
console.log(moreThanThreeLang);

// OLD WAY
// var moreThanThreeLang = [];
// for (var i = 0; i < users.length; i += 1) {
//     if (users[i].languages.length >= 3) {
//         moreThanThreeLang.push(users[i])
//     }
// }
// console.log(moreThanThreeLang);

// 2
const emails = users.map( user => user.email);
console.log(emails);

// 3
const newObj = users.reduce((accumulation, user) => {
    accumulation[user.id] = user;
    return accumulation;
}, {});
console.log(newObj);