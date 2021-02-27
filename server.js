const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
var app = express();

app.use(express.static(__dirname + "/public"));
// all statics files in /public
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000 ;

//Database
const connection = require('./config');

//SESSION
const session = require('express-session');
app.use(session({secret: 'Secreyyyy', resave: true, saveUninitialized: true})) 
module.exports.session = session; //Unnecessary

app.get('/', async (req,res)=>{
    await res.render('index');
});



app.listen(PORT,(err) =>{
    if(err) throw err;
    require('./model/createDb.js').createDatabase();
    require('./model/createTables.js').createTables();
    console.log('Server is running on localhost:'+PORT);
});