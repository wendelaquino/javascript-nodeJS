const fs = require('fs');

fs.createReadStream('./assets/salsicha.jpg')
    .pipe(fs.createWriteStream('./assets/salsicha.stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso.'))

// fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
//     console.log('A imagem foi bufferizada'); 
//     console.log(buffer);

//     fs.writeFile('./assets/salsicha2.jpg',buffer, (erro, buffer) => {
//         console.log('A imagem foi escrita');
//     })
// })