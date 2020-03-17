const express = require('express');
const app= express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://harsh:harsh437@cluster0-ft6fh.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true}).then(()=>console.log('DB connected'))
                    .catch(err=>console.log(err));




app.get('/', function (req, res) {
    res.send('hello world')});


app.listen(5000);