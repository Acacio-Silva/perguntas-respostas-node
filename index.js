const express = require('express');
const app = express();

//setando o ejs como renderizador de html
app.set('view engine', 'ejs');
// especificando onde estão os arquivos estaticos do projeto.
app.use(express.static('public'));

app.get("/", (req, res) =>{
    
    res.render("index")

});

app.listen(8080, ()=>{
    console.log("app rodando!")
})