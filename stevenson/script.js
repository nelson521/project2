const apiKey = '6a9563de61b6bf8d11bf1447109c610d';
const queryURL = 'https://api.openweathermap.org/data/2.5/weather?lat=39.9524&lon=-75.1636&units=imperial&APPID=' + apiKey;
$(document).ready(function () {
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $('#apiName').text(JSON.stringify(response.name).replace(/\"/g, ""));
    $('#apiWeather').text(JSON.stringify(response.main.temp))
    console.log(response)
  });
});