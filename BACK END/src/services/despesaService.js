const despesaRepo = require("../repositories/despesaRepo");

class DespesaService {

    add(despesa){
        return despesaRepo.save(despesa);
    }

    getAll() {
        return despesaRepo.findAll();
      }

    getById(id) {
        return despesaRepo.findOne(id);
    }

    getByName(nome) {
        return despesaRepo.findByName(nome);
    }

    update(id, despesa) {
        return despesaRepo.update(id, despesa);
    }

    delete(id) {
        return despesaRepo.delete(id);
    }
}

module.exports  = DespesaService; 
