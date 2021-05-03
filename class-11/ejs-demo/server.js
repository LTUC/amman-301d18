'use strict';

//Application Dependencies
require('dotenv').config();
const express = require('express');
const superagent = require('superagent');

// Application Setup
const PORT = process.env.PORT || 3000;
const server = express();

server.set('view engine','ejs');
server.use(express.static('./public'));

server.get('/',(req,res)=>{
    // res.send('ok');
    res.render('index');
})

server.get('/listFamily',(req,res)=>{
    let familyArr = ['Yousof','Eman','Roaa','Leen'];
    // res.render('listFamilyMembers');
    res.render('listFamilyMembers',{familyData:familyArr})
})

server.get('/booksList',(req,res)=>{
    let url = `https://www.googleapis.com/books/v1/volumes?q=cats`
    superagent.get(url)
    .then(booksData=>{
        // res.send(booksData.body);
        res.render('booksList',{booksArr:booksData.body.items})
    })
    // res.render('booksList');
})

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})