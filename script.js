
// queryURL is the url we'll use to query the API
var apiKey = "12cdccffdab81e42eb35554f2442ce5f"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=" + apiKey;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
    console.log("Lat:" + lat + "Lon:" + lon);
    //search weather for coordinates
    queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=` + apiKey + "&units=metric";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     console.log(response)
     var currentWeather = response;
     //Transform DT time
     var timestamp = 1000*currentWeather.list[0].dt;
     const date = new Date(timestamp);
     // Populate weather in html
     $("#today").empty();
     $("#today").append(`
      <div class="card">
        <h5 class="card-header">${cityInput}: Now</h5>
        <div class="card-body">
          <h5 class="card-title">${currentWeather.list[0].weather[0].description}</h5>
          <img class="card-img" src="http://openweathermap.org/img/wn/${currentWeather.list[0].weather[0].icon}@2x.png" style="width: 12rem;" alt="${currentWeather.list[0].weather[0].description}">
          <p class="card-text">Temperature: ${currentWeather.list[0].main.temp}°C</p>
          <p class="card-text">Humidity: ${currentWeather.list[0].main.humidity}%</p>
          <p class="card-text">Wind speed: ${currentWeather.list[0].wind.speed} m/s</p></p>
          <div class="card-footer text-muted">Current weather ${date}</div>
        </div>
      </div>`
      );
      $("#forecast").empty();
      for (let i = 7; i < 40; i+=8) {
        var timestamp = 1000*currentWeather.list[i].dt;
        const date = new Date(timestamp);
        $("#forecast").append(`
        <div class="card text-white bg-primary mb-3" style="max-width: 20%;">
          <div class="card-header"><h5>${days[date.getDay()]}</h5></div>
          <div class="card-body">
          <h5 class="card-title">${currentWeather.list[i].weather[0].description}</h5>
          <img class="card-img" src="http://openweathermap.org/img/wn/${currentWeather.list[i].weather[0].icon}@2x.png" style="width: 12rem;" alt="${currentWeather.list[0].weather[0].description}">
          <p class="card-text">Temperature: ${currentWeather.list[i].main.temp}°C</p>
          <p class="card-text">Humidity: ${currentWeather.list[i].main.humidity}%</p>
          <p class="card-text">Wind speed: ${currentWeather.list[i].wind.speed} m/s</p></p>
          </div>
        </div>
        `);
      }
    });
  });


  });








// Get 5 day forecast


// Populate forecast


// Add city button