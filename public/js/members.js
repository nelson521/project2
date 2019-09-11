// var moment = require("moment");

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});


var getIP = 'http://ip-api.com/json/';
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
$.getJSON(getIP).done(function (location) {
  $.getJSON(openWeatherMap, {
    lat: location.lat,
    lon: location.lon,
    units: 'imperial',
    APPID: '166a433c57516f51dfab1f7edaed841'
  }).then(function (response) {
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F) " + response.main.temp);
    console.log(response);
  });
});

var stocksAPI = "https://api.usfundamentals.com/v1/companies/xbrl?companies=320193,1418091&format=json&token=31A9w8nZJD94Vw5yCDy2mQ";
$.get(stocksAPI, (res) => {
  console.log(res)
})
$.ajax({
  type: "GET",
  url: stocksAPI,
  dataType: 'json'
}).then(function(stocks) {
  console.log(stocks);
})

var currentTime = moment();
  $(".time").html("<h1>" + moment(currentTime).format("hh:mm") + "<h1>");