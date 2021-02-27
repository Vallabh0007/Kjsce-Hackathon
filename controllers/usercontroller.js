let connection = require('../config');
module.exports.register=function(req,res){
    let users={
        "username":req.body.username,
        "password":req.body.password,
        "email":req.body.email,
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            message:'there are some error with query'
        })
      }else{
          res.json({
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}