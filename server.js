const express = require('express');

const app = express();

app.use(mymiddleware); // for all Requests

function mymiddleware(req, res, next){
    console.log("inside the Middleware")
    next();
};

app.get("/", (req, res, next) =>{
    res.end("welcome")
});

// stitch the routes to the server
require("./routes/idea.routes")(app);


// stating Server
app.listen(8080, (req, res)=>{
    console.info("Server Started Successfully")
});




