'use strict'


//documentation page below  ↓↓↓
//https://www.weatherbit.io/api/airquality-current

// "https://api.weatherbit.io/v2.0/current"

// apikey for weatherbit: "8103110ef30f43aba760f8b8e90d3ee8"

const apiKey = "8103110ef30f43aba760f8b8e90d3ee8"

const searchUrl = "http://api.weatherbit.io/v2.0/current/airquality"


function formatQueryParams(params) {
master
    const queryString = $.param(params);
    return queryString
}

function displayResults(responseJson) {
    console.log(responseJson)
    $('#js-aqiResults').empty();
    $('#js-aqiResults').append(
        `<h1>${responseJson.city_name}</h1>
        `)

    for (let i = 0; i < responseJson.data.length; i++) {
        const infoObj = responseJson.data[i]
        for (let propName in infoObj) {
            $('#js-aqiResults').append(`
                <p><span>${propName}</span> ${infoObj[propName]}</p>`
            )
        }
    };

    const queryItems = $.param(params);
    return queryItems;
}


function displayResults(responseJson){
    console.log(responseJson)
    $('#js-aqiResults').empty();
    $('#js-aqiResults').append(`
    <h2>${responseJson.city_name}</h2>`)

    for (let i = 0; i < responseJson.data.length; i++){
    $('#js-aqiResults').append(
        `<p>${responseJson.data[i].aqi}</p>`)
        let aqiNum = `${responseJson.data[i].aqi}`
        /*for (let i = 0; i < responseJson.data.length; i++) {
            const infoObj = responseJson.data[i]
            for (let propName in infoObj) {
                $('#js-aqiResults').append(`
                    <p><span>${propName}</span> ${infoObj[propName]}</p>`
                )
            }*/
        $("#js-wordResponse").empty()
          if (aqiNum <= 50) {
        return $("#js-wordResponse").html("Good");
    
    }  else if (aqiNum >= 51, aqiNum < 100) {

        return $("#js-wordResponse").html('Moderate');
    }
        else if (aqiNum >= 100, aqiNum < 150) {

        return $("#js-wordResponse").html("Unhealthy For Sensative Groups")

    }   else {

        return $("#js-wordResponse").html('Just Stay Inside Today')
    } 
    }
 master
}


function getAir(query) {
    const params = {
        postal_code: query,
        key: apiKey,
 master
        // language: 'en'

        //language: 'en'
 master
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
            console.log(err)
            $('#js-error').text(`something went wrong: ${err.message}`);
        })
}
function formEffect(){
    $("form").submit(event =>{
        event.preventDefault();
        $(".js-wrapper").fadeIn("slow");
    })
}

function customStyle(){
    $('.anchor-scroll').anchorScroll({
        scrollSpeed: 800, // scroll speed
        offsetTop: 0, // offset for fixed top bars (defaults to 0)
        onScroll: function () { 
          // callback on scroll start
        },
        scrollEnd: function () { 
          // callback on scroll end
        }
    });
}
function sliding(){
    $(".container").animate({width: "250px"}, 2000)
    $('form').submit(event =>{
    $(".result-wrapper").animate({width: "250px"}, 2000)
    });
}


function watchForm() {
 master
    $('form').submit(event => {

    sliding();
    $('form').submit(event =>{
 master
        event.preventDefault()
        const searchTerm = $("#zip-code").val();
        getAir(searchTerm);
    })
}

$(watchForm)