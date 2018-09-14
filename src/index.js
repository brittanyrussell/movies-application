// =================START OF CARD GENERATION FUNCTION==============
function writeMovies(movies) {
    for (let i = 0; i < movies.length; i++) {
        let table = "<tr>";
        table += "<td>" + movies[i].title + "</td>";
        table += "<td>" + movies[i].rating + '<button class="delete" style="float: right">X</button>' + "</td>";
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
    let table = "<tr>";
    table += "<td>" + $('#title').val() + "</td>";
    table += "<td>" + $('#rating').val() + '<button class="delete">X</button>' + "</td>";
    table+= "</tr>";
    $("#moviesLayout").append(table);
});















