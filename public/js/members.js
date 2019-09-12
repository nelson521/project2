// var moment = require("moment");
// require("dotenv").config();

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
    APPID: process.env.Weather_Key1
  }).then(function (response) {
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F) " + response.main.temp);
    console.log(response);
  });
});

var stocksAPI = "https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=kWiSvsgsQDvMhF2HD6aX";
$.ajax({
  type: "GET",
  url: stocksAPI,
  dataType: 'json'
}).then(function(stocks) {
  $(".company").html("<h1>" + stocks.dataset.dataset_code + "</h1>");
  $(".close").text(stocks.dataset.data[0].close)
  console.log(stocks);
});

var currentTime = moment();
  $(".time").html("<h1>" + moment(currentTime).format("hh:mm") + "<h1>");
  console.log(currentTime);


var map = "https://googleapis.com/maps/api/js?libraries=places&key=AIzaSyAPwV82tdZDwt7FUKcXr_ZGfyn84CKPxo8";
$getJSON(getIP).done(function (location) {
  $getJSON(map, {
    lat: location.lat,
    lon: location.lon
  })
      function initialized() {
        var center = new google.maps.LatLng(map);
        map = new google.maps.Map(document.getElementById("map"), {
          center: center,
          zoom: 14
        });
      }
})

google.maps.event.addDomListener(window, 'load', initialize);

