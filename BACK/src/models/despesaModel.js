class Despesa {
    constructor(descricao, valor, categoria, pagamento, despesa_data, conta_id){
        this.descricao = descricao;
        this.valor = valor;
        this.categoria = categoria;
        this.pagamento = pagamento;
        this.despesa_data = despesa_data;
        this.conta_id = conta_id;
    }
}

module.exports = Despesa;