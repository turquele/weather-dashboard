
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
    var lat = response[0].lat;
    var lon = response[0].lon;
    console.log("Lat:" + lat + "Lon:" + lon)
    queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=` + apiKey + "&units=metric";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     console.log(response)
     var currentWeather = response.list[0];
     $("#today").append(`<h2>${currentWeather.weather[0].icon}</h2>`);
     $("#today").append(`<h3>${currentWeather.weather[0].description}</h3>`);
     $("#today").append(`<p>Temperature: ${currentWeather.main.temp}°C</p>`);
     $("#today").append(`<p>Humidity: ${currentWeather.main.humidity}%</p>`);
     $("#today").append(`<p>Wind speed: ${currentWeather.wind.speed}`+ " m/s</p>");
    });
  });


  });








//search weather for coordinates


// Populate weather in htmel


// Get 5 day forecast


// Populate forecast


// Add city button