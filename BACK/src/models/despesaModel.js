class Despesa {
    constructor(descricao, valor, categoria, forma_pagamento, data){
        this.descricao = descricao;
        this.valor = valor;
        this.categoria = categoria;
        this.forma_pagamento = forma_pagamento;
        this.data = data;

    }
}

module.exports = Despesa;