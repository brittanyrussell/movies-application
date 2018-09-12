function writeMovies(movies) {

    for (var i = 0; i < movies.length; i++) {
        var card = "<div class='card'>";
        card += "<div class='card-header'>" + movies[i].title + "</div>";
        card += "<div class='card-body'>";
        card += "<p class='card image'><!--MOVIE POSTER IMAGES--></p>";
        card += "<p class='card-text'>" + movies[i].rating + "</p>";
        // WRITE RATINGS AS IMAGES WRITTEN BY CODE IN CORRESPONDING NUMBER
        card += "<p class='card-footer'>";
        // for (var j = 0; j < movies[i].tags.length; j++) {
        //     var cats = "";
        //     cats = "<button type='button' class='btn btn-info'>" + movies[i].tags[j] + "</button>";
        //     card += cats;
        // }
        card += "</div>";
        $("#moviesLayout").append(card);
    }

}

$(document).ready(function(){
    $("#loadingHeader").text("Loading...");
    const {getMovies} = require('./api.js');

    getMovies().then((movies) => {

        writeMovies(movies);
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.')
        console.log(error);
    });

});

