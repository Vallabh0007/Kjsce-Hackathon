const mysql = require('mysql');
const connection  = require('../config.js');

const createTables = () =>{
  var sqlQuery ="USE kjscehackfeb; CREATE TABLE IF NOT EXISTS `users` (" +
      "`id` int(11) NOT NULL AUTO_INCREMENT," +
      "`username` varchar(50) NOT NULL," +
      "`password` varchar(255) NOT NULL," +
      "`email` varchar(100) NOT NULL," +
      "`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP," +
      "PRIMARY KEY (`id`)" +
    ") ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;";

  
  connection.query(sqlQuery,function (err,result) {
      if (err) throw err;
      let tableName ="users";
      console.log( tableName+ " Table created");
  });

   
};

//createTables();

exports.createTables=createTables;
//module.exports = connection; 