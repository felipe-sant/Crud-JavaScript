const connection = require("./connection")

function insertUser(name) {
    const query = `insert into user (user_name) values (?)`

    connection.query(query, [name], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("cliente inserido com sucesso")
        }
    })
}

function alterUser(id, name) {
    const query = `update user set user_name = ? where user_id = ?`

    connection.query(query, [name, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("cliente alterado com sucesso")
        }
    })
}

function deleteUser(id) {
    const query = `delete from user where user_id = ?`

    connection.query(query, [id], (err, result) => {
        if (err) {
            console.log(err)

        } else {
            console.log("cliente excluido com sucesso")
        }
    })
}

function listUser() {
    const query = `select * from user`

    connection.query(query, (err, result) => {
        if (err) {
            console.log("deu erro")
        } else {
            return result
        }
    })
}

function insertRequest(user_id, name, desc, price, quantities) {
    const query = `insert into purchase_request (user_id, request_name, request_desc, request_price, request_quantities) values (?, ?, ?, ?, ?)`
    connection.query(query, [user_id, name, desc, price, quantities], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("pedido inserido com sucesso")
        }
    })
}

function alterRequest(id, user_id, name, desc, price, quantities) {
    const query = `update purchase_request set user_id = ?, request_name = ?, request_desc = ?, request_price = ?, request_quantities = ? where request_id = ?`

    connection.query(query, [user_id, name, desc, price, quantities, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("pedido alterado com sucesso")
        }
    })
}

function deleteRequest(id) {
    const query = `delete from purchase_request where request_id = ?`

    connection.query(query, [id], (err, result) => {
        if (err) {
            console.log(err)

        } else {
            console.log("pedido excluido com sucesso")
        }
    })
}

function listRequest(id) {
    const query = `select * from purchase_request where request_id = ?`

    connection.query(query, [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result[0])
        }
    })
}

function listUserRequest(id) {
    const query = `select u.user_id, u.user_name, p.request_id, p.request_name, p.request_desc, p.request_price, request_quantities from user u inner join purchase_request p on u.user_id = p.user_id where request_id = ?;`

    connection.query(query, [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result[0])
        }
    })
}

module.exports = {insertRequest, insertUser, alterRequest, alterUser, deleteRequest, deleteUser, listRequest, listUserRequest, listUser}