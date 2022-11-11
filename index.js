const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/conexao")


//testando conexao
connection.authenticate().then(()=>{
    console.log('sucesso')
}).catch((error)=>{
    console.log("error")
})


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//setando o ejs como renderizador de html
app.set('view engine', 'ejs');
// especificando onde estão os arquivos estaticos do projeto.
app.use(express.static('public'));



app.get("/", (req, res) =>{
    res.render("index")
});

app.get("/perguntar", (req, res) =>{
    res.render("perguntar");
})

app.post("/salvarPergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send("titulo");
})


app.listen(8080, ()=>{
    console.log("app rodando!")
})