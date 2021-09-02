const pool = require("../dbs/postgres");

exports.save = async (despesa) => {//adicionar 
    const result = await pool.query(
      "INSERT INTO despesa(valor, despesa_data, descricao, categoria, pagamento, conta_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
      [despesa.valor, despesa.despesa_data, despesa.descricao, despesa.categoria, despesa.pagamento, despesa.conta_id]
    );
    return result.rows[0];
  };

exports.findAll = async () => {//listar tudo
 const result = await pool.query("SELECT * FROM despesa order by despesa_id;");
 return result.rows;
};

exports.findOne = async (despesa_id) => {//pesquisar pelo id
    const result = await pool.query("SELECT * FROM despesa WHERE despesa_id=$1;", [despesa_id]);
    return result.rows[0];
  };
  
  exports.findByQtd = async (qtd, conta_id) => {//pesquisar pela qtd
    //console.log(id);
    const result = await pool.query("SELECT * FROM despesa  WHERE conta_id=$1 LIMIT $2", [conta_id,qtd ]);
    return result.rows;
  };

  exports.findByName = async (descricao, conta_id) => {//pesquisar pela qtd
    //console.log(id);
    const result = await pool.query("SELECT * FROM despesa  WHERE conta_id=$1 AND descricao LIKE $2", [conta_id, `%${descricao}%`]);
    return result.rows;
  };
  
  exports.update = async (despesa_id, despesa) => {//atualizar
    const result = await pool.query(
      "UPDATE despesa SET descricao=$1, valor=$2, categoria=$3, pagamento=$4, despesa_data=$5 WHERE despesa_id=$6 RETURNING *;",
      [despesa.descricao, despesa.valor, despesa.categoria, despesa.pagamento, despesa.despesa_data,despesa_id]
    );
    return result.rows[0];
  };
  
  exports.delete = async (despesa_id) => {//deletar 
    await pool.query("DELETE FROM despesa WHERE despesa_id=$1;", [despesa_id]);
  };
