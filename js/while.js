
(function () {
    var i = 1;

    while (i < 65534) {
        console.log(i *= 2);
        i++;
    }
}());

(function () {
    var i = 0;
    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        console.log(i += Math.floor(Math.random() * 5) + 1);
        i++;
    } while (i <= allCones);
}());
