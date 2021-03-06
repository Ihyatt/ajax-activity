"use strict";


// PART 1: SHOW A FORTUNE

function printedFortune(results){
    var fortune = results;
    $('#fortune-text').html(fortune);
    console.log(fortune);
}


function showFortune(evt) {
    $.get('/fortune', printedFortune);
    console.log("Fortune was printed");


    // TODO: get the fortune and show it in the #fortune-text div
}


$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function displayForecast(results) {
    var forecast = results.forecast;
    $('#weather-info').html(forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, displayForecast);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


