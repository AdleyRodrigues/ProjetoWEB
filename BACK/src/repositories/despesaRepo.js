const pool = require("../dbs/postgres");

exports.save = async (despesa) => {//adicionar 
    const result = await pool.query(
      "INSERT INTO despesa(valor, despesa_data, descricao, categoria, pagamento, conta_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
      [despesa.valor, despesa.despesa_data, despesa.descricao, despesa.categoria, despesa.pagamento, despesa.conta_id]
    );
    return result.rows[0];
  };

exports.findAll = async () => {//listar tudo
 const result = await pool.query("SELECT * FROM despesa;");
 return result.rows;
};

exports.findOne = async (conta_id) => {//pesquisar pelo id
    const result = await pool.query("SELECT * FROM despesa WHERE conta_id=$1;", [conta_id]);
    return result.rows;
  };
  
  exports.findByQtd = async (qtd) => {//pesquisar pela qtd
    const result = await pool.query("SELECT * FROM despesa LIMIT $1", [qtd]);
    return result.rows;
  };
  
  exports.update = async (despesa_id, despesa) => {//atualizar
    const result = await pool.query(
      "UPDATE despesa SET nome=$1, categoria=$2, pagamento=$3, data=$4 WHERE despesa_id=$5 RETURNING *;",
      [despesa.nome, despesa.categoria, despesa.pagamento, despesa.data,despesa_id]
    );
    return result.rows[0];
  };
  
  exports.delete = async (despesa_id) => {//deletar 
    await pool.query("DELETE FROM despesa WHERE despesa_id=$1;", [despesa_id]);
  };
