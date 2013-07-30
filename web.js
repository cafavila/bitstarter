var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var app = express.CreateServer(express.logger());

app.get('/', function (request, response)
{
    var html = fs.readFileSync(htmlfile).toString();
    response.send(htmlfile);
})

var port = process.env.PORT || 8080;
app.liste(port, function ()
{
    console.log("Escuchando en puerto : " + port);
});
