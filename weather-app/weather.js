
const request = require("request");

var getWeather = (lat, lng, cb) => {
console.log(lat);
console.log(lng);

request.get({
    url : `https://api.darksky.net/forecast/d820290393614f3dd0a14fdc9c730e71/${lat},${lng}`,
    json: true
},
(error, response, body) => {
    if (!error && response.statusCode == 200){
        cb(undefined, body.currently.temperature);
    } else {
        cb("No weather data found");

    }
}
);
}

module.exports = {
    getWeather
}