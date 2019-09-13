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

var stocksAPI = "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?api_key=kWiSvsgsQDvMhF2HD6aX";
$.ajax({
  type: "GET",
  url: stocksAPI,
  dataType: 'json'
}).then(function(stocks) {
  $(".company1").html("<h1>" + stocks.dataset.dataset_code + "</h1>");
  $(".close1").text(stocks.dataset.data[0][4])
  console.log(stocks);
});

var stocksAPI = "https://www.quandl.com/api/v3/datasets/WIKI/GOOGL.json?api_key=kWiSvsgsQDvMhF2HD6aX";
$.ajax({
  type: "GET",
  url: stocksAPI,
  dataType: 'json'
}).then(function(stocks) {
  $(".company2").html("<h1>" + stocks.dataset.dataset_code + "</h1>");
  $(".close2").text(stocks.dataset.data[0][4])
  console.log(stocks);
});

var stocksAPI = "https://www.quandl.com/api/v3/datasets/WIKI/TWTR.json?api_key=kWiSvsgsQDvMhF2HD6aX";
$.ajax({
  type: "GET",
  url: stocksAPI,
  dataType: 'json'
}).then(function(stocks) {
  $(".company3").html("<h1>" + stocks.dataset.dataset_code + "</h1>");
  $(".close3").text(stocks.dataset.data[0][4])
  console.log(stocks);
});

var currentTime = moment();
  $(".time").html("<h1>" + moment(currentTime).format("hh:mm") + "<h1>");
  console.log(currentTime);