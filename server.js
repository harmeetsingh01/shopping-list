const express = require("express");
const mongoose = require("mongoose");

const app = express();

const item = require('./routes/api/items');

// for parsing
app.use(express.json());

mongoose.connect('mongodb+srv://Harmeet:harryrocks@cluster0-dduqg.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology:true })

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'))
db.once('open',() => console.log("Database connected"));

app.use('/api/items',item);

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server started on ${port}`));