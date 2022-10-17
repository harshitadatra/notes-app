const express = require("express");
const app= express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const notes = require("./data/notes");

app.listen(5000,console.log("server started on port 5000"))
//writing an api for other requests
app.get('/',(req,res)=>
{
    res.send("API IS running");
})
app.get('/api/notes',(req,res) => 
{
    res.json(notes);
})
app.get('/api/notes/:id/',(req,res)=> {
     const note = notes.find((n) => n._id === req.params.id);
    res.send(note)

}
)
//what is an api endpoint
//so whenever we try to fetch the data from our database or backend the api endpoint is the route from wher the data is served