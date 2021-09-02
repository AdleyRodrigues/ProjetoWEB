const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../controllers/uploadController")
 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let obj = JSON.parse(req.body.obj);
    cb(null, "./public/uploads/" + obj.resource);
  },
  filename: function (req, file, cb) {
    let obj = JSON.parse(req.body.obj);
    console.log(obj);
    cb(null, obj.id.toString());
  },
});
 
const upload = multer({ storage: storage });

 
router.post("/", upload.single("file"), controller.uploadFile);
 
module.exports = router;
 

