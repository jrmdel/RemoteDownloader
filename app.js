// Bring all the modules
const express = require('express');
const fs = require('fs')

// Start the express instance
const app = express();

// Some middlewares
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Setting up the route
app.get('/', function(req,res){
    // To retrieve the path passed in query in the url we can do the following
    let path = "./"+req.query.path
    console.log("Request received : Get file at "+path)
    // Checks if the file exists
    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            console.error(err)
            res.json({success: false, msg: "Path leads nowhere"})
        }
        // File exists. Return it
        res.download(path);
    })
})

// Launching the server
const PORT = 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));