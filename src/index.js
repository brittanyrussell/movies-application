// =================START OF CARD GENERATION FUNCTION==============
// function writeMovies(movies) {
//     for (let i = 0; i < movies.length; i++) {
//         let card = "<div class='card bg-dark'>";
//         card += "<div class='card-body'>" + "<p>" +movies[i].title+"</p>";
//         // card += "<p class='card image'>" + movies [i].image + "</p>";
//         card += "<p class='card-text'>" + movies[i].rating + "</p>";
//         // WRITE RATINGS AS IMAGES WRITTEN BY CODE IN CORRESPONDING NUMBER
//         card += "<p class='card-footer'>";
//         // for (var j = 0; j < movies[i].tags.length; j++) {
//         //     var cats = "";
//         //     cats = "<button type='button' class='btn btn-info'>" + movies[i].tags[j] + "</button>";
//         //     card += cats;
//         // }
//         card += "</div>";
//         $("#moviesLayout").append(card);
//     }
// }
function writeMovies(movies) {
    for (let i = 0; i < movies.length; i++) {
        let table = "<tr>";
        table += "<td>" + movies[i].title + "</td>";
        table += "<td>" + movies[i].rating + "</td>";
        table+= "</tr>";
        $("#moviesLayout").append(table);
    }
}

// =================END OF CARD GENERATION FUNCTIONS==============

// ====================DOCUMENT LOAD FUNCTIONS====================
$(document).ready(function () {
    $(".hide").css("display", "none");
    $("#loadingHeader").text("Loading...");

    const {getMovies} = require('./api.js');
    getMovies().then((movies) => {
        writeMovies(movies);

        $("#loadingHeader").css("display", "none");
        $("#load").css("display", "none");
        $(".hide").css("display", "block");

    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
});

// ====================USER INPUT POST REQUEST====================

$("#submit").click(function () {
    $.ajax({
        type: "POST",
        url: "./api/movies",
        data: {
            title: $("#title").val(),
            rating: $("#rating").val(),
        }
    });
    let table = "<table>";
    table += "<tr><td>" + $("#title").val() + "</td><td></td>";
    // card += "<p class='card image'>" + movies [i].image + "</p>";
    table += "<td>" + $("#rating").val() + "</td></tr>";
    // WRITE RATINGS AS IMAGES WRITTEN BY CODE IN CORRESPONDING NUMBER
    table += "<p class='card-footer'>";
    // for (var j = 0; j < movies[i].tags.length; j++) {
    //     var cats = "";
    //     cats = "<button type='button' class='btn btn-info'>" + movies[i].tags[j] + "</button>";
    //     card += cats;
    // }
    table += "</table>";
    $("#moviesLayout").append(table);
});












