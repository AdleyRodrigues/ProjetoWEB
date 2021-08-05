const express = require("express");
const router = express.Router();
const despesa = require('./despesaRoute');
const conta = require('./contaRoute');
const login = require('./loginRoute');

 
router.use('/despesas', despesa);
router.use('/contas', conta);
router.use('/login', login);


/*
router.get("/", function (req, res) {
    session = req.session;
    if (session.userid) {
      res.send("Welcome User <a href='/logout'>click to logout</a>");
    } else res.send("ok");
  });

 
  router.post("/login", (req, res) => {
    if (req.body.username == "" && req.body.password == "") {
      session = req.session;
      session.userid = req.body.username;
      console.log(req.session);
      res.send(req.session.id);
    } else {
      res.send("Invalid username or password");
    }
  });
  */
  

module.exports = router;