const express = require('express');

const app = express();

// app.use(mymiddleware); // for all Requests


// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true })); // For form submissions

app.set("view engine", "ejs");
// for ejs setup
app.use(express.static("public"))


function mymiddleware(req, res, next){
    console.log("inside the Middleware")
    next();
};


// stitch the routes to the server
require("./routes/idea.routes")(app);


// stating Server
app.listen(8080, (req, res)=>{
    console.info("Server Started Successfully")
});




