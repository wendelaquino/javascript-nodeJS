const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) =>(erro ? console.log(erro) : console.log(resultados)))
    }
}
module.exports = new Atendimento