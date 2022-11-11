const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/conexao")
const perguntaModel = require('./database/Pergunta');


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
    perguntaModel.findAll({raw:true, order:[
        ['id','DESC'] // ASC = crescente - DESC = decrescente
    ]}).then((pergunta) =>{
        console.log(pergunta);
        res.render("index", {
            pergunta: pergunta
        })
    })
    
});

app.get("/pergunta/:id", (req, res)=>{
    var id = req.params.id;
    perguntaModel.findOne({
        where:{id :id}
    }).then((pergunta)=>{
        if(pergunta!=undefined){
            res.render('pergunta')
        }else{
            res.redirect('/')
        }
    })
})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar");
})

app.post("/salvarPergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect('/')
    })
})


app.listen(8080, ()=>{
    console.log("app rodando!")
})