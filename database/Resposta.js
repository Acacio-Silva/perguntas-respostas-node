const Sequelize = require('sequelize');
const conn = require('./conexao');

//criando model com o sequelize no db
const Resposta = conn.define('Respostas',{
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force:false})

module.exports = Resposta;