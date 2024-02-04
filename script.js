const API_KEY = '4269652c5e1b6a66a34f9d3d16ecc098';
const DEFAULT_VALUE = '--';
const searchName = document.getElementById("search-input")
const cityName = document.getElementsByClassName("city-name")
const weatherState = document.getElementsByClassName("weather-state")
const temperature = document.getElementsByClassName("temperature")

searchName.addEventListener("change", function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchName.value}&appid=${API_KEY}&lang=vi&units=metric`)
    .then(response => response.json())
    .then(data => {
        cityName[0].innerHTML = data.name
        weatherState[0].innerHTML = data.weather[0].description
        temperature[0].innerHTML = Math.round(data.main.temp)
    })
})