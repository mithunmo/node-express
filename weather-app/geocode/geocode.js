
const request = require("request");

var geocodeAddress = (address, cb) => {
    request.get( {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCWOobkhfx4ZR5Fhw40kx0YDu6Y4DrdPW8`,
        json : true
        }
        ,(error, response, body) => {
            if (error){
                cb("errr");
            } else {
             
                cb(undefined, {
                   address:  body.results[0].formatted_address,
                   lat : body.results[0].geometry.location.lat,
                   lng : body.results[0].geometry.location.lng
                });
            // console.log(`Address ${body.results[0].formatted_address}`);
            // console.log(`Lat ${body.results[0].geometry.location.lat}`);
            // console.log(`Long ${body.results[0].geometry.location.lng}`);
            }
    });
}
module.exports = {
    geocodeAddress
}
