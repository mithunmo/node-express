console.log("Weather App");
const yargs = require("yargs");
const axios = require("axios");
const argv = yargs
.options({
    a: {
        demand : true,
        alias : 'address',
        describe : 'Address to fetch for',
        string : true
    }
}).help().argv; 

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCWOobkhfx4ZR5Fhw40kx0YDu6Y4DrdPW8`;

axios.get(geocodeUrl)
.then((response) => {
    // console.log(response.data);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/d820290393614f3dd0a14fdc9c730e71/${lat},${lng}`;    
    return axios.get(weatherUrl);
})
.then( (response) => {
    console.log(response.data.currently.temperature);
})
.catch( (error) => {
    console.log("error");
});


