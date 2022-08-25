const express = require("express");
const controlador = require("../controllers/alumno.controller");
var api = express.Router();


api.get("/edades", controlador.reporte);
api.get("/carreras/:Carrera", controlador.Carreras);
api.get("/poesia/:Tipo", controlador.reportePoesia);
api.post("/registro", controlador.registro);


module.exports = api;
