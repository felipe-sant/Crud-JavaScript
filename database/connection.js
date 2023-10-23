// incluir o mysql

const mysql = require("mysql2")

// criar a conexão com o banco de dados

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'fatec',
    password: 'P@ssword1234',
    database: 'list03'
});

// conectar ao banco de dados

connection.connect(function(err) {
    console.log("conexao funcionou list03 xd")
});

module.exports = connection;