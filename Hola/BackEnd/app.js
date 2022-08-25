const express = require("express");
const cors = require("cors");
let app = express();

const poesia = require("./src/routes/poesia.routes");
const alumno = require("./src/routes/alumno.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use("/prueba", poesia, alumno);

module.exports = app;
