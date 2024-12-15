const express = require("express");
const router = express.Router();

const citaController = require("./controllers/citas.controller");

router
  .get("/", citaController.obtenerCitas)
  .get("/random", citaController.obtenerCitaRandom)
  .post("/", citaController.guardarCita)
  .put("/:id", citaController.actualizarCita);

module.exports = router;
