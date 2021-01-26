const express = require('express');
const { type } = require('os');
const studentModel = require('../models/students');
const stu = express();

stu.get('/student', async (req, res) => {
    const student = await studentModel.find({});

    try {
        res.send(student);
    } catch (err) {
        res.status(500).send(err);
    }

});

stu.post('/student', (req, res) => {
    const student = new studentModel(req.body);
    try {
        if (student.type == "YOGA" || student.type == "PILATES" || student.type == "CARDIO") {
            student.save();
            res.send(student);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = stu