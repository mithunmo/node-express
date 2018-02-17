
var request = require("request")
var somePromise = new Promise((resolve, reject) => {
    resolve("it worked");
});

somePromise
.then( (message) => {
    console.log(message);
},(errormessage) => {
    console.log(errormessage);
});


var getStock = () => {
    return new Promise( (resolve, reject) => {
        request.get({
            url : `https://ww.quandl.com/api/v3/datasets/NSE/pnb.json?api_key=J3cU7jn8b_HdBT-n3sau&limit=1`,
            json : true
            },
            (error, response, body) => {
                if(!error && response.statusCode == 200)
                    resolve(body);
                else
                    reject(error.code);
            }
        );
    });
};

getStock()
.then( (success) => {
    console.log(success);
}, (error) => {
    console.log(error);
});


