const pool = require("../dbs/postgres");

exports.save = async (despesa) => {//adicionar 
    const result = await pool.query(
      "INSERT INTO despesa(valor, despesa_data, descricao, categoria, forma_pagamento) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
      [ despesa.valor, despesa.data, despesa.descricao, despesa.categoria, despesa.forma_pagamento]
    );
    return result.rows[0];
  };

exports.findAll = async () => {//listar tudo
 const result = await pool.query("SELECT * FROM despesa;");
 return result.rows;
};

exports.findOne = async (despesa_id) => {//pesquisar pelo id
    const result = await pool.query("SELECT * FROM despesa WHERE despesa_id=$1;", [despesa_id]);
    return result.rows[0];
  };
  
  exports.findByName = async (name) => {//pesquisar pelo nome 
    const result = await pool.query("SELECT * FROM despesa WHERE name=$1;", [
      name,
    ]);
    return result.rows;
  };
  
  exports.update = async (despesa_id, despesa) => {//atualizar
    const result = await pool.query(
      "UPDATE despesa SET nome=$1, categoria=$2, formaPagamento=$3, data=$4 WHERE despesa_id=$5 RETURNING *;",
      [despesa.nome, despesa.categoria, despesa.formaPagamento, despesa.data,despesa_id]
    );
    return result.rows[0];
  };
  
  exports.delete = async (despesa_id) => {//deletar 
    await pool.query("DELETE FROM despesa WHERE despesa_id=$1;", [despesa_id]);
  };
