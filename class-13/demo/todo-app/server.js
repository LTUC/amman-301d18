'use strict'

// Application Dependencies
const express = require('express');
const pg = require('pg');
const methodOverride = require('method-override');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.urlencoded({ extended: true })); //put the from data in req.body
// Specify a directory for static resources
app.use(express.static('./public'));
app.use(methodOverride('_method'));

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);

// Set the view engine for server-side templating
app.set('view engine', 'ejs');


// API Routes
app.get('/', getTasks);
app.get('/showForm',showFormHandler);
app.post('/addTask',addTaskHandler);
app.get('/taskDetails/:taskID',getOneTaskDetails); //localhost:3030/taskDetails/1
app.put('/updateTask/:taskID',updateTaskHandler);
app.delete('/deleteTask/:taskID',deleteTaskHandler);


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

function updateTaskHandler(req,res){
  // console.log(req.body);
  let {title,description,contact,status,category} = req.body;
  let SQL = `UPDATE tasks SET title=$1,description=$2,contact=$3,status=$4,category=$5 WHERE id=$6;`;
  let safeValues = [title,description,contact,status,category,req.params.taskID];
  client.query(SQL,safeValues)
  .then(()=>{
    res.redirect(`/taskDetails/${req.params.taskID}`);
  })
}

function deleteTaskHandler(req,res){
  // console.log('Hi');
  let SQL=`DELETE FROM tasks WHERE id=$1;`;
  let value=[req.params.taskID];
  client.query(SQL,value)
  .then(()=>{
    res.redirect('/');
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