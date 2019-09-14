var models  = require('../models');
var express = require('express');
var router  = express.Router();
var http = require("https");
const bodyParser = require('body-parser');
const request = require('request');

router.get('/', function(req, res) {

  var finalText;

  var options = {
    "method": "GET",
    "hostname": "theysaidso.p.rapidapi.com",
    "port": null,
    "path": "/qod",
    "headers": {
      "x-rapidapi-host": "theysaidso.p.rapidapi.com",
      "x-rapidapi-key": "71b30fabcemsh2da6c15bbf3c320p1e0755jsnda03754c0478"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      var obj = JSON.parse(body.toString());
      var quote = obj.contents
      var finalQ  = quote.quotes
      var final = finalQ[0]
      finalText = final.quote

      console.log(finalText);
    });
  });

  console.log("here",finalText);


  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: '"'+"Keep a positive mind. Remember, a failed attempt doesn't make you a failure—giving up does"+'"',
      users: users
    });
  });

  req.end();

});

const apiKey = 'd0439e626a53efdc135316f7e9466bc2';

router.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

router.get('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=philadelphia&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    console.log(response);
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
});

router.get("/api/stocks",function(req,res){
var stocksAPI = "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?api_key=kWiSvsgsQDvMhF2HD6aX";
$.ajax({
  type: "GET",
  url: stocksAPI,
  dataType: 'json'
}).then(function (stocks) {
  $(".company1").html("<h1>" + stocks.dataset.dataset_code + "</h1>");
  $(".close1").text(stocks.dataset.data[0][4])
  console.log(stocks);
});

var stocksAPI = "https://www.quandl.com/api/v3/datasets/WIKI/GOOGL.json?api_key=kWiSvsgsQDvMhF2HD6aX";
$.ajax({
  type: "GET",
  url: stocksAPI,
  dataType: 'json'
}).then(function (stocks) {
  $(".company2").html("<h1>" + stocks.dataset.dataset_code + "</h1>");
  $(".close2").text(stocks.dataset.data[0][4])
  console.log(stocks);
});

var stocksAPI = "https://www.quandl.com/api/v3/datasets/WIKI/TWTR.json?api_key=kWiSvsgsQDvMhF2HD6aX";
$.ajax({
  type: "GET",
  url: stocksAPI,
  dataType: 'json'
}).then(function (stocks) {
  $(".company3").html("<h1>" + stocks.dataset.dataset_code + "</h1>");
  $(".close3").text(stocks.dataset.data[0][4])
  console.log(stocks);
});

var currentTime = moment();
$(".time").html("<h1>" + moment(currentTime).format("hh:mm") + "<h1>");
console.log(currentTime);
});



module.exports = router;
