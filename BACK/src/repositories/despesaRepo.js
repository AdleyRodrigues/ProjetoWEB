const pool = require("../dbs/postgres");

exports.save = async (despesa) => {//adicionar 
    const result = await pool.query(
      "INSERT INTO despesa(nome, categoria, formaPagamento, data, valor) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
      [despesa.nome, despesa.categoria, despesa.formaPagamento, despesa.data, despesa.valor]
    );
    return result.rows[0];
  };

exports.findAll = async () => {//listar tudo
 const result = await pool.query("SELECT * FROM despesa;");
 return result.rows;
};

exports.findOne = async (id) => {//pesquisar pelo id
    const result = await pool.query("SELECT * FROM despesa WHERE id=$1;", [id]);
    return result.rows[0];
  };
  
  exports.findByName = async (name) => {//pesquisar pelo nome 
    const result = await pool.query("SELECT * FROM despesa WHERE name=$1;", [
      name,
    ]);
    return result.rows;
  };
  
  exports.update = async (id, despesa) => {//atualizar
    const result = await pool.query(
      "UPDATE despesa SET nome=$1, categoria=$2, formaPagamento=$3, data=$4 WHERE id=$5 RETURNING *;",
      [despesa.nome, despesa.categoria, despesa.formaPagamento, despesa.data,id]
    );
    return result.rows[0];
  };
  
  exports.delete = async (id) => {//deletar 
    await pool.query("DELETE FROM despesa WHERE id=$1;", [id]);
  };
