

var currentWDisplay = document.getElementById('currentDisplay')
var futureWeatherD = document.getElementById('five-dayDisplay')

var APIKey = 'd8b4e9c1ebd7b4bfdc1c3e9a6c0207cf'
// var city 
var city;
// var date = $('#datetest')
// var todayDate = moment.unix(1670176800).format("dddd, MMMM Do YYYY")
// $(date).append(`<h1>${todayDate}</h1>`)
// console.log(todayDate)


// function getCityData(){
// $('#cities').each(function(){
//     $(this).val(localStorage.getItem($('#currentDisplay')))
// })
// }

function resetBtn(){
    if ($('#currentDisplay').children().length === 0){
        getCoords()
        $('#goWeather').addClass('btnAway')
    } else {
        $('#goWeather').addClass('btnCome')
    }
}

function clearAll (){
    getCoords()
    $('#currentDisplay').empty()
    $('#five-dayDisplay').empty()
    $('#goWeather').addClass('btnAway')
}

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
    var queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${a}&lon=${b}&appid=${APIKey}&units=imperial`
    fetch(queryURL)
    .then(function (response){
    console.log(response)
    return response.json()
    })
    .then(function (data){
    console.log(data)
    currentWeather(data)
    futureWeather(data)
    })
 }


var iconURL = `https://openweathermap.org/img/wn/`
function currentWeather(data){
$(currentWDisplay).append(`
<h2>Current Weather</h2>
<h3>City: ${data.city.name} Date: ${moment.unix(`${data.list[0].dt}`).format("dddd, MMMM Do YYYY")} </h3>
<table class="table">
            <thead>
                <tr>
                    <th scope="col">Weather</th>
                    <th scope="row">Tempreture</th>
                    <th scope="row">Wind Speed</th>
                    <th scope="row">Humidity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><img src="${iconURL}${data.list[0].weather[0].icon}.png"></th>
                    <th scope="row">${data.list[0].main.feels_like}</th>
                    <th scope="row">${data.list[0].wind.speed}mph</th>
                    <th scope="row">${data.list[0].main.humidity}%</th>
                </tr>
            </tbody>
        </table>
`)   
}

function futureWeather(data){
$(futureWeatherD).append(`
<h2>5-Day Forcast</h2>
<h3>City: ${data.city.name}</h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">${moment.unix(`${data.list[0].dt}`).format("dddd, MMMM Do YYYY")}</th>
      <th scope="col">${moment.unix(`${data.list[8].dt}`).format("dddd, MMMM Do YYYY")}</th>
      <th scope="col">${moment.unix(`${data.list[16].dt}`).format("dddd, MMMM Do YYYY")}</th>
      <th scope="col">${moment.unix(`${data.list[24].dt}`).format("dddd, MMMM Do YYYY")}</th>
      <th scope="col">${moment.unix(`${data.list[32].dt}`).format("dddd, MMMM Do YYYY")}</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">Weather</th>
    <td><img src="${iconURL}${data.list[0].weather[0].icon}.png"></td>
    <td><img src="${iconURL}${data.list[8].weather[0].icon}.png"></td>
    <td><img src="${iconURL}${data.list[16].weather[0].icon}.png"></td>
    <td><img src="${iconURL}${data.list[24].weather[0].icon}.png"></td>
    <td><img src="${iconURL}${data.list[32].weather[0].icon}.png"></td>
  </tr>
  <tr>
    <th scope="row">Temp</th>
    <td>${data.list[0].main.feels_like}</td>
    <td>${data.list[8].main.feels_like}</td>
    <td>${data.list[16].main.feels_like}</td>
    <td>${data.list[24].main.feels_like}</td>
    <td>${data.list[32].main.feels_like}</td>
  </tr>
  <tr>
    <th>Wind</th>
    <td>${data.list[0].wind.speed}mph</td>
    <td>${data.list[8].wind.speed}mph</td>
    <td>${data.list[16].wind.speed}mph</td>
    <td>${data.list[24].wind.speed}mph</td>
    <td>${data.list[32].wind.speed}mph</td>
  </tr>
  <tr>
    <th>Humidity</th>
    <td>${data.list[0].main.humidity}%</td>
    <td>${data.list[8].main.humidity}%</td>
    <td>${data.list[16].main.humidity}%</td>
    <td>${data.list[24].main.humidity}%</td>
    <td>${data.list[32].main.humidity}%</td>
  </tr>
</tbody>
</table>
`)
testingStore()
}

function testingStore(){
    $('#cities1').on('click', function(){
    city = $(this).val()
    console.log(city)
    $('#cityData').on('click', function(){
        var valueC = $('#currentDisplay')
        //console.log(valueC.html())
        localStorage.setItem(city, valueC.html())
        //getCityData() //This keeps the same city as the key each time
        getCityData()        
    })
    })
}

// $('#cityHistory').append(getCityData())
// function cityInformation(){
//     localStorage.getItem(city)
// }


function getCityData(){
    //$('#cityHistory').html(`<h3>Reccent Searches:</h3><br><h4><a href="saved-city.html">${city}</a></h4><br>`)
    //localStorage.getItem(city)
    //$('#cityHistory').html('<h1>HELLO WORLD<h1>')
    //$('#cityHistory').append(getCityData(city))
    //$('#cityHistory').html() = localStorage.getItem(city)
    //$('#cityHistory').html(localStorage.getItem(city)) CORRECT SYNTAX BUT NOT WORKING
    //console.log(localStorage.getItem(city))
    //$('#cityHistory').html(cityInformation)

    // UNCOMMENT 182-183 & COMMENT OUT 172 & 185
    var dataToDisplay = localStorage.getItem(city)
    $('#cityHistory').html(`<h2>Reccently Viewed:</h2>${dataToDisplay}`)
    
    //sendCityInfo(city)

}


// function getCityData(){
// $('#cities1').each(function(){
//     $(this).val(localStorage.getItem($('#currentDisplay')))
// })
// }


//this is my test test
//var queryURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
//console.log(queryURL)

/* 
function citySelected(){
    city = document.getElementById('cities1').value
    console.log(city)
fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
.then(response => {
            \\ need logic to push search results, save to local storage, eventually append to a list of searched cities
            return response.json()
        })
 .then(response => {
            console.log(response);
*/

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
