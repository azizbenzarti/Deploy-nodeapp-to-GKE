const express = require('express');

const app = express();

app.get("/", (req, res) => {
    
    res.send("Welcome to Node App")
})

app.listen(80, () => {
    
    console.log("Server is running")
})