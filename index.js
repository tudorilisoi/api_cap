'use strict'


//documentation page below  ↓↓↓
//https://www.weatherbit.io/api/airquality-current

// "https://api.weatherbit.io/v2.0/current"

// apikey for weatherbit: "8103110ef30f43aba760f8b8e90d3ee8"

const apiKey = "8103110ef30f43aba760f8b8e90d3ee8"

const searchUrl = "https://api.weatherbit.io/v2.0/current/airquality"


function formatQueryParams(params) {
    const queryItems = $.param(params);
    return queryItems.join('&');
}

function displayResults(responseJson){
    console.log(responseJson)
    $('#js-aqiResults').empty();
    for (let i = 0; i < responseJson.data.length; i++){
    $('#js-aqiResults').append(
        `<p>${responseJson.data[i].aqi}</p>
        <p>${responseJson.data[i].city_name}</p>`
    )};
}


function getAir(query){
    const params = {
        postal_code: query,
        API_KEY: apiKey,
        language: 'en'
        //"content-type": "application/json; charset=utf-8"
    };

 const queryString = formatQueryParams(params)
 const url = searchUrl + '?' + queryString

    console.log(url)


 $('#js-aqiResults').html('<p>Checking particles in the air...</p>')
    fetch(url)
     .then(response => {
        if (response.ok) {
            return response.json();
        }
            throw new Error(response.statusText);
        })
     .then(responseJson => displayResults(responseJson))
     .catch(err => {
        $('#js-aqiResults').empty()
        $('#js-error').text(`something went wrong: ${err.message}`);
    })
}

function watchForm() {
    $('form').submit(event =>{
        event.preventDefault()
        const searchTerm = $("#findair-btn").val();
        getAir(searchTerm);
    })
}

$(watchForm)