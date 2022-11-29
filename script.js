var APIKey = 'd8b4e9c1ebd7b4bfdc1c3e9a6c0207cf'
var city = document.getElementById('cities1').value

//Returns a Promise
function getCoordsData(city) {
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    return fetch(url)
        .then(response => response.json())
}

//Returns a Promise
function get5DayForecast(lat, lon) {
    var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
    return fetch(url)
        .then(response => response.json())
}

function citySelected() {
    //Step 1: Lookup Selected City
    getCoordsData(city)
        .then(cityData => {
            console.log(cityData)
            get5DayForecast(cityData.coord.lat, cityData.coord.lon)
                .then(forecastData => {
                    //TODO: Add cool stuff here..
                    console.log(forecastData)
                })
        })
}


function citySelectedOld() {
    city = document.getElementById('cities1').value
    console.log(city)
    //return city
    var cityURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    //console.log(cityURL)
    fetch(cityURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.coord)
            var lat = response.coord.lat  // this code grabs the coordinates of the city to use in the 5 day forcast api url 
            //console.log(lat)
            var lon = response.coord.lon
            //console.log(lon)
            //return (lat, lon)
            var queryURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
            //console.log(queryURL)
            fetch(queryURL, {
                mode: 'cors'
            })
                .then(function (data) {
                    console.log(data.json())
                })
            // .then(function (data){
            //     console.log(data)
            // })
        })
}

//Load initial city from dropDown
citySelected();

