
var mysql=require('mysql');
var config=require("config");

var connection=mysql.createConnection(
    {
       host:config.get("host"),
       user:config.get("user"),
       database:config.get("database"),
       password:config.get("password"),

    }
   )
   module.exports=connection;
