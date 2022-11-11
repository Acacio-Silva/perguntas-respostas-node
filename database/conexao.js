const Sequelize = require('sequelize');
const conexao = new Sequelize('perguntas','root','root',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = conexao;