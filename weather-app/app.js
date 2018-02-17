console.log("Weather App");
const request = require("request");
const yargs = require("yargs");
const geocode = require("./geocode/geocode.js")
const weather = require("./weather.js");
const argv = yargs
.options({
    a: {
        demand : true,
        alias : 'address',
        describe : 'Address to fetch for',
        string : true
    }
}).help().argv; 

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else if (results){
        console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.lat, results.lng, (errorMessage, result) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(result);
            }
        });
    
    }

});

//request.get()