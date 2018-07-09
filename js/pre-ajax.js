$(document).ready(function() {
    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    function buildList(arrObjs) {
        var output = "";
        output += "<ul>";
        arrObjs.forEach(function(person) {
            output += "<li style='color:"+ person.favColor +"'>" + person.name + "</li>";
        });
        output += "</ul>";
        return output;
    }
    console.log(buildList(people));

    $("#add-names-btn").click(function() {
        $("#names-list").html(buildList(people))
    })

    // MY SOLUTION
    // ADDS EXTRA LISTS FOR EACH CLICK OF THE BUTTON

    // $("#add-names-btn").click(function() {
    //     for (var i = 0; i < people.length; i += 1) {
    //         var name = people[i].name;
    //         var favColor = people[i].favColor;
    //         $("#names-list").append("<li>" + name + "</li>");
    //         switch (name) {
    //             case people[0].name:
    //                 $("li").first().css("color", favColor);
    //                 break;
    //             case people[1].name:
    //                 $("li").first().next().css("color", favColor);
    //                 break;
    //             case people[2].name:
    //                 $("li").last().css("color", favColor);
    //                 break;
    //         }
    //     }
    //  })
});