const express = require('express');
const mongoose = require('mongoose')

mongoose.connect("mongodb://sanjeev:mypassword@mongo:27017/?authSource=admin")
    .then(()=>console.log("successfully connected to DB"))
    .catch((e)=>console.log(e))


const app = express();

app.get('/', (req, res)=>{
    res.send("<h2> Hi There</h2>")
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Listening on port ${port}`) );