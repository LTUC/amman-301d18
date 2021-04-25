'use strict';

//to run the server 
//1- npm start
//2- node server.js
//3- nodemon

const express = require('express');
require('dotenv').config();

const cors = require('cors');

const server = express();

const PORT = process.env.PORT || 5000;
// take the port from .env local file
// If I am in the Heroku it will take the port from the .env file that inside the Heroku
// 5000

server.use(cors()); //open for any request from any client

server.get('/data',(req,res)=>{
    res.status(200).send('Hi from the data page, I am the server !!!');
})

server.get('/location',(req,res)=>{
    //fetch the data that inside locaion.json file
    let locationData = require('./data/location.json');

    let locationRes = new Location(locationData);
    console.log(locationRes);

    res.send(locationRes);

})

function Location(locData){
    this.search_query = 'Lynnwood';
    this.formatted_query = locData[0].display_name;
    this.latitude = locData[0].lat;
    this.longitude = locData[0].lon;
}

server.get('*',(req,res)=>{
    let errObj = {
        status: 404,
        resText: 'sorry! this page not found'
    }
    res.status(404).send(errObj);
})

server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})