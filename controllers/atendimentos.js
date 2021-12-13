const Atendimento = require('../models/atendimento')

module.exports = app =>{

    app.get('/atendimento', (req,res) => {

        Atendimento.lista(res)
    
    })

    app.get('/atendimento/:id', (req,res) => {
        const id = parseInt(req.parms.id)
        Atendimento.buscaPorId(id)
        res.send('OK')
    })

    app.post('/atendimento', (req,res) => {
        
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)

    })

}