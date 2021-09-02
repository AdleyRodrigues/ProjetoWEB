//arquivo principal
//imports
const express = require("express");
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
require("dotenv/config");

app.use(express.static("public"));

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

//Session
app.use(sessions({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
})
);

app.use(express.static("public"));

//rotas
const upload = require("./routes/upload-route");
const index = require("./routes/index.js");
const despesa = require("./routes/despesaRoute");
const conta = require("./routes/contaRoute");
const users = require("./routes/usersRoute");

app.use("/", index);
app.use("rotaDespesas", despesa);
app.use("rotaContas", conta);
app.use("/users", users);
app.use("/upload",upload);
app.use("/ok", (req, res, next) => {
    session = req.session;

    if (session.user == 1) {
        res.send("ok");
    } else {
        res.send("Not login");
    }
});

app.use((req, res) => {
    res.status(404).send({
        status: 404,
        error: "NOT FOUND",
    });
});

//parte do servidor
app.listen(3033, 'localhost', () => {
    console.log("SERVIDOR RODANDO ");
})

