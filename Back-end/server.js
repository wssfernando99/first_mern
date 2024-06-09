const express = require('express');
const mongoose = require('mongoose');
const bodyParsr = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const studentRouter = require('./routes/student')

const app = express();

app.use(cors());
app.use(bodyParsr.json());                    //to pass the data in json format

const URL = process.env.MONGODB_URL;          //config the mongodb url

mongoose.connect(URL)                        //connect with mongodb);

const connection  = mongoose.connection;      //asigning the connection function in mongoose

connection.once("open",()=>{
    console.log(`Mongodb Connection Success!`) 
});

app.use('/student',studentRouter);

const port = process.env.PORT || 4000         // set up the port. if there any availabe env port use It.
app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})