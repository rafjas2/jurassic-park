const express = require("express");
const app = express(); 

const port = process.env.PORT || 8010;
app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res ) {
    res.render("index");
});

app.listen(port, function() {
    console.log("App is running in http://localhost:8010/");
});