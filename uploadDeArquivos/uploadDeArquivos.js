const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1))

    if(tipoEhValido === -1){
    
        console.log('Erro! Tipo invalido')
    
    } else{

        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(novoCaminho))
    
        }

}


// fs.createReadStream('./assets/salsicha.jpg')
//     .pipe(fs.createWriteStream('./assets/salsicha.stream.jpg'))
//     .on('finish', () => console.log('Imagem foi escrita com sucesso.'))

// fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
//     console.log('A imagem foi bufferizada'); 
//     console.log(buffer);

//     fs.writeFile('./assets/salsicha2.jpg',buffer, (erro, buffer) => {
//         console.log('A imagem foi escrita');
//     })
// })