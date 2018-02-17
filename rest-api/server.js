
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
var app = express();

hbs.registerPartials(__dirname+ "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

// middleware 

app.use( (req, res, next) => {
    log = `${req.method} ${req.url}`;
    fs.appendFile("log.txt", log + '\n',  (err) => {
        if (err)
            console.log(err);
    });
    next();
});

// Maintainence 
app.use( (req, res, next) => {
    res.render("maintain.hbs");
});
app.get("/", (request, response) => {
    response.render("home.hbs", {page : "home", year: "2018"});
});

app.get("/json", (request, response) => {
    var obj = {};
    obj.name = "mithun"
    obj.city = "banggalore"
    response.send(obj);
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        page: "about",
        year: "2018"
    });
});
app.listen(3000);
