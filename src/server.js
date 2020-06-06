const express = require("express")
const server = express()

// Configurar pasta publica
server.use(express.static("public"))

// Configurar caminhos da minha aplicacao
// Pagina inicial
//req: requisicao
//res: resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})

// Ligar o servidor
server.listen(3000)