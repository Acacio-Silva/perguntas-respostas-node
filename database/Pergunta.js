const Sequelize = require('sequelize');
const conn = require('./conexao');

//criando model com o sequelize no db
const Pergunta = conn.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull:false
    }
});
Pergunta.sync({force:false}).then(()=>{
    console.log("tabela criada!")
})

module.exports = Pergunta;