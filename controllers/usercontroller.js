let connection = require('../config');
const register=function(req,res){
    let users={
        "username":req.body.username,
        "password":req.body.password,
        "email":req.body.email,
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        console.log(error)
        res.json({
            message:'Error with signup query'
        })
      }else{
        // console.log(results);
        // res.json({ results })
        res.redirect('/api/login');
      }
    });
}

const login = function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  if (username && password) {
      connection.query('SELECT * FROM users WHERE username = ?', username, function(error, results, fields) {
          if (results.length > 0) {
              req.session.loggedin = true;
              req.session.username = username;
              // res.json({ results })
              res.redirect('/home');
          } else {
              res.send('Incorrect Username and/or Password!');
          }           
          res.end();
      });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
}

module.exports = { 
	register,
	login
}