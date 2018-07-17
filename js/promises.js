"use strict";

// 1
const wait = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number === 1000) {
                resolve("You'll see this after " + (number / 1000) + " second");
            } else if (number > 1000 || (number < 1000 && number >= 0)) {
                resolve("You'll see this after " + (number / 1000) + " seconds");
            } else {
                reject("Error");
            }
        }, number)
    });
};
const timeToWait = wait(1000);
// const timeToWait = wait(3000);
console.log(timeToWait);
timeToWait.then(data => console.log("Promise resolved!", data));
timeToWait.catch(error => console.log("Promise rejected!", error));

// 2
const lastPushToGithub = (username) => {
    return fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': 'token 7f1ab21386dbf65f9e4b4533079c4479cde471ef'}})
};
lastPushToGithub('tylor-pelletier')
    .then(response => response.json())
    .then(events => events.filter(event => event.type === "PushEvent"))
    .then(data => console.log(data["0"].created_at))
    .catch(error => console.error(error));