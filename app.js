// Bring all the modules
const express = require('express');
const cors = require('cors');
const fs = require('fs')

// Start the express instance
const app = express();

// Some middlewares
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Setting up the routes
app.get('/', function(req,res){
    // To retrieve the path passed in query in the url we can do the following
    let path = req.query.path
    // Do the things
    // ...

    // Return a response
    res.json({success: true, msg: 'You gave me this file path in query : '+path})
})


// Launching the server
const PORT = 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
