

function sendCityInfo(city){
var dataToDisplay = localStorage.getItem(city)
$('#cityReturn').html(`<h2>Reccently Viewed:</h2>${dataToDisplay}`)
}
