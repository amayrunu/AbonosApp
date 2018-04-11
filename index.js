'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');
const port = process.env.port || 8080

mongoose.connect(config.uri, (err)=>{
    if(err) {
        console.log("conectado")
    }
});


app.listen(port, ()=>{
    console.log("conectado"+ port)
});
