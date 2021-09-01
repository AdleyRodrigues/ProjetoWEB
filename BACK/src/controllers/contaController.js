const Conta = require("../models/contaModel");
const ContaService = require("../services/contaService");
var contaService = new ContaService();

exports.get = async (req, res) => {//colocar o async antes dos parametros
    res.json(await contaService.getAll());//e await depois do json
};

exports.post = async (req, res) => {
    let avatar = req.file ? `uploads/${req.file.originalname}` : '';
    res.json(await contaService.add(new Conta(req.body.nome, req.body.usuario, req.body.senha, avatar)));
};

exports.getById = async (req, res) => {
    res.json(await contaService.getById(req.params.id));
};

exports.getByName = async (req, res) => {
    res.json(await contaService.getByName(req.params.nome));
};

exports.put = async (req, res) => {
    res.json(
        await contaService.update(
            req.params.id,
            new Conta(req.body.nome, req.body.usuario, req.body.senha)
            )
    );
};

exports.verifica = async (req, res) => {
    res.send({success: await contaService.verifica(req.body.usuario,req.body.senha)});
};

exports.delete = async (req, res) => {
    res.json(await contaService.delete(req.params.id));
};
