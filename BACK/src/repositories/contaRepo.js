  const pool = require("../dbs/postgres");

exports.save = async (conta) => {//adicionar
    const result = await pool.query(
      "INSERT INTO conta(nome, usuario, senha) VALUES ($1,$2,$3) RETURNING *;",
      [conta.nome, conta.usuario, conta.senha]
    );
    return result.rows[0];
  };

exports.findAll = async () => {//listar tudo
 const result = await pool.query("SELECT * FROM conta;");
 return result.rows;
};

exports.verificaConta = async (usuario,senha) => {
  const result = await pool.query(
    "SELECT * FROM conta where usuario = $1 AND senha =$2;",
    [usuario,senha]
    );
    if(result.rows != 0){
        return true;
    }
      else {
        return false;
      }
}

exports.findOne = async (id) => {//pesquisar pelo id
    const result = await pool.query("SELECT * FROM conta WHERE id=$1;", [id]);
    return result.rows[0];
  };

  exports.findByName = async (name) => {//pesquisar pelo nome
    const result = await pool.query("SELECT * FROM conta WHERE name=$1;",
    [name,
    ]);
    return result.rows;
  };

  exports.update = async (id, carro) => {//atualizar
    const result = await pool.query(
      "UPDATE conta SET nome=$1, usuario=$2, senha=$3 WHERE id=$3 RETURNING *;",
      [conta.nome, conta.usuario, conta.senha, id]
    );
    return result.rows[0];
  };

  exports.delete = async (id) => {//deletar
    await pool.query("DELETE FROM conta WHERE id=$1;", [id]);
  };
