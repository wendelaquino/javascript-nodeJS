const Atendimento = require('../models/atendimento')

module.exports = app =>{

    app.get('/atendimento', (req,res) => {
        res.send('Você está na rota de atendimentos, você esta realizando um GET')
    })

    app.post('/atendimento', (req,res) => {
        
        const atendimento = req.body
        Atendimento.adiciona(atendimento)

        res.send('Post atendimento');
    })

}