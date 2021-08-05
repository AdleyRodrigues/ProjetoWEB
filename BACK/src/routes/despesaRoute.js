const express = require("express");
const router = express.Router();
const despesaController = require("../controllers/despesaController");

router.get("/", despesaController.get);
router.post("/", despesaController.post);
router.get("/:id", despesaController.getById);
router.put("/:id", despesaController.put);
router.delete("/:id", despesaController.delete);

module.exports = router;

