var express=require("express");

var app=express();

var config=require("config");

var empRouter=require("./routes/emp");

var port=parseInt(config.get("port"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/emp",empRouter);

app.listen(port,()=>
{
    console.log("server started on port 9888.........");
})