const express = require("express")
const server = express()

// Configurar caminhos da minha aplicacao
// Pagina inicial
//req: requisicao
//res: resposta
server.get("/", (req, res) => {
    res.send("Hello World!")
})

// Ligar o servidor
server.listen(3000)