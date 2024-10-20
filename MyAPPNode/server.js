//Declaration
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect("mongodb://127.0.0.1:5000/MyApp")
const db = mongoose.connection

db.on("error", console.error.bind(console, "Error : "))
db.once("open", () => {
    console.log("Connected to Database")
})

app.get("/", (req, res) => {
    try {
        res.send("Endpoint / Berhasil berjalan")
    } catch (err) {
        req.status(500).send("Error On This Endpoint")
        console.log(err)
    }
})