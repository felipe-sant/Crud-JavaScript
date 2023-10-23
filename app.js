const express = require('express'); 
const ejs = require('ejs');
const bodyParser = require('body-parser')
const connection = require("./database/connection")

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    connection.query("select * from user", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            connection.query(
                "select request_id, user_name, request_name, request_desc, request_price, request_quantities from purchase_request pr inner join user u on pr.user_id = u.user_id group by request_id order by request_id", 
                (err, result2) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render('index', {usuarios: result, pedidos: result2})
                }
            })
        }
    })
})

app.get('/insertUser', (req, res) => {
    res.render('insertUser')
})

app.post("/insertUser", (req, res) => {
    const { name } = req.body;
    connection.query(
        "insert into user (user_name) values (?)",
        [name], 
        (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/")
        }
    })
})

app.get("/editUser/:id", (req, res) => {
    const id = req.params.id
    connection.query(
        "select * from user where user_id = ?", [id],
        (err, result) => {
            if (err) {
                console.log("Erro ao buscar registro", err)
                return
            } else {
                res.render("editUser", {user: result[0]})
            }
        }
    )
})

app.post("/editUser/:id", (req, res) => {
    const id = req.params.id
    const { name } = req.body
    connection.query(
        "update user set user_name = ? where user_id = ?", [name, id],
        (err, result) => {
            if (err) {
                console.log("Erro ao editar registro", err)
                return
            } else {
                res.redirect("/")
            }
        }
    )
})

app.get("/deleteUser/:id", (req,res) => {
    const id = req.params.id
    connection.query(
        'delete from user where user_id = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Excluido com sucesso", result)
                res.redirect("/")
            }
        }
    )
})

app.get("/insertRequest", (req, res) => {
    res.render("insertRequest")
})

app.post("/insertRequest", (req, res) => {
    const { id, name, desc, quantidade, preco } = req.body;
    connection.query(
        "insert into purchase_request (user_id, request_name, request_desc, request_price, request_quantities) values (?, ?, ?, ?, ?)", [id, name, desc, preco, quantidade], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.redirect("/")
            }
        }
    )
})

app.get("/editRequest/:id", (req, res) => {
    const id = req.params.id
    connection.query(
        "select * from purchase_request where request_id = ?", [id],
        (err, result) => {
            if (err) {
                console.log("Erro ao buscar registro", err)
                return
            } else {
                res.render("editRequest", {request: result[0]})
            }
        }
    )
})

app.post("/editRequest/:id", (req, res) => {
    const id = req.params.id
    const { name, desc, quantidade, preco, user_id } = req.body
    connection.query(
        "update purchase_request set user_id = ?, request_name = ?, request_desc = ?, request_price = ?, request_quantities = ? where request_id = ?", [user_id, name, desc, preco, quantidade, id],
        (err, result) => {
            if (err) {
                console.log("Erro ao editar registro", err)
                return
            } else {
                res.redirect("/")
            }
        }
    )
})

app.get("/deleteRequest/:id", (req,res) => {
    const id = req.params.id
    connection.query(
        'delete from purchase_request where request_id = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Excluido com sucesso", result)
                res.redirect("/")
            }
        }
    )
})

app.listen(3000, function(erro){
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})
