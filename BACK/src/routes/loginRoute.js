const express = require("express");
const router = express.Router();
const contaController = require("../controllers/contaController");

router.post("/", contaController.verifica);

module.exports = router;

