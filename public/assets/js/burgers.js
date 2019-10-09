// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var nowDevoured = $(this).data("nowDevoured"); //"newSleep"

        // var newSleepState = {
        //     sleepy: newSleep
        // };

        var nowDevouredState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevouredState
        }).then(
            function () {
                console.log("changed devoured", nowDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".add-burger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            //Submit as devoured false
            // devoured: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $(".delete-cat").on("click", function (event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("deleted cat", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });
});

// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   $(".delquote").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/quotes/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newQuote = {
//       author: $("#auth").val().trim(),
//       quote: $("#quo").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/quotes", {
//       type: "POST",
//       data: newQuote
//     }).then(
//       function() {
//         console.log("created new quote");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".update-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var updatedQuote = {
//       author: $("#auth").val().trim(),
//       quote: $("#quo").val().trim()
//     };

//     var id = $(this).data("id");

//     // Send the POST request.
//     $.ajax("/api/quotes/" + id, {
//       type: "PUT",
//       data: updatedQuote
//     }).then(
//       function() {
//         console.log("updated quote");
//         // Reload the page to get the updated list
//         location.assign("/");
//       }
//     );
//   });
// });
