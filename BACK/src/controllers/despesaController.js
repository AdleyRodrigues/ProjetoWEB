const Despesa = require("../models/despesaModel");
const DespesaService = require("../services/despesaService");
var despesaService = new DespesaService();


exports.get = async (req, res) => {//colocar o async antes dos parametros  
    res.json(await despesaService.getAll());//e await depois do json
}; 

exports.post = async (req, res) => {
    res.json(await despesaService.add(new Despesa(req.body.descricao, req.body.valor, req.body.categoria, req.body.pagamento, req.body.despesa_data, req.body.conta_id)))
};

exports.getById = async (req, res) => {
    res.json(await despesaService.getById(req.params.despesa_id));
};

exports.getByQtd = async (req, res) => {
    res.json(await despesaService.getByQtd(req.params.qtd));
};

exports.put = async (req, res) => {
    res.json(
        await despesaService.update(
            req.params.despesa_id,
            new Despesa(req.body.descricao, req.body.valor, req.body.categoria, req.body.pagamento, req.body.despesa_data)
        )
    );
};

exports.delete = async (req, res) => {
    res.json(await despesaService.delete(req.params.despesa_id));
};

