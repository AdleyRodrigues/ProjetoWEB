class Despesa {
    constructor(nome, valor, categoria, formaPagamento, data){
        this.nome = nome;
        this.valor = valor;
        this.categoria = categoria;
        this.formaPagamento = formaPagamento;
        this.data = data;

    }
}

module.exports = Despesa;