
// queryURL is the url we'll use to query the API
var apiKey = "12cdccffdab81e42eb35554f2442ce5f"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=" + apiKey;

var cityInput

//Search Button listener
$("#search-button").on("click", function(event) {
  event.preventDefault();
  //Read text form
  cityInput = $("#search-input").val();
  console.log(cityInput);
  //Search coordinates of city
  queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=" + apiKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response[0].lat);
    console.log(response[0].lon);
  });
});








//search weather for coordinates


// Populate weather in htmel


// Get 5 day forecast


// Populate forecast


// Add city button