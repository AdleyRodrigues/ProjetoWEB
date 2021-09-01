const express = require("express");
const router = express.Router();
const contaController = require("../controllers/contaController");
const upload = require("../services/multerConfig");

router.get("/", contaController.get);
router.post("/", upload.single('avatar'), contaController.post);
router.get("/:id", contaController.getById);
router.put("/", contaController.put);
router.delete("/:id", contaController.delete);

module.exports = router;

