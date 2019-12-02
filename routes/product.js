var express = require("express");
var routes = express();
//var mysql = require("mysql");
var connection = require("../db/database");


connection.connect();
routes.use(express.json());

routes.get("/", (request, response) => {
    var queryText = `select * from product`;
    connection.query(queryText, (error, result) => {
        if (error == null) {
            response.send(JSON.stringify(result));
        }
        else {
            response.send(JSON.stringify(error));
        }
    })

})

/*

routes.get("/:No", (request, response) => {
    var No=request.params.No;
    var queryText = `select * from product where id=${No}`;
    connection.query(queryText, (error, result) => {
        if (error == null) {
            response.send(JSON.stringify(result));
        }
        else {
            response.send(JSON.stringify(error));
        }
    })


})

routes.put("/:No", (request, response) => {
    var id = request.params.No;
var {title,description,price} = request.body;

    var queryText = `update product set title='${title}',description='${description}' where id=${id}`;
    connection.query(queryText, (error, result) => 
    {
        if (error == null) {
            response.send(JSON.stringify(result));
        }
        else {
            response.send(JSON.stringify(error));
        }
    })

})


routes.post("/",(request,response)=>
{

    var No=request.body.No;
    var Name=request.body.Name;
    var Age=request.body.Age;

    var queryText=`insert into Emp values(${No},${Name},${Age})`;
    connection.query(queryText,(error,result)=>
    {
        if(error==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    })

})


routes.delete("/:No", (request, response) => {
    var No=request.params.No;
    var queryText = `delete from Emp where No=${No}`;
    connection.query(queryText, (error, result) => {
        if (error == null) {
            response.send(JSON.stringify(result));
        }
        else {
            response.send(JSON.stringify(error));
        }
    })


})
*/
module.exports=routes;