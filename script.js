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

//var city

// function citySelected(){
//     city = document.getElementById('cities1').value
//     console.log(city)
//     //return city
//     var cityURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
//     //console.log(cityURL)
//     fetch(cityURL)
//     .then(function (response){
//         return response.json()
//     })
//     .then(function (response){
//         console.log(response.coord)
//         var lat = response.coord.lat  // this code grabs the coordinates of the city to use in the 5 day forcast api url 
//         //console.log(lat)
//         var lon = response.coord.lon
//         //console.log(lon)
//         //return (lat, lon)
//         var queryURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
//         //console.log(queryURL)
//         fetch(queryURL, {
//             mode: 'cors'
//         })
//         .then(function (data){
//         console.log(data.json())
//         })
//         // .then(function (data){
//         //     console.log(data)
//         // })
//     })
// }


// 1. Lets first divide your api calls into seperate functions. Lets create a function that is going to fetch the coordinates to be used later :slightly_smiling_face: Something like this: function fetchCoords() {}.
// 2. Inside the fetchCoords function we are going to first create the apiURL that will be called: var apiUrl = https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIKey};
// 3. Now you can perform your fetch with the apiUrl.
// 4. Now lets create the other function that will take the coords from the above function and actually search the weather forecast: function fetchWeather(location) {}. (Make sure to add the location call back, we will use it later)
// 5. Inside the fetchWeather function we are going to next create a couple variables, the first one being the lat: var { lat } = location;
// 6. Now the same for the lon: var { lon } = location;
// 7. Next variable we will create will be the city: var city = location.name;
// 8. Now we can create the variable for the api call: var apiUrl = https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey};
// 9. Now perform your fetch :slightly_smiling_face:

function getCoords(city) {
    city = document.getElementById('cities1').value
    var cityURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    fetch(cityURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            //var coords = response.coord
            console.log(response.coord)
            var lat = response.coord.lat  // this code grabs the coordinates of the city to use in the 5 day forcast api url 
            //console.log(lat)
            var lon = response.coord.lon
            //console.log(lon)
            //return (lat, lon)
            getWeather(lat, lon)
        })
} 

 function getWeather(a, b){
    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${a}&lon=${b}&appid=${APIKey}`
    fetch(queryURL)
    .then(function (response){
    console.log(response)
    return response.json()
    })
    .then(function (data){
    console.log(data)
    })
 }




//my attempt to pull the returned lat and lon values
// var {lat, lon} = getCoords()

// // var coords = getCoords()
// // var lati = coords.lat
// // var long = coords.lon


   
