const express = require("express");
const controlador = require("../controllers/poesia.controller");
var api = express.Router();

api.get("/verGeneros", controlador.verGeneros);
module.exports = api;
