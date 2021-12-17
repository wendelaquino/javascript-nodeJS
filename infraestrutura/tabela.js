class Tabelas {
    init(conexao) {
        this.conexao = conexao
        
        this.criarAtendimento()
        this.criarPets()
    }

    criarAtendimento(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL,status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => (erro ? console.log(erro): console.log('Tabela atendimento criada com sucesso')))
    }

    criarPets(){
        const query = 'CREATE TABLE IF NOT EXISTS Pets (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), imagem varchar(200), primary key (id))'

        this.conexao.query(query, erro => (erro ? console.log(erro) : console.log('Tabela Pets foi criada com sucesso')))

    }
}

module.exports = new Tabelas;