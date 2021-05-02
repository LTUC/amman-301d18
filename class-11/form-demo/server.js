'use strict';

require('dotenv').config();
const express = require('express');
const server = express();
const PORT = process.env.PORT || 5000;

// server.get('/',(req,res)=>{
//     res.send('home page');
// })

server.use(express.static('./public'));

//express middle ware
server.use(express.urlencoded({extended:true})); // take the form data and add it into the req.body

server.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('ok!');
})

// server.get('/login',(req,res)=>{
//     console.log(req.query);
//     res.send('ok2');
// })

server.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`);
})