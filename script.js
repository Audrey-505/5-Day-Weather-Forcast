var APIKey = 'd8b4e9c1ebd7b4bfdc1c3e9a6c0207cf'
var city

function citySelected(){
    city = document.getElementById('cities1').value
    console.log(city)
    //return city
    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    //console.log(queryURL)
    fetch(queryURL)
    .then(function (response){
        return response.json()
    })
    .then(function (response){
        console.log(response)
    })
}


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


