//arquivo principal
//imports
const express = require("express");
app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use(express.json());

//app.use(express.urlencoded({ extended: true }));

//rotas
const index = require("./routes/index.js");
const despesa = require("./routes/despesaRoute");
const conta = require("./routes/contaRoute");
const login = require("./routes/loginRoute");

app.use("/", index);
app.use("rotaDespesas", despesa);
app.use("rotaContas", conta);
app.use("rotaLogin", login);

app.use((req, res) =>{
    res.status(404).send({
        status: 404,
        error: "NOT FOUND",
    });
});

//parte do servidor
app.listen(3033,'localhost', () =>{
    console.log("SERVIDOR RODANDO ");
})

