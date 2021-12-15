const conexao = require('../infraestrutura/conexao')
const uploadArquivo = require('../uploadDeArquivos/uploadDeArquivos')

class Pet {
   
    adiciona(pet, res) {
   
        const query = ' INSERT INTO Pets SET ?'

        uploadArquivo(pet.imagem, pet.nome, (novoCaminho) => {
   
            const novoPet = {nome: pet.nome, imagem: novoCaminho}

            conexao.query(query, novoPet, erro => (erro ? res.status(400).json(erro) : res.status(200).json(pet)))
        })
    }
}