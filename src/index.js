function writeMovies(movies) {
    for (let i = 0; i < movies.length; i++) {
        let card = "<div class='card'>";
        card += "<div class='card-header'>" + movies[i].title + "</div>";
        card += "<div class='card-body'>";
        card += "<p class='card image'>"  + movies [i].image + "</p>";
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


function userInput() {

    let card = "<div class='card'>";
    card += "<div class='card-header' id='title'>" + "<input type='text'>" +  "</div>";
    card += "<div class='card-body'>";
    card += "<p class='card image' id='image'>" + "<input type='text'>" +   "</p>";
    card += "<p class='card-text' id='rating'>" +
       "<select>"+
        "<option value='1'>1</option>"+
        "<option value='2'>2</option>"+
        "<option value='3'>3</option>"+
        "<option value='4'>4</option>"+
        "<option value='5'>5</option>"+

    "</select>"
        + "</p>";
    // WRITE RATINGS AS IMAGES WRITTEN BY CODE IN CORRESPONDING NUMBER
    card += "<p class='card-footer'>";
    // for (var j = 0; j < movies[i].tags.length; j++) {
    //     var cats = "";
    //     cats = "<button type='button' class='btn btn-info'>" + movies[i].tags[j] + "</button>";
    //     card += cats;
    // }
    card += "</div>";
    $("#input").append(card);

}
 // userInput()
// $.ajax  ( [{
//     type: "POST",
//     url: "/db.json",
//     data:  {    title: $("#title").val(),
//                 rating: $("#rating").val(),
//                   id: movies.length+1 }
//
// }])



$(document).ready(function(){
    $("#loadingHeader").text("Loading...");
    const {getMovies} = require('./api.js');

    getMovies().then((movies) => {
        console.log(movies);
        writeMovies(movies);
        // userInput()

    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.')
        console.log(error);
    });
});





