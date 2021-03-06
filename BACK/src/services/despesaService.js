const despesaRepo = require("../repositories/despesaRepo");

class DespesaService {

    add(despesa){
        return despesaRepo.save(despesa);
    }

    getAll() {
        return despesaRepo.findAll();
      }

    getById(despesa_id) {
        return despesaRepo.findOne(despesa_id);
    }

    getByName(descricao, conta_id) {
        return despesaRepo.findByName(descricao, conta_id);
    }

    getByQtd(qtd, conta_id) {
        return despesaRepo.findByQtd(qtd,conta_id);
    }

    update(despesa_id, despesa) {
        return despesaRepo.update(despesa_id, despesa);
    }

    delete(despesa_id) {
        return despesaRepo.delete(despesa_id);
    }
}

module.exports  = DespesaService; 
