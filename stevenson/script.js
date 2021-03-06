const apiKey = '6a9563de61b6bf8d11bf1447109c610d';
let lat = 39.9524;
let lon = -75.1636;
const queryURL = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&units=imperial&APPID=' + apiKey;

function getLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {

  lat = position.coords.lat;
  lon = position.coords.lon;
  //  console.log(position.coords.latitude);
  //  console.log(position.coords.longitude);
  //  console.log(position.coords);

}

getLocation();

$(document).ready(function () {
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $('#apiName').text(JSON.stringify(response.name).replace(/\"/g, ""));
    $('#apiWeather').text(JSON.stringify(response.main.temp))
    $('#description').text(JSON.stringify(response.weather[0].description).replace(/\"/g, ""));
    $('#windSpeed').text(JSON.stringify(response.wind.speed));
    $('#humidity').text(JSON.stringify(response.main.humidity))
    $('#pressure').text(JSON.stringify(response.main.pressure));

    console.log(response)

  });
});