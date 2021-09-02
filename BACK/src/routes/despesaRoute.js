const express = require("express");
const router = express.Router();
const despesaController = require("../controllers/despesaController");

router.get("/", despesaController.get);
router.post("/", despesaController.post);
router.get("/:despesa_id", despesaController.getById);
router.get("/qtd/:qtd", despesaController.getByQtd);
router.put("/:despesa_id", despesaController.put);
router.delete("/:despesa_id", despesaController.delete);

module.exports = router;

