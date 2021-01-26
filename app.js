const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const studentRouter = require('./routes/studentRoutes.js');

const app = express();
app.use(bodyParser.json());

const uri = 'mongodb+srv://harinath:harinath@cluster0.rlcse.mongodb.net/StudentsDetail?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err)
    );

app.use(studentRouter);
app.listen(4000, () => { console.log('Server is running on port 4000') })