var APIKey = 'd8b4e9c1ebd7b4bfdc1c3e9a6c0207cf'
var city

function citySelected(){
    city = document.getElementById('cities1').value
    console.log(city)
    //return city
    var cityURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    //console.log(cityURL)
    fetch(cityURL)
    .then(function (response){
        return response.json()
    })
    .then(function (response){
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
        .then(function (data){
        console.log(data.json())
        })
        // .then(function (data){
        //     console.log(data)
        // })
    })
}




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
//         //console.log(response.coord)
//         var lat = response.coord.lat  // this code grabs the coordinates of the city to use in the 5 day forcast api url 
//         //console.log(lat)
//         var lon = response.coord.lon
//         //console.log(lon)
//         return {
//             lati: lat,
//             long: lon
//         }
//     })
// }
//     function fiveDay(){
//         var queryURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
//         //console.log(queryURL)
//         fetch(queryURL)
//         .then(function (data){
//         console.log(data.json())
//         })
//         // .then(function (data){
//         //     console.log(data)
//         // }) 
//     }
   

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


