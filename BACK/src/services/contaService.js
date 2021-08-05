const contaRepo = require("../repositories/contaRepo");

class ContaService {

    add(conta){
        
        return contaRepo.save(conta);
    }

    getAll() {
        return contaRepo.findAll();
      }

    getById(id) {
        return contaRepo.findOne(id);
    }

    getByName(nome) {
        return contaRepo.findByName(nome);
    }

    update(id, conta) {
        return contaRepo.update(id, conta);
    }

    delete(id) {
        return contaRepo.delete(id);
    }

    verifica(usuario,senha){
        return contaRepo.verificaConta(usuario,senha);
    }
}

module.exports  = ContaService; 
