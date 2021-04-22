'use strict';

// make a variable called express to use the express library
const express = require('express'); //npm install express

// server has all the Express properities and methods
const server = express();


const PORT =  process.env.PORT || 3010;

// the server is ready for listening
server.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`);
})


// localhost:3010/test ->http request (/test->route)
server.get('/test',(request,response)=>{
    response.send('Your server is alive!!')
    // console.log(request);
})

server.get('/',(req,res)=>{
    res.send('you are in the root');
})

server.get('/data',(req,res)=>{
    res.send('you are in the data page');
})


// to access a file in public directory
// server.use(express.static('./public'));