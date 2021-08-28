const express = require("express");
const router = express.Router();
const despesa = require('./despesaRoute');
const conta = require('./contaRoute');
const login = require('./usersRoute');

 
router.use('/despesas', despesa);
router.use('/contas', conta);
router.use('/login', login);


  

module.exports = router;