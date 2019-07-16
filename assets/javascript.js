
var numberOfRecords = $("num-of-records").val();
var startYear = $("#start-year").val();


$("#submitbtn").on("click", function () {

    var searchTerm = $("#search-term").val();
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=7ukniaqaASKAK4iiEoQtNpVogGJvbKOh";

    $.ajax({
        url: queryUrl,
        method: "GET",
    })
    .then(function (response) {

    })
});