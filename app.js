var express = require("express");
var fs = require("fs");
var nunjucks = require("nunjucks");
var app = express();
//var dateFilter = require('nunjucks-date-filter');
var env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: false
});
//env.addFilter('date', dateFilter);

var nav = [ 
        {
            title: "Menu1",
            link: "/"
        },
        {
            title: "Menu2",
            link: "/generic"
        },
        {
            title: "Menu3",
            link: "/elements"
        }
    ] 

    var params ={
        nav: nav
    }

// Set up a URL route
app.get("/", function(req, res) {

    var news = [
        {
            title: "Noticia 1",
            date: Date.UTC(2017,5,1),
            image: "images/pic02.html",
            intro: "Esta es la intro de la noticia 1"
        },
        {
            title: "Noticia 2",
            date: Date.UTC(2017,5,3),            
            image: "images/pic03.html",
            intro: "Esta es la intro de la noticia 2"
        },
        {
            title: "Noticia 3",
            date: Date.UTC(2017,5,7),            
            image: "images/pic02.html",
            intro: "Esta es la intro de la noticia 3"
        },
        {
            title: "Noticia 4",
            date: Date.UTC(2017,5,10),            
            image: "images/pic03.html",
            intro: "Esta es la intro de la noticia 4"
        },
        {
            title: "Noticia 5",
            date: Date.UTC(2017,5,12),            
            image: "images/pic02.html",
            intro: "Esta es la intro de la noticia 5"
        },
        {
            title: "Noticia 6",
            date: Date.UTC(2017,5,17),
            image: "images/pic03.html",
            intro: "Esta es la intro de la noticia 6"
        }
    ]

    params.noticias = news 
    params.currentUrl =  req.originalUrl

    res.render("layouts/index.html", params);
});

app.get("/generic", function(req, res) {
    params.currentUrl =  req.originalUrl
    res.render("layouts/generic.html", params);
});

app.get("/elements", function(req, res) {
    params.currentUrl =  req.originalUrl    
    res.render("layouts/elements.html", params );
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);