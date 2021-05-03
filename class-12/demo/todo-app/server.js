'use strict'

// Application Dependencies
const express = require('express');
const pg = require('pg');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.urlencoded({ extended: true })); //put the from data in req.body
// Specify a directory for static resources
app.use(express.static('./public'));

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);

// Set the view engine for server-side templating
app.set('view engine', 'ejs');


// API Routes
app.get('/', getTasks);
app.get('/showForm',showFormHandler);
app.post('/addTask',addTaskHandler);
app.get('/taskDetails/:taskID',getOneTaskDetails); //localhost:3030/taskDetails/1


// HELPER FUNCTIONS
function getTasks(request, response) {

  let SQL = `SELECT * FROM tasks;`;
  client.query(SQL)
  .then(results=>{
    response.render('index',{tasksResults:results.rows})
  })
  .catch(err=>{
    res.render('error',{error:err})
  })
 
}

function showFormHandler(req,res){
  res.render('taskForm');
}

function addTaskHandler(req,res){
  console.log(req.body);
  let SQL = `INSERT INTO tasks (title,description,contact,status,category) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;
  let safeValues = [req.body.title,req.body.description,req.body.contact,req.body.status,req.body.category];
  client.query(SQL,safeValues)
  .then(result=>{
    // console.log(result.rows[0].id);
    // res.render('index');
    // res.redirect('/'); //localhost:3030/
    res.redirect(`taskDetails/${result.rows[0].id}`)
  })
}


function getOneTaskDetails(req,res){
  console.log(req.params);
  let taskId = req.params.taskID;
  let SQL = `SELECT * FROM tasks WHERE id=$1;`;
  let safeValue = [taskId];
  client.query(SQL,safeValue)
  .then(result=>{
    // console.log(result.rows[0]);
    res.render('oneTask',{task:result.rows[0]});
  })
}

app.get('*', (req, res) => {
  // res.status(404).send('This route does not exist')
  res.render('404page');
});


client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  })